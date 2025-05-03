import requests
from pytrends.request import TrendReq
import openai
import json
from datetime import datetime
import logging

# Configuratie van API keys
GNEWS_API_KEY = 'bfb5e47a6d0e1131f61300cd7d311015'
UNSPLASH_API_KEY = 'tBqm3FreNChWfPNuF5Hh8L-kiXtzglwqx1lUaTLiDh8'
OPENAI_API_KEY = 'sk-abcdqrstefgh5678abcdqrstefgh5678abcdqrst'

# Instellen van OpenAI
openai.api_key = OPENAI_API_KEY

# Pad naar het blogPosts.ts bestand
BLOGPOSTS_FILE_PATH = "src/lib/blogPosts.ts"

# Geldige categorieën en auteurs
VALID_CATEGORIES = ["Nieuws", "Gids", "Reviews"]
VALID_AUTHORS = ["Andy", "Sara", "Luc"]

# Logging configureren
logging.basicConfig(
    filename="blog_generator.log",
    level=logging.INFO,
    format="%(asctime)s [%(levelname)s] %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S"
)

# Functie om nieuwsartikelen op te halen via GNews API
def fetch_latest_news(query):
    try:
        url = f'https://gnews.io/api/v4/search?q={query}&token={GNEWS_API_KEY}'
        response = requests.get(url)
        response.raise_for_status()
        logging.info("Succesvol nieuws opgehaald van GNews API.")
        return response.json()['articles']
    except Exception as e:
        logging.error(f"Fout bij ophalen van nieuws: {e}")
        return []

# Functie om trending zoekwoorden op te halen via PyTrends
def fetch_trending_keywords():
    try:
        pytrends = TrendReq(hl='nl-NL', tz=360)
        pytrends.build_payload(kw_list=['casino', 'gokken', 'bonussen'], geo='NL')
        trends = pytrends.related_queries()
        logging.info("Succesvol trending zoekwoorden opgehaald via PyTrends.")
        return [k for k, v in trends.items() if v]
    except Exception as e:
        logging.error(f"Fout bij ophalen van trending zoekwoorden: {e}")
        return []

# Functie om afbeeldingen op te halen via Unsplash API
def fetch_image(query):
    try:
        url = f"https://api.unsplash.com/search/photos?query={query}&client_id={UNSPLASH_API_KEY}"
        response = requests.get(url)
        response.raise_for_status()
        photos = response.json().get('results', [])
        if photos:
            logging.info("Succesvol afbeelding opgehaald van Unsplash API.")
            return photos[0]['urls']['regular']  # Eerste afbeelding in de zoekresultaten
        logging.warning("Geen afbeeldingen gevonden via Unsplash API.")
        return None
    except Exception as e:
        logging.error(f"Fout bij ophalen van afbeelding: {e}")
        return None

# Functie om een blog te genereren met OpenAI
def generate_blog(title, keywords, news, image_url):
    try:
        prompt = f"""
        Schrijf een informele en grappige blog gericht op Nederlandse gokkers. Gebruik de volgende titel: "{title}".
        Gebruik deze zoekwoorden: {', '.join(keywords)}.
        Gebruik dit nieuws als inspiratie: {news}.
        Voeg deze afbeelding toe: {image_url}.
        """
        response = openai.Completion.create(
            engine="text-davinci-003",
            prompt=prompt,
            max_tokens=1500,
            temperature=0.7
        )
        logging.info("Succesvol blog gegenereerd met OpenAI.")
        return response.choices[0].text.strip()
    except Exception as e:
        logging.error(f"Fout bij genereren van blog: {e}")
        return ""

# Functie om meta-tags te genereren
def generate_meta_tags(title, description, keywords):
    return {
        "title": title,
        "description": description,
        "keywords": ", ".join(keywords)
    }

# Functie om nieuwe blogpost op te slaan in blogPosts.ts
def save_to_blogposts(blog_post):
    try:
        with open(BLOGPOSTS_FILE_PATH, "r", encoding="utf-8") as file:
            content = file.read()

        # Zoek naar de bestaande array van blogPosts
        start_index = content.find("[")
        end_index = content.rfind("]")

        if start_index == -1 or end_index == -1:
            raise ValueError("Bestand bevat geen geldige blogPosts-array.")

        # Bestaande blogs laden als JSON
        existing_posts = json.loads(content[start_index:end_index + 1])

        # Nieuwe blog toevoegen
        existing_posts.append(blog_post)

        # Update de array in het bestand
        updated_content = (
            content[:start_index]
            + json.dumps(existing_posts, indent=2, ensure_ascii=False)
            + content[end_index + 1:]
        )

        with open(BLOGPOSTS_FILE_PATH, "w", encoding="utf-8") as file:
            file.write(updated_content)

        logging.info("Nieuwe blog succesvol toegevoegd aan blogPosts.ts!")
    except Exception as e:
        logging.error(f"Fout bij opslaan van blog: {e}")

# Validatiefunctie voor categorieën en auteurs
def validate_blog_data(category, author):
    if category not in VALID_CATEGORIES:
        logging.error(f"Ongeldige categorie: {category}. Geldige categorieën zijn: {VALID_CATEGORIES}.")
        return False
    if author not in VALID_AUTHORS:
        logging.error(f"Ongeldige auteur: {author}. Geldige auteurs zijn: {VALID_AUTHORS}.")
        return False
    return True

# Hoofdprogramma
def main():
    # Zoekwoord en nieuws ophalen
    zoekterm = "online gokken Nederland"
    nieuws = fetch_latest_news(zoekterm)

    # Trending zoekwoorden ophalen
    trends = fetch_trending_keywords()
    trending_keywords = trends if trends else ["casino", "gokken", "bonussen"]  # Fallback trending keywords

    # Afbeelding ophalen
    afbeelding = fetch_image(zoekterm)

    # Blog genereren
    if nieuws and trending_keywords and afbeelding:
        blog_title = "De nieuwste trends in online gokken"
        blog_description = nieuws[0]['description']  # Gebruik de eerste nieuwsomschrijving als meta-omschrijving
        blog_content = generate_blog(blog_title, trending_keywords, nieuws[0]['description'], afbeelding)

        # Meta-tags genereren
        meta_tags = generate_meta_tags(blog_title, blog_description, trending_keywords)

        # Blogpost object voorbereiden
        category = "Nieuws"  # Voorbeeldcategorie
        author = "Andy"  # Voorbeeldauteur

        if not validate_blog_data(category, author):
            logging.error("Validatiefout: Blog wordt niet opgeslagen.")
            return

        blog_post = {
            "id": int(datetime.now().timestamp()),  # Unieke ID gebaseerd op timestamp
            "slug": blog_title.lower().replace(" ", "-"),
            "title": blog_title,
            "category": category,
            "excerpt": blog_description,
            "image": afbeelding,
            "date": datetime.now().strftime("%d %B %Y"),  # Datum in "1 mei 2025" formaat
            "author": author,
            "content": blog_content,
            "readTime": "5 min"
        }

        # Blog opslaan in blogPosts.ts
        save_to_blogposts(blog_post)
    else:
        logging.error("Er is onvoldoende data beschikbaar om een blog te genereren.")

if __name__ == "__main__":
    main()

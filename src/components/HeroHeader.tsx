import { ReactNode } from 'react';

interface HeroHeaderProps {
  label: string;
  title: ReactNode;
  description: string;
  bullets: { icon?: ReactNode; text: string }[];
}

export const HeroHeader = ({ label, title, description, bullets }: HeroHeaderProps) => (
  <section className="w-full flex justify-center bg-transparent">
    <div className="bg-white rounded-3xl shadow-xl w-full max-w-5xl mx-auto mt-0 mb-8 px-4 py-8 sm:py-12 flex flex-col items-center text-center relative">
      <span className="inline-block mb-4 px-4 py-1 rounded-full bg-gokkerz-green/10 text-gokkerz-green font-semibold text-xs tracking-wide">
        {label}
      </span>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
        {title}
      </h1>
      <p className="text-gray-600 text-base sm:text-lg mb-6 max-w-2xl mx-auto">{description}</p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        {bullets.map((b, i) => (
          <div key={i} className="flex items-center gap-2 text-sm text-gray-700 bg-gray-50 rounded-lg px-4 py-2 min-w-[180px] justify-center">
            {b.icon}
            <span>{b.text}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HeroHeader;

import { TextEffect } from "@components/animate";

export function HeroText() {
  return (
    <div className="flex flex-col items-center text-4xl leading-tight tracking-tight text-center">
      <TextEffect as="h1" per="char" className="max-w-sm font-semibold">
        Full-Service Development Partner
      </TextEffect>
      <TextEffect as="h1" per="char" delay={1.5} className="font-serif">
        For Commerce Brands
      </TextEffect>
    </div>
  );
}

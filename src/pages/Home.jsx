import React from "react";
import HeroSection from "../components/home/HeroSection";
import StatsBar from "../components/home/StatsBar";
import ThemeGrid from "../components/home/ThemeGrid";
import FeaturedSources from "../components/home/FeaturedSources";
import MethodologySection from "../components/home/MethodologySection";

const HERO_IMAGE = "https://media.base44.com/images/public/6a2dc1d745b60383a960bb0c/0aca65864_generated_c05cc594.png";
const SOIL_IMAGE = "https://media.base44.com/images/public/6a2dc1d745b60383a960bb0c/7d8dcbadd_generated_13fcc966.png";

export default function Home() {
  return (
    <div>
      <HeroSection heroImage={HERO_IMAGE} />
      <StatsBar />
      <ThemeGrid />
      <FeaturedSources />
      <MethodologySection soilImage={SOIL_IMAGE} />
    </div>
  );
}

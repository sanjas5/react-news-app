import { useEffect, useState } from "react";
import heroData from "../../utils/constants/heroData";
import Background from "./background/Background";
import Hero from "./hero/Hero";

export default function LandingPage() {
  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 2 ? 0 : count + 1;
      });
    }, 3000);
  }, []);

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount} />
      <Hero
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        playStatus={playStatus}
        setHeroCount={setHeroCount}
        setPlayStatus={setPlayStatus}
      />
    </div>
  );
}

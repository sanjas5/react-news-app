import { NavLink } from "react-router-dom";
import arrowBtn from "../../../assets/arrowBtn.png";
import pauseIcon from "../../../assets/pauseIcon.png";
import playIcon from "../../../assets/playIcon.png";
import { IHero } from "../../../entities/IHero";
import "./hero.css";

function Hero({
  heroData,
  heroCount,
  playStatus,
  setHeroCount,
  setPlayStatus,
}: IHero) {
  return (
    <div className="hero">
      <div className="heroText">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <NavLink to="/news">
        <div className="heroExplore">
          <p>Explore the news</p>
          <img src={arrowBtn} alt="" />
        </div>
      </NavLink>
      <div className="heroDotPlay">
        <ul className="heroDots">
          <li
            onClick={() => setHeroCount(0)}
            className={heroCount === 0 ? "heroDot orange" : "heroDot"}
          ></li>
          <li
            onClick={() => setHeroCount(1)}
            className={heroCount === 1 ? "heroDot orange" : "heroDot"}
          ></li>
          <li
            onClick={() => setHeroCount(2)}
            className={heroCount === 2 ? "heroDot orange" : "heroDot"}
          ></li>
        </ul>
        <div className="div heroPlay">
          <img
            onClick={() => setPlayStatus(!playStatus)}
            src={playStatus ? pauseIcon : playIcon}
            alt=""
          />
          <p>See the video</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;

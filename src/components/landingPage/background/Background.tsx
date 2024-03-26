import videoNews from "../../../assets/videoNews.mp4";
import news1 from "../../../assets/news1.jpg";
import news2 from "../../../assets/news2.jpg";
import news3 from "../../../assets/news3.jpg";
import { IBackground } from "../../../entities/IBackground";
import "./background.css";

function Background({ playStatus, heroCount }: IBackground) {
  if (playStatus)
    return (
      <video className="background fade-in" autoPlay loop muted>
        <source src={videoNews} type="video/mp4" />
      </video>
    );
  switch (heroCount) {
    case 0:
      return <img src={news1} className="background fade-in" alt="" />;
    case 1:
      return <img src={news2} className="background fade-in" alt="" />;
    case 2:
      return <img src={news3} className="background fade-in" alt="" />;
    default:
      return <img src={news1} className="background fade-in" alt="" />;
  }
}

export default Background;

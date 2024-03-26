import { INYtimes } from "../../../entities/INYtimes";
import getTimeElapsedString from "../../../utils/helperFunctions/timeElapsed";
import noImage from "../../../assets/noImage.png";
import "./newsItem.css";

interface IArticleProps {
  article: INYtimes;
}

function NYtimesItem({ article }: IArticleProps) {
  return (
    <a href={article.web_url}>
      <div className="newsItem">
        <img src={noImage} className="noImageContainer" alt=""></img>
        <div className="articleContent">
          <div className="articleSection">
            {article.news_desk ? article.news_desk : "Category"}
          </div>
          <h3 className="articleTitle">{article.headline.main}</h3>
          <div className="articlePublishedAt">
            <p>{getTimeElapsedString(article.pub_date.toString())}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default NYtimesItem;

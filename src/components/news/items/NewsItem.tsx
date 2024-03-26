import { IArticle } from "../../../entities/IArticle";
import getTimeElapsedString from "../../../utils/helperFunctions/timeElapsed";
import noImage from "../../../assets/noImage.png";
import "./newsItem.css";

interface IArticleProps {
  article: IArticle;
}
function NewsItem({ article }: IArticleProps) {
  return (
    <a href={article.url}>
      <div className="newsItem">
        <img
          className="newsImg"
          src={article.urlToImage ? article.urlToImage : noImage}
          alt=""
        ></img>

        <div className="articleContent">
          <p className="articleSourceName">{article.source.name}</p>
          <h3 className="articleTitle">{article.title}</h3>
          <p className="articleDesc">{article.description}</p>
          <div className="articlePublishedAt">
            <p>{getTimeElapsedString(article.publishedAt.toString())}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default NewsItem;

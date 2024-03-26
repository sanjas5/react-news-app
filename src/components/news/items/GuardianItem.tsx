import { IGuardianArticle } from "../../../entities/IGuardianArticle";
import getClass from "../../../utils/constants/getSectionColorClass";
import getTimeElapsedString from "../../../utils/helperFunctions/timeElapsed";
import noImage from "../../../assets/noImage.png";
import "./newsItem.css";

interface IArticleProps {
  article: IGuardianArticle;
}

function GuardianItem({ article }: IArticleProps) {
  return (
    <a href={article.webUrl}>
      <div className="newsItem">
        <img src={noImage} className="noImageContainer" alt=""></img>
        <div className="articleContent">
          <div className={`articleSection ${getClass(article)}`}>
            {article.sectionName}
          </div>
          <h3 className="articleTitle">{article.webTitle}</h3>

          <div className="articlePublishedAt">
            <p>{getTimeElapsedString(article.webPublicationDate.toString())}</p>
          </div>
        </div>
      </div>
    </a>
  );
}

export default GuardianItem;

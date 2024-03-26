import { IGuardianArticle } from "../../entities/IGuardianArticle";

const getClass = (article: IGuardianArticle) => {
  switch (article.sectionName) {
    case "Opinion":
      return "opinionSection";
    case "Sport":
      return "sportSection";
    case "Business":
      return "businessSection";
    case "Life and style":
      return "lifeStyleSection";
    case "US news":
      return "USNewsSection";
    case "World news":
      return "worldNewsSection";
    case "Football":
      return "footballSection";
    case "Money":
      return "moneySection";
    case "Politics":
      return "politicsSection";
    default:
      break;
  }
};

export default getClass;

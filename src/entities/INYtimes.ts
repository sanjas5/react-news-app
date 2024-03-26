interface IHeadline {
  main: string;
}
export interface INYtimes {
  _id: string;
  headline: IHeadline;
  web_url: string;
  pub_date: Date;
  news_desk: string;
}

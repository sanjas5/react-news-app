interface IDeroData {
  text1: string;
  text2: string;
}
export interface IHero {
  heroData: IDeroData;
  heroCount: number;
  playStatus: boolean;
  setPlayStatus: React.Dispatch<React.SetStateAction<boolean>>;
  setHeroCount: React.Dispatch<React.SetStateAction<number>>;
}

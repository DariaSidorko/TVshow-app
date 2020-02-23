export interface ICurrentShow {
  name: string,
  language: string,
  genres: string,
  status: string,
  officialSite: string,
  runtime: number,
  premiered: string
  time: string,
  days: string,
  rating: number,
  network: string, //network -> name
  country: string, //country -> code
  image: string,
  summary: string
}

export interface ICurrentShowCast {
  castName: string,
  castURL: string,
  castImage: string,
  characterName: string,
  characterURL: string,
  characterImage: string
}


export interface IFrontPage {
  airtime: string,
  name: string, //show -> name
  type: string, 
  officialSite: string,
  rating: number,
  //webChannel: string,
  imdb: string,
  image: string //medium
}


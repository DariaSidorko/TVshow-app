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
  summary: string,
}


export interface IFrontPage {
  name: string, //show -> name
  type: string,
  airtime: string, 
  officialSite: string,
  rating: number,
  networkName: string,
  imdb: string,
  image: string //medium
}


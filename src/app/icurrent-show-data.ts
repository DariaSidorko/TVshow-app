export interface ICurrentShowData {
    show: { 
      id: number,
      name: string,
      language: string,
      genres: [string],
      status: string,
      runtime: number,
      premiered: string,
      officialSite: string,
      schedule: {
        time: string,
        days: [string]
      }
      rating: {
        average: number
      }
      network: {
        name: string,
        country: {
          code: string
        }
      } //network -> name
      image: {
        medium: string
      }
      summary: string,
    }
}

export interface ICurrentShowCastData {
  _embedded: {
    cast: [
      {
      person: {
        name: string,
        url: string,
        image: {
          medium: string
        }
      }
      character: {
        name: string,
        url: string,
        image: {
          medium: string
        }
      }
    }
  ]
 }
}


export interface ICurrentShowSeasonsData{        
  number: number,
  name: string,
  episodeOrder: number,
  premiereDate: string,
  endDate: string
}


export interface IFrontPageData {
  airtime: string, 
  airstamp: string,
  season: number,
  runtime: number,
  show: {
    name: string, //show -> name
    type: string,
    officialSite: string,
    genres: [string],
    rating: {
      average: number
    }
   // webChannel: {
  //    name: string,
   // },  
    externals: {
      imdb: string
    }
    image: { 
      medium: string //medium
    }
    summary: string,
  }
}


export interface ICurrentShowData {
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
    summary: string
  
}

export interface IFrontPageData {
  airtime: string, 
  show: {
    name: string, //show -> name
    type: string
    officialSite: string,
    rating: {
      everage: number,
    }
    network: {
      name: string,
    }
    externals: {
      imdb: string,
    }
    image: { 
      medium: string //medium
    }
  }
  
  
  
}


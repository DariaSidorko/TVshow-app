export interface ICurrentShowData {
    name: string,
    language: string,
    genres: [string]
    runtime: number,
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

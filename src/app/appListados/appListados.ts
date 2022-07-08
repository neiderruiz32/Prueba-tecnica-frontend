// interfaces para obtener name de url de personajes en listados de capitulos

export interface capitulosDTO{
  id: number;
  name: string,
  air_date: Date,
  episode: string,
  characters: string[],
  url: string,
  created: Date
  personajes: personajesDTO[],
}
export interface personajesDTO{
  url: string,
  name: string
}

// interfaces para obtener name de url de capitulos en listados de personajes

export interface personajes2DTO{
  id:number,
  name: string,
  status: string,
  species: string,
  type: string,
  gender: string,
  origin: string,
  location: {
    name: string,
    url: string
  },
  image: string,
  episode: string[],
  url: string,
  created: Date,
  capitulos: capitulos2DTO[];
}

export interface capitulos2DTO{
  url: string,
  name: string

}

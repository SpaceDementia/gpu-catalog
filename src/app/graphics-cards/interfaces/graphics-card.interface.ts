
export interface GraphicsCard {
  id:                 string,
  name:               string,
  imageURL:           string,
  manufacturer:       string,
  memory:             string,
  coreClock:          string,
  boostClock:         string,
  cudaCores?:         number,
  streamProcessors?:  number,
  price:              string,
}

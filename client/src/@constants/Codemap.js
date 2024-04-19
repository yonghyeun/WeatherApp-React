const weatherKeyMap = Object.freeze({
  POP: 'precipitationProbability',
  PTY: 'precipitationType',
  PCP: 'oneHourPrecipitation',
  REH: 'humidity',
  SKY: 'skyConditions',
  TMP: 'temperature',
  WSD: 'windSpeed',
  SNO: 'snowAmount',
  TMN: 'minTemperature',
  TMX: 'maxTemperature',
});

const weatherValueMap = Object.freeze({
  precipitationType: {
    0: 'sunny',
    1: 'rainy',
    2: 'rainy_snow',
    3: 'snow',
    5: 'rainy',
    6: 'raniy',
    7: 'snow',
  },
  skyConditions: {
    1: 'sunny',
    3: 'sunny_cloudy',
    4: 'cloudy',
  },
});

export { weatherKeyMap, weatherValueMap };

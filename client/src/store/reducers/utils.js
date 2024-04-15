const getWeatherData = (json) => {
  return json.response.body.items.item;
};

const getAirData = (json) => {
  return json.response.body.items[0];
};

const getParsingWeatherText = (json) => {
  const item = json.response.body.items.item[0];
  const weatherText = item.t1;
  const stringParsed = weatherText
    .split('\n\n')[0]
    .split('(현황)')[1]
    .replace('-', '\n')
    .trim();
  return stringParsed;
};

const spliter = (string, baseword) => {
  const [, ...afterword] = string.split(baseword);
  return afterword.join('').trim();
};

const getParsingAirText = (josnObject) => {
  const { PM, O3 } = josnObject;
  const { informCause: pmCasue, informOverall: pmOverall } =
    PM.response.body.items[0];
  const { informCause: O3Casue, informOverall: O3Overall } =
    O3.response.body.items[0];

  return {
    PM: {
      informCause: spliter(pmCasue, '[미세먼지]'),
      informOverall: spliter(pmOverall, '[미세먼지]'),
    },
    O3: {
      informCause: spliter(O3Casue, '[오존]'),
      informOverall: spliter(O3Overall, '[오존]'),
    },
  };
};

export { getWeatherData, getAirData, getParsingWeatherText, getParsingAirText };

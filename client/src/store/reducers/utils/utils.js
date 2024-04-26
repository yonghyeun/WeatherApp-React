import { weatherKeyMap, weatherValueMap } from '../../../@constants/Codemap';

const saveToSessionStorage = ({ addressName, lat, lon }) => {
  sessionStorage.setItem('addressName', addressName);
  sessionStorage.setItem('lat', lat);
  sessionStorage.setItem('lon', lon);
};

const getWeatherData = (json) => {
  const rawData = json.response.body.items.item;
  const result = {};

  rawData.forEach(({ fcstDate, fcstTime, category, fcstValue }) => {
    if (!result[fcstDate]) {
      result[fcstDate] = {};
    }
    if (!result[fcstDate][fcstTime]) {
      result[fcstDate][fcstTime] = {};
    }

    if (!result[fcstDate]['minTemperature']) {
      result[fcstDate]['minTemperature'] = {};
    }

    if (!result[fcstDate]['maxTemperature']) {
      result[fcstDate]['maxTemperature'] = {};
    }

    const newCategory = weatherKeyMap[category];

    if (newCategory) {
      switch (newCategory) {
        case 'precipitationType':
          result[fcstDate][fcstTime][newCategory] =
            weatherValueMap[newCategory][fcstValue];
          break;
        case 'skyConditions':
          result[fcstDate][fcstTime][newCategory] =
            weatherValueMap[newCategory][fcstValue];
          break;
        case 'minTemperature':
          result[fcstDate]['minTemperature'] = Math.floor(fcstValue);
          break;
        case 'maxTemperature':
          result[fcstDate]['maxTemperature'] = Math.floor(fcstValue);
          break;
        default:
          result[fcstDate][fcstTime][newCategory] = fcstValue;
      }
    }
  });
  return result;
};

const getAirData = (json) => {
  return json.response.body.items[0];
};

const getParsingWeatherText = (json) => {
  // 0. make data structure to store weather text
  const newsStore = {};
  if (json.response.body) {
    // 1. get Item array
    const arr = json.response.body.items.item;
    // 2. iterating  through an array ,parasing the text and stroing it
    arr.forEach(({ t1 }) => {
      let [title, content] = t1.split('○');
      // 3. remove the < , >  in the title
      title = title.replace('<', '').replace('>', '').trim();

      // 3. store only the most recent news
      if (!newsStore[title]) {
        newsStore[title] = content;
      }
    });
  }
  return newsStore;
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

const getTime = (timeString) => {
  return `${timeString.padStart(2, 0)}00`;
};

export {
  saveToSessionStorage,
  getWeatherData,
  getAirData,
  getParsingWeatherText,
  getParsingAirText,
  getTime,
};

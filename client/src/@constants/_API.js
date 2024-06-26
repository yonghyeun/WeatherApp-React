const initalKaKaoAPI = {
  APIKEY: 'KakaoAK b89de562613b2476f8c5d7ee7742d257',
  URI: 'https://dapi.kakao.com/v2/local/geo/coord2regioncode.JSON',
};

const KaKaoAPI = {
  APIKEY: 'KakaoAK b89de562613b2476f8c5d7ee7742d257',
  URI: 'https://dapi.kakao.com/v2/local/search/address.JSON',
};

const weatherForecastAPI = {
  // 디코딩 된 값 사용
  APIKEY:
    'Jwxgv8BQexpONepfrXnbs1PdxJ35yKLwEEW0bTK4QpCwdpecz/5tqkdCYp5rjomx8BzXWmSJLwvpuYYk1msbmw==',
  URI: 'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst',
};

const weatherTextAPI = {
  APIKEY:
    'Jwxgv8BQexpONepfrXnbs1PdxJ35yKLwEEW0bTK4QpCwdpecz/5tqkdCYp5rjomx8BzXWmSJLwvpuYYk1msbmw==',
  URI: 'http://apis.data.go.kr/1360000/WthrWrnInfoService/getWthrInfo',
};

const tmCoordAPI = {
  APIKEY:
    'Jwxgv8BQexpONepfrXnbs1PdxJ35yKLwEEW0bTK4QpCwdpecz/5tqkdCYp5rjomx8BzXWmSJLwvpuYYk1msbmw==',
  URI: 'http://apis.data.go.kr/B552584/MsrstnInfoInqireSvc/getNearbyMsrstnList',
};

const airAPI = {
  APIKEY:
    'Jwxgv8BQexpONepfrXnbs1PdxJ35yKLwEEW0bTK4QpCwdpecz/5tqkdCYp5rjomx8BzXWmSJLwvpuYYk1msbmw==',
  URI: 'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty',
};

const airTextAPI = {
  APIKEY:
    'Jwxgv8BQexpONepfrXnbs1PdxJ35yKLwEEW0bTK4QpCwdpecz/5tqkdCYp5rjomx8BzXWmSJLwvpuYYk1msbmw==',
  URI: 'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMinuDustFrcstDspth',
};

export {
  initalKaKaoAPI,
  KaKaoAPI,
  weatherForecastAPI,
  weatherTextAPI,
  tmCoordAPI,
  airAPI,
  airTextAPI,
};

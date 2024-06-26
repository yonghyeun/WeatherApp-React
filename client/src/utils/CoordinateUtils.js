import proj4 from 'proj4';

// 출처 : https://gist.github.com/fronteer-kr/14d7f779d52a21ac2f16
var RE = 6371.00877; // 지구 반경(km)
var GRID = 5.0; // 격자 간격(km)
var SLAT1 = 30.0; // 투영 위도1(degree)
var SLAT2 = 60.0; // 투영 위도2(degree)
var OLON = 126.0; // 기준점 경도(degree)
var OLAT = 38.0; // 기준점 위도(degree)
var XO = 43; // 기준점 X좌표(GRID)
var YO = 136; // 기1준점 Y좌표(GRID)
//
// LCC DFS 좌표변환 ( code : "toXY"(위경도->좌표, v1:위도, v2:경도), "toLL"(좌표->위경도,v1:x, v2:y) )
//

const translateCoord = (v1, v2, code = 'toXY') => {
  var DEGRAD = Math.PI / 180.0;
  var RADDEG = 180.0 / Math.PI;

  var re = RE / GRID;
  var slat1 = SLAT1 * DEGRAD;
  var slat2 = SLAT2 * DEGRAD;
  var olon = OLON * DEGRAD;
  var olat = OLAT * DEGRAD;

  var sn =
    Math.tan(Math.PI * 0.25 + slat2 * 0.5) /
    Math.tan(Math.PI * 0.25 + slat1 * 0.5);
  sn = Math.log(Math.cos(slat1) / Math.cos(slat2)) / Math.log(sn);
  var sf = Math.tan(Math.PI * 0.25 + slat1 * 0.5);
  sf = (Math.pow(sf, sn) * Math.cos(slat1)) / sn;
  var ro = Math.tan(Math.PI * 0.25 + olat * 0.5);
  ro = (re * sf) / Math.pow(ro, sn);
  var rs = {};
  if (code === 'toXY') {
    rs['lat'] = v1;
    rs['lng'] = v2;
    var ra = Math.tan(Math.PI * 0.25 + v1 * DEGRAD * 0.5);
    ra = (re * sf) / Math.pow(ra, sn);
    var theta = v2 * DEGRAD - olon;
    if (theta > Math.PI) theta -= 2.0 * Math.PI;
    if (theta < -Math.PI) theta += 2.0 * Math.PI;
    theta *= sn;
    rs['x'] = Math.floor(ra * Math.sin(theta) + XO + 0.5);
    rs['y'] = Math.floor(ro - ra * Math.cos(theta) + YO + 0.5);
  } else {
    rs['x'] = v1;
    rs['y'] = v2;
    var xn = v1 - XO;
    var yn = ro - v2 + YO;
    ra = Math.sqrt(xn * xn + yn * yn);
    if (sn < 0.0) ra *= -1;
    var alat = Math.pow((re * sf) / ra, 1.0 / sn);
    alat = 2.0 * Math.atan(alat) - Math.PI * 0.5;

    if (Math.abs(xn) <= 0.0) {
      theta = 0.0;
    } else {
      if (Math.abs(yn) <= 0.0) {
        theta = Math.PI * 0.5;
        if (xn < 0.0) theta *= -1;
      } else theta = Math.atan2(xn, yn);
    }
    var alon = theta / sn + olon;
    rs['lat'] = alat * RADDEG;
    rs['lng'] = alon * RADDEG;
  }
  return rs;
};

const getNxNyFromLatLong = (lat, lon) => {
  // 검색어가 모호하여 결과값이 많을 땐 가장 첫 데이터가 포괄적인 정보를 담고 있음
  const { x: nx, y: ny } = translateCoord(lat, lon);
  return { nx, ny };
};

const getAddressName = ({ documents }) => {
  const address = documents[0];
  return address.address_name;
};

const getTMCoord = (lat, lon) => {
  // 변수 명칭을 적절하게 변경하고, 숫자로 변환
  // lat = 37.588 lon = 127.006
  const wgs84 = 'EPSG:4326'; // WGS 84
  // 중부원점 설정을 한국 중부로 가정했을 경우 (경도 127도, 위도 38도를 사용)
  const tmProj =
    '+proj=tmerc +lat_0=38 +lon_0=127 +k=0.9996 +x_0=200000 +y_0=500000 +datum=WGS84 +units=m +no_defs';
  // 순서를 [경도, 위도]로 수정

  const [tmX, tmY] = proj4(wgs84, tmProj, [parseFloat(lon), parseFloat(lat)]);
  return [tmX, tmY];
};

const getLatLon = ({ documents }) => {
  const { x: lon, y: lat } = documents[0].address ?? documents[0].road_address;
  return { lon, lat };
};

export {
  translateCoord,
  getNxNyFromLatLong,
  getAddressName,
  getTMCoord,
  getLatLon,
};

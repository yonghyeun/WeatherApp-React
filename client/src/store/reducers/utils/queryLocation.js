import { initalKaKaoAPI } from '../../../@constants/_API';
let queryLocation = { lat: null, lon: null, addressName: null, status: false };

/**
 * URLSearchParams 를 이용해 접속한 클라이언트의 파라미터인 lat , lon , addreeName 을 담은
 * locationObject 를 반환하는 함수
 */
const queryToLocation = async () => {
  const searchParams = new URLSearchParams(window.location.search);
  const p_lat = searchParams.get('lat');
  const p_lon = searchParams.get('lon');

  if (!p_lat || !p_lon) return;

  try {
    const { APIKEY, URI } = initalKaKaoAPI;
    const ENDPOINT = `${URI}?x=${p_lon}&y=${p_lat}`;
    const response = await fetch(ENDPOINT, {
      headers: { Authorization: APIKEY },
    });

    if (!response.ok) {
      throw new Error('카카오 API 네트워크가 불안정합니다. 다시 시도해주세요');
    }

    const json = await response.json();
    const addressObject = json.documents[0];
    const addressName = addressObject['address_name'];
    const { x, y } = addressObject;
    queryLocation = { addressName, lon: x, lat: y, status: true };
  } catch (e) {
    console.error(e);
  }
};

queryToLocation();

export default queryLocation;

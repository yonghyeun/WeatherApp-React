import { useEffect } from 'react';
import useFetching from './hooks/useFetching';

export default function App() {
  useEffect(() => {
    const fetching = async () => {
      const res = await fetch(
        'https://apis.data.go.kr/1360000/AsosDalyInfoService/getWthrDataList?serviceKey=Jwxgv8BQexpONepfrXnbs1PdxJ35yKLwEEW0bTK4QpCwdpecz%2F5tqkdCYp5rjomx8BzXWmSJLwvpuYYk1msbmw%3D%3D&pageNo=1&numOfRows=10&dataType=JSON&dataCd=ASOS&dateCd=DAY&startDt=20100101&endDt=20100601&stnIds=108',
      );
      const json = await res.json();

      console.log(json);
    };

    fetching();
  }, []);

  return <h1> 하위 ~ ^^ </h1>;
}

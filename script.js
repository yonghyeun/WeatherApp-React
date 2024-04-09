const s =
  'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?serviceKey=Jwxgv8BQexpONepfrXnbs1PdxJ35yKLwEEW0bTK4QpCwdpecz%2F5tqkdCYp5rjomx8BzXWmSJLwvpuYYk1msbmw%3D%3D&pageNo=1&numOfRows=1000&dataType=JSON&base_date=20240408&base_time=0500&nx=55&ny=127';
const f =
  'https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?searviceKey=Jwxgv8BQexpONepfrXnbs1PdxJ35yKLwEEW0bTK4QpCwdpecz%2F5tqkdCYp5rjomx8BzXWmSJLwvpuYYk1msbmw%3D%3D&dataType=JSON&base_date=20240409&base_time=1800&nx=55&ny=127';

console.log(s === f);

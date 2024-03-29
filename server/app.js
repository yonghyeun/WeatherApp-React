const path = require('path'); // 상대 경로 설정
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 8888;

// domain 주소들

app.use(express.json()); // application/json parsing
app.use(express.urlencoded({ extended: true })); // parsing
app.use(cors()); // CORS middle ware

app.listen(PORT, (req, res) => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/ASOS', async (req, res) => {
  const DOMAIN = 'https://apihub.kma.go.kr/api/typ01/url/kma_sfctm2.php';
  const PARAMS = new URLSearchParams(req.query).toString();

  try {
    const response = await fetch(`${DOMAIN}?${PARAMS}`);
    if (!response.ok) throw new Error('Network response was not ok');
    const json = await response.json();

    res.send(json);
  } catch (e) {
    console.error(e);
    res.status(500).send(e.message);
  }
});

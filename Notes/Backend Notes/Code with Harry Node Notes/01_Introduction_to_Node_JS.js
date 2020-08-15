const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(
    `
    <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>CSS Transform</title>
  <style>
    * {
      margin: 0px;
      padding: 0px;
    }
    .container {
      height: 80vh;
      background-color: burlywood;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .box {
      display: flex;
      align-items: center;
      justify-content: center;
      background: brown;
      border: 2px solid black;
      border-radius: 8px;
      height: 400px;
      width: 400px;
      transition: all 0.5s ease-in-out;
    }
    .box:hover {
      transform: scale(1.1);
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="box">This is a box</div>
  </div>
</body>
</html>
    `
  );
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
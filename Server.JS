const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8"
  });

  res.end(`
    <!DOCTYPE html>
    <html lang="id">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Project Pertama</title>
      </head>
      <body style="font-family: Arial; text-align: center; padding: 50px;">
        <h1>Halo Dunia! 🚀</h1>
        <p>Website pertama saya berhasil berjalan.</p>
        <p>Dibuat dengan GitHub dan Railway.</p>
      </body>
    </html>
  `);
});

const port = process.env.PORT || 3000;

server.listen(port, "0.0.0.0", () => {
  console.log(`Server berjalan pada port ${port}`);
});

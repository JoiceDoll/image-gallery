const router = (req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Teste de rota");
  }
  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("404 Página não encontrada.");
};

module.exports = router;


const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Bot MinNix Aktif 24 Jam ✅'));

// Port Prioritas: 443 > 8080 > 5000 > 3000
const PORT = process.env.PORT || 443 || 8080 || 5000 || 3000;
app.listen(PORT, () => {
  console.log(`Server uptime listening on port ${PORT}`);
});

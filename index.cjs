// index.cjs
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/kraken/balance', async (req, res) => {
  try {
    const balance = {
      BTC: '0.0034',
      ETH: '0.52',
      USD: '120.45',
    };
    res.json({ success: true, data: balance });
  } catch (err) {
    console.error('Balance error:', err);
    res.status(500).json({ success: false, error: 'Unable to fetch balance' });
  }
});

// Optional: log active routes to debug
app._router.stack.forEach((r) => {
  if (r.route && r.route.path) {
    console.log('Active route:', r.route.path);
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
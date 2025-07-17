// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Connect to local MongoDB (Compass connects too)
mongoose.connect('mongodb://localhost:27017/waitlistDB')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// ✅ Define schema + model
const WaitlistSchema = new mongoose.Schema({
  name: String,
  email: String,
  company: String,
  joinedAt: { type: Date, default: Date.now },
});

const WaitlistUser = mongoose.model('WaitlistUser', WaitlistSchema);

// ✅ POST route: join waitlist
app.post('/api/waitlist/join', async (req, res) => {
  console.log('✅ POST /api/waitlist/join CALLED');
  console.log('Body:', req.body);

  try {
    const { name, email, company } = req.body;

    let user = await WaitlistUser.findOne({ email });

    if (user) {
      const position = await WaitlistUser.countDocuments({
        joinedAt: { $lte: user.joinedAt },
      });
      const total = await WaitlistUser.countDocuments();
      return res.json({ position, total });
    }

    user = new WaitlistUser({ name, email, company });
    await user.save();

    const position = await WaitlistUser.countDocuments({
      joinedAt: { $lte: user.joinedAt },
    });
    const total = await WaitlistUser.countDocuments();

    res.json({ position, total });
  } catch (err) {
    console.error('❌ Server error:', err);
    res.status(500).send('Server error');
  }
});

// ✅ Optional GET: check position by email
app.get('/api/waitlist/position/:email', async (req, res) => {
  console.log(`✅ GET /api/waitlist/position/${req.params.email}`);

  try {
    const { email } = req.params;
    const user = await WaitlistUser.findOne({ email });

    if (!user) {
      return res.status(404).send('User not found');
    }

    const position = await WaitlistUser.countDocuments({
      joinedAt: { $lte: user.joinedAt },
    });
    const total = await WaitlistUser.countDocuments();

    res.json({ position, total });
  } catch (err) {
    console.error('❌ Server error:', err);
    res.status(500).send('Server error');
  }
});

// ✅ Root route
app.get('/', (req, res) => {
  res.send('✅ Waitlist API is running!');
});

// ✅ Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

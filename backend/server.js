const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/waitlistDB')
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Schema
const WaitlistSchema = new mongoose.Schema({
  name: String,
  email: String,
  company: String,
  joinedAt: { type: Date, default: Date.now },
  lastActiveAt: { type: Date, default: Date.now },
});

const WaitlistUser = mongoose.model('WaitlistUser', WaitlistSchema);

// Helper: Define "currently active" as last 5 minutes
const getActiveTime = () => {
  const fiveMinutesAgo = new Date(Date.now() - 5 * 60 * 1000);
  return fiveMinutesAgo;
};

// POST /api/waitlist/join
app.post('/api/waitlist/join', async (req, res) => {
  try {
    const { name, email, company } = req.body;
    const now = new Date();

    let user = await WaitlistUser.findOne({ email });

    if (user) {
      user.lastActiveAt = now;
      await user.save();
    } else {
      user = new WaitlistUser({ name, email, company, joinedAt: now, lastActiveAt: now });
      await user.save();
    }

    const activeTime = getActiveTime();

    const position = await WaitlistUser.countDocuments({
      lastActiveAt: { $lte: now, $gte: activeTime },
      joinedAt: { $lte: user.joinedAt },
    });

    const total = await WaitlistUser.countDocuments({
      lastActiveAt: { $gte: activeTime },
    });

    res.json({ position, total });
  } catch (err) {
    console.error('❌ Server error:', err);
    res.status(500).send('Server error');
  }
});

// GET /api/waitlist/position/:email
app.get('/api/waitlist/position/:email', async (req, res) => {
  try {
    const { email } = req.params;
    const now = new Date();
    const activeTime = getActiveTime();

    const user = await WaitlistUser.findOne({ email });

    if (!user) return res.status(404).send('User not found');

    // Update user's activity timestamp
    user.lastActiveAt = now;
    await user.save();

    const position = await WaitlistUser.countDocuments({
      lastActiveAt: { $lte: now, $gte: activeTime },
      joinedAt: { $lte: user.joinedAt },
    });

    const total = await WaitlistUser.countDocuments({
      lastActiveAt: { $gte: activeTime },
    });

    res.json({ position, total });
  } catch (err) {
    console.error('❌ Server error:', err);
    res.status(500).send('Server error');
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});

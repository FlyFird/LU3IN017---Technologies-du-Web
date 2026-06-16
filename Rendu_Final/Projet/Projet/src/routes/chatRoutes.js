import express from 'express';
import Message from '../models/Message.js';

const router = express.Router();

router.get('/:conversationId', async (req, res) => {
  try {
    const messages = await Message.find({ conversationId: req.params.conversationId });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Post a new message
router.post('/', async (req, res) => {
  try {
    const { conversationId, sender, text } = req.body;
    const msg = new Message({ conversationId, sender, text });
    await msg.save();
    res.status(201).json(msg);
  } catch (err) {
    res.status(400).json({ error: 'Bad request' });
  }
});

export default router;

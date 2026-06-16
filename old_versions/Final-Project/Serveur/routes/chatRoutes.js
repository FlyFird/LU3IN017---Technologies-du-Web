// backend/routes/chatRoutes.js
import express from 'express';
import Message from '../models/Message.js';

const router = express.Router();


router.get('/:conversationId', async (req, res) => {
  try {
    const messages = await Message.find({ conversationId: req.params.conversationId });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Erreur serveur (GET messages)' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { conversationId, sender, text } = req.body;
    const message = new Message({ conversationId, sender, text });
    await message.save();
    res.status(201).json(message);
  } catch (err) {
    res.status(400).json({ error: 'Erreur serveur (POST message)' });
  }
});

export default router;

import express from 'express';
import messagesController from './messageController.js';

const router = express.Router();

router.get("/v1/messages", messagesController.getAllMessages);

router.post('/v1/messages', messagesController.addMessage);

export default router; 
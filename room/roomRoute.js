import express from 'express';
import roomController from './roomController.js';

const router = express.Router();

router.get("/v1/rooms", roomController.getAllRooms);

router.post('/v1/rooms', roomController.addRoom);

export default router; 
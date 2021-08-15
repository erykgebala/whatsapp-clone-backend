//const express = require('express');
import express from 'express';
import db from './mongoConfig.js'
import cors from 'cors';

import routerMessage from './message/messagesRoute.js';
import routerRoom from './room/roomRoute.js';

const app = express();
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 9000;

app.use(routerMessage);
app.use(routerRoom);

app.listen(port, () => {
    console.log("server is running on " + port)
}) 
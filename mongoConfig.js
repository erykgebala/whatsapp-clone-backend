import mongoose from 'mongoose';
import pusher from './pusherConfig.js'

const url = "mongodb+srv://admin:obZDC8QOjDxNLdKX@cluster0.y4tf3.gcp.mongodb.net/whatsappclone?retryWrites=true&w=majority";

mongoose.connect(url,  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db  = mongoose.connection;

db.once("open", () => {
    const messagesWatcher = db.collection("messages").watch();
    messagesWatcher.on("change", (change) => {
        if (change.operationType ==='insert'){
            pusher.trigger('messages', 'insert', change.fullDocument);
        }
    });

    const roomsWatcher = db.collection("rooms").watch();
    roomsWatcher.on("change", (change) => {
        if (change.operationType ==='insert'){
            pusher.trigger('rooms', 'insert', change.fullDocument);
        }
    });
})

export default db;
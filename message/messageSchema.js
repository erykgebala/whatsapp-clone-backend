import mongoose from 'mongoose';

const messageSchema = mongoose.Schema({
    owner: String,
    content: String,
    timestamp: String
});
export default mongoose.model('messages', messageSchema);
import mongoose from 'mongoose';

const roomSchema = mongoose.Schema({
    name: String,
    desc: String
});
export default mongoose.model('rooms', roomSchema);
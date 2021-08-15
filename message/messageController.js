import MessageSchema from './messageSchema.js';

const getAllMessages = (req, res) => {
    MessageSchema.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    });
}

const addMessage = (req, res) => {
    MessageSchema.create(req.body, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
}

export default {getAllMessages, addMessage};
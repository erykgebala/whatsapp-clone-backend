import roomSchema from './roomSchema.js';

const getAllRooms = (req, res) => {
    roomSchema.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    });
}

const addRoom = (req, res) => {
    roomSchema.create(req.body, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
}

export default {getAllRooms, addRoom};
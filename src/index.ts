import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

const users = [
    {
        id: 1,
        name: 'name1',
        lastname: 'lastname1'
    },
    {
        id: 2,
        name: 'name2',
        lastname: 'lastname2'
    },
    {
        id: 3,
        name: 'name3',
        lastname: 'lastname3'
    },
    {
        id: 4,
        name: 'name4',
        lastname: 'lastname4'
    }
]

app.get('/getUsers', (req, res) => {
    res.send({
        status: 200,
        response: users
    });
});

app.get('/getUser', (req, res) => {
    const { id } = req.query;
    res.send({
        status: 200,
        response: users.find(value => value.id === Number(id))
    });
});

app.listen(3000, () => {
    console.log('Server listening on port 3000');
});
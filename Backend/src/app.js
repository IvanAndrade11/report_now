import express from 'express';
import { connection } from './bd.js';
import { PORT } from './config.js';

const app = express();

app.get('/', (req, res) => {
    res.send("WELCOME MASTER");
});

app.get('/ping', async (req, res) => {
    const [ consulta ] = await connection.query('SELECT "La BD funciona correctamente crack." AS consulta');
    console.log(consulta);
    res.send(consulta[0]['consulta']);
})

app.get('/createUser', async (req, res) => {
    const insert = await connection.query('INSERT INTO users (name) VALUES ("Ivan")');
    console.log(insert);
    res.send(insert);
})

app.get('/listUsers', async (req, res) => {
    const [ rows ] = await connection.query('SELECT * from users');
    console.log(rows);
    res.json(rows);
})


app.listen(PORT);
console.log(`RUN SERVER IN PORT ${PORT}`);
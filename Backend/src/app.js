import express from 'express';
import { PORT } from './config.js';
import cors from 'cors';
import routerUsers from './routes/users.js'

const app = express();

app.use(cors())
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use("/api/users", routerUsers);

// app.get('/listUsers', async (req, res) => {
//     const [ rows ] = await sql.query('SELECT * from users');
//     console.log(rows);
//     res.json(rows);
// })

app.listen(PORT);
console.log(`RUN SERVER IN PORT ${PORT}`);
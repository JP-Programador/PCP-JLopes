import db from './db';
import express from 'express';
import cors from 'cors';

const app = new express()
app.use(cors())
app.use(express.json())





app.listen(process.env.PORT,
                x => console.log('Server up at port ' + process.env.PORT))
import express from 'express';
import cors from 'cors';

import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

const PORT = 3333;
app.listen(PORT, () => console.log('Listening on http://127.0.0.1:3333 ...'));

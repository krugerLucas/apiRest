import express from 'express';
import bodyParser from 'body-parser';
import { categoriesRoutes } from './routes/categories.routes';
import { specificationRoutes } from './routes/specification.routes';

const app = express();

const jsonParser = bodyParser.json();

app.use(express.json());
// possibilita a rota de ser usada
app.use("/categories", categoriesRoutes);
app.use("/specification", specificationRoutes);

app.listen(3000);
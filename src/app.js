import express from 'express';
import { PORT } from './config.js';
import routes from './routes/index.routes.js';

const app = express();

/**
 * process.env.PORT
 * condicion que buscara la variable y esta esta especificando en un archivo de variables de entorno, un puerto 
 */
app.set('port',PORT);

app.use(express.json());
app.use('/api/haruka',routes);

app.use((req,res) =>{
    res.status(404).send({
        "mensaje_error" : "La pagina no se encuentra"
    })
})

export default app;
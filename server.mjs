import express from "express";
import dpiRoutes from './routes/dpi.routes.js'
import lineFinder from './routes/lineFinder.routes.js'
import osaReporter from './routes/osaReporter.routes.js'
import cors from 'cors'

const app = express();
const port = 4000;

app.use(cors())
app.get('/', (req, res) => {
    res.send('Welcome to my server!');
});

app.use('/dpi', dpiRoutes);
app.use('/lineFinder', lineFinder);
app.use('/osaReporter', osaReporter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
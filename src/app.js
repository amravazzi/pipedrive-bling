import express from 'express';
import cors from 'cors';
import routes from './routes/router';

const app = express();

app.disable('x-powered-by');

// Middlewares
app.use(cors())
app.use(express.json());
app.use(express.urlencoded());
app.use('/v1', routes);

//Catch 404 Erros
app.use((req, res, next) => {
  res
  .status(404)
  .send({
    success: false,
    message: 'Resource not found.'
  });
});

//Error handle
app.use((err, req, res, next) => {
  const error = app.get('env') === 'development' ? err : {};
  const status = err.statusCode || 500;

  res
  .status(status)
  .send({
    success: false,
    message: 'Resource not found.',
    data: err
  });

  console.error(err);
});


//Start server
const port = app.get('port') || 8080;
app.listen(port, () => {console.log(`Server is running on port: ${port}`)});

export default app;

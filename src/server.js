import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

import Schema from './data/schema';
import Mocks from './data/mock';
import Resolvers from './data/resolvers';

import db from './db';

var app = express();

const PORT = process.env.PORT || 5000;
app.set('port', PORT);

if (process.env.ENV === 'development') {
  app.use(logger('dev'));
}

// parse body params and attache them to req.body
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: true }));

const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers,
});

// addMockFunctionsToSchema({
//   schema: executableSchema,
//   mocks: Mocks,
//   preserveResolvers: true,
// });

app.use('/graphql', graphqlExpress({ schema: executableSchema }));

app.use('/graphiql', graphiqlExpress({
  endpointURL: '/graphql',
}));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (process.env.ENV === 'development') {
  app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message
  });
});

export default app;

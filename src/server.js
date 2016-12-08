import express from 'express';
import path from 'path';
import morgan from 'morgan';
import cors from 'cors';
import bodyParser from 'body-parser';
import passport from 'passport';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

import Schema from './data/schema';
import Mocks from './data/mock';
import Resolvers from './data/resolvers';
/*
 Connection to Mongo DB
 */
import db from './db';

var app = express();

const PORT = process.env.PORT || 5000;
app.set('port', PORT);

if (process.env.ENV === 'development') {
  app.use(morgan(':id :method :url :response-time'));
}
/*
 view engine setup
  */
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// parse body params and attache them to req.body
app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use(session({ secret: 'secret' }));
app.use(passport.initialize());
app.use(passport.session());

// PassportJS auth information to be serialized into a session
passport.serializeUser(function(user, done) {
    done(null, user.uid);
});

// PassportJS auth information to be deserialized from the session
passport.deserializeUser(function(userId, done) {
    done(null, userId);
});

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

import routes from './routes';
app.use('/', routes);

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

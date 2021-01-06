
const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;

const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 8888;

const cors = require('cors');
const passport = require('passport');
const cookieSession = require('cookie-session');
// const mongoose = require('mongoose');
const authRoutes = require('./routes/auth-routes');

const port = process.env.PORT || 8888;
const passportSetup = require('./passport-setup');

// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
  const app = express();

  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

  // Answer API requests.
  // app.get('/api', function (req, res) {
  //   res.set('Content-Type', 'application/json');
  //   res.send('{"message":"Hello from the custom server!"}');
  // });

  // All remaining requests return the React app, so it can handle routing.
  


// mongoose.connect(
//   process.env.MONGODB_URI,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   () => {
//     console.log('connected to mongo db');
//   },
// );

// set up cors to allow us to accept requests from our client
// const whitelist = [process.env.CLIENT_HOME_URL, `${process.env.CLIENT_HOME_URL}/home`];
// var corsOptions = {
//   credentials: true,
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   origin: function(origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
app.use(
  cors({
    credentials: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    origin: process.env.ORIGIN,
  }),
);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', process.env.ORIGIN); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Credentials', true);
  next();
});

app.use(
  cookieSession({
    name: 'session',
    keys: [process.env.COOKIE_KEY],
    maxAge: 24 * 60 * 60 * 100,
  }),
);

app.use(passport.initialize());
// deserialize cookie from the browser
app.use(passport.session());

app.use('/auth', authRoutes);
// app.get('/', async (req, res) => {
//   // const { user } = req;
//   // spotifyApi.setAccessToken(user.accessToken);
//   // spotifyApi.setRefreshToken(user.refreshToken);
//   // var userData;
//   // await spotifyApi.getMe().then(result => {
//   //   userData = result.body;
//   //   console.log(result.body);
//   // }).catch(e => {
//   //   console.log("error get user");
//   // })
//   // console.log("APP ROUTE");
//   res.status(200).json({
//     authenticated: true,
//     message: 'user successfully authenticated',
//     user: req.user,
//     cookies: req.cookies,
//     // name: userData.display_name
//   });
// });
// connect react to nodejs express server
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.error(`Node ${isDev ? 'dev server' : 'cluster worker '+process.pid}: listening on port ${PORT}`);
});
}
const express = require('express');
const config = require('./config.json');
const userRoutes = require('./routes/user.route');
const { HttpStatusTexts, HttpStatusCodes } = require('./constants');
const ResponseMiddleware = require('./middlewares/response.middleware');

const app = express();

app.use(express.json());
app.use(ResponseMiddleware.render);

const apiPrefix = '/api/' + config.apiVersion;

app.use(apiPrefix + '/users', userRoutes);
app.use((req, res) => {
    res.jsonError(null, HttpStatusTexts[HttpStatusCodes.HTTP_NOT_FOUND], HttpStatusCodes.HTTP_NOT_FOUND);
})

app.listen(config.port, config.hostName, (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("server is running");
    }
});
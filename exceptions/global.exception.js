const { HttpStatusCodes } = require("../constants")

process.on('uncaughtException', (error) => {
    console.log(error);
    res.status(HttpStatusCodes)
})
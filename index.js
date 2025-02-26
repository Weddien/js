const express = require('express')
const v1GroupsRouter = require('./v1/routes/GetGroups');
const v1StudentRouter = require('./v1/routes/GetStudent');
const app = express()
const port = 3000

app.use('/api/v1',  v1GroupsRouter);
app.use('/api/v1',  v1StudentRouter);

app.listen(port,() =>{
    console.log("Сервер запущен")
})




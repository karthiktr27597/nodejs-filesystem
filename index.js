const express = require("express")
const fs = require("fs")
const path = require("path");
const dirPath = path.join(__dirname, "timestamp")
const app = express();


// const date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

// timestamp api end point

app.get("/timestamp", (req, res) => {

    var today = new Date();

    var date = today.toUTCString().slice(0, 16)
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var timestamp = `timestamp:${Date.now()}\ndate-time:${date} ${time}`

    fs.writeFileSync(`${path.join(dirPath, "current date-time.txt")}`, timestamp, (err) => {

        if (err) {
            console.log(err)
        } else {
            console.log('file updated successfully')
        }
    })

    res.sendFile(path.join(dirPath, "current date-time.txt"))
})



// listen and start http server in specific port
app.listen(9000, () => console.log('Server stated in localhost:9000'));
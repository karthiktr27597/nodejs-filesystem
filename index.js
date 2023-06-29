const express = require("express")
const fs = require("fs")
const path = require("path");
const dirPath = path.join(__dirname, "timestamp")
console.log(dirPath);
const app = express();

// Task 1 : API endpoint to create a textfile in perticular folder

app.get("/timestamp", (req, res) => {

    var today = new Date();

    var date = today.toUTCString().slice(0, 16)
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var timestamp = `timestamp:${Date.now()}\ndate-time:${date} ${time}`

    let [day, d] = date.split(",");
    d = d.trim().split(" ").join("")
    let t = time.split(":").join("")

    let filename = d + "-" + t;

    fs.writeFileSync(`${dirPath}/${filename}.txt`, timestamp, (err) => {

        if (err) {
            console.log(err);
        }
    })

    res.send(timestamp)
})

// Task 2: API endpoint to retrieve created file with use of foldername

app.get("/timestamp/:textFileName", (req, res) => {

    try {
        let { textFileName } = req.params;
        textFileName = textFileName + ".txt";

        return res.status(200).sendFile(path.join(dirPath, textFileName));
    }
    catch (err) {
        res.status(500).send({ Message: "textFileName Error or incorrect input" })
    }
})


// listen and start http server in specific port
app.listen(9000, () => console.log('Server stated in localhost:9000'));
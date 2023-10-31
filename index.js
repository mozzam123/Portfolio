const express = require("express")
const app = express()


// Serve static files from public directory
app.use(express.static("public"))



app.get('/', (req, res) => {
    res.send("mozzam Inamdar")
})


app.listen(7900, () => {
    console.log('Server running on 7900');
})
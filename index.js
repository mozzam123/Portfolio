const express = require("express")
const app = express()
const path = require("path")



// Serve static files from public directory
app.use(express.static("public"))

// Set view engine and template path
app.set("view engine", "hbs");
app.set("views", template_path);
app.set("views", path.join(__dirname, "views"));

app.get('/', (req, res) => {
    res.send("mozzam Inamdar")
})


app.listen(7900, () => {
    console.log('Server running on 7900');
})
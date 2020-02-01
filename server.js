


let express = require("express");

let app = express();

const path = require("path");






app.use("/", express.static(path.join(__dirname, "build")));










let listener = app.listen(3000, function () {

	console.log(`listening on ${listener.address().port}`);

})
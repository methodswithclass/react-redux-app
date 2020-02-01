


let express = require("express");

let app = express();








app.use("/", express.static("build"));










let listener = app.listen(80, function () {

	console.log(`listening on ${listener.address().port}`);

})
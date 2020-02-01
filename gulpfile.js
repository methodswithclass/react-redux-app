
let gulp = require("gulp");
let exec = require("child_process").exec;
let nodemon = require("nodemon");

let path = require("path");

let buildFunc = (done) => {

	exec("npm run build", function (err, stdout, stderr) {
	    console.log(stdout);
	    console.log(stderr);
	    done(err);
	  });
}

let serveFunc = (done) => {

	var stream = nodemon({ 
		script: path.join(__dirname, "server.js"),
		ext:"js html css scss json",
		watch:["./src"],
		tasks:["serve"]
	});


	stream.on("start", function () {

		done();
	})
}


gulp.task("serve", gulp.series(buildFunc, serveFunc));
var express = require("express");
var router = express.Router();
const publicIp = require('publicip');
var platform = require('platform');

/* GET home page. */
router.get("/", function(req, res, next) {
	
	var final = {
	};

	publicIp.v4().then(ip => {
    	final.ip = ip;
   	    res.send(final);
	});

	var lang = req.headers["accept-language"];
	lang = lang.split(",");
	lang = lang[0];
	final.language = lang;

	var os = platform.description;	
	final.os = os;

});

module.exports = router;

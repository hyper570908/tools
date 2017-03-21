var express = require('express');
var router = express.Router();
//var UnitDbTools = require('../models/unitDbTools.js');
var DeviceDbTools = require('../models/deviceDbTools.js');
var moment = require('moment');

router.route('/devices')

   .get(function(req, res) {
		var mac    = req.query.mac;
		var option = req.query.option;
		var mdate  = req.query.mdate;
		DeviceDbTools.findDevicesByDate(mdate,mac,Number(option),'asc',function(err,devices){
		    if (err)
				return res.send(err);
			return res.json(devices);
		});
	});

router.route('/devices/:mac')

	// get the bear with that id
	.get(function(req, res) {
		DeviceDbTools.findByMac(req.params.mac, function(err, devices) {
			if (err)
				return res.send(err);
			return res.json(devices);
		});
	})

	// update the data with this id
	.put(function(req, res) {
		 var mac = req.params.mac;
		//To update devices by mac
	})

	// delete the bear with this id
	.delete(function(req, res) {
        var mac = req.params.mac;
		//To delete devices by mac
	});

module.exports = router;
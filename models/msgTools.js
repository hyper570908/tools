var moment = require('moment');
var JsonFileTools =  require('./jsonFileTools.js');
//var ParseDefine =  require('./parseDefine.js');
var mData,mMac,mRecv,mDate,mTimestamp,mType,mExtra ;
var obj;
var path = './public/data/finalList.json';
var finalList = {};

function init(){
    finalList = JsonFileTools.getJsonFromFile(path);
}

init();

exports.parseMsg = function (obj) {
    //Get data attributes
    mData = obj.data;
    mMac  = obj.macAddr;
    mRecv = obj.recv;
    mDate = moment(mRecv).format('YYYY/MM/DD HH:mm:ss');
    mTimestamp = new Date(mRecv).getTime();
    mInfo = parseData(obj.data);
    var msg = {macAddr: mMac, data: mData, recv: mRecv, date: mDate,
                information: mInfo, timestamp: mTimestamp};
    finalList[mMac]=msg;
    return msg;
}

exports.setFinalList = function (list) {
    finalList = list;
}

exports.getFinalList = function () {
    return finalList;
}

exports.saveFinalListToFile = function () {
    JsonFileTools.saveJsonToFile(path,finalList);
}

function getType(p) {
    if (Array.isArray(p)) return 'array';
    else if (typeof p == 'string') return 'string';
    else if (p != null && typeof p == 'object') return 'object';
    else return 'other';
}

function parseData(data) {
    var info = {};
    var obj = { 'temperature':[0,4,100], 'humidity':[4,8,100]};
    var keys = Object.keys(obj);
    var count = keys.length;

    for(var i =0;i<count;i++){
        console.log( keys[i]+' : '+ obj[keys[i]]);
        info[ keys[i] ] = getIntData(obj[keys[i]],data);
    }
    return info;
}

function getIntData(arrRange,data){
    var ret = {};
    var start = arrRange[0];
    var end = arrRange[1];
    var diff = arrRange[2];
    var intData = parseInt(data.substring(start,end),16);
    if(diff === 1)
        return intData;
    else
        return intData/diff;
}

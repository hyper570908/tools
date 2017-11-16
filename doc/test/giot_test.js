var mqtt = require('mqtt');

var hostname = '52.193.146.103';
var portNumber = 80;
var client_Id = '200000108-generic-service';
var name = '200000108';
var pw = '63738805';
var mytopic = 'client/200000108/200000108-GIOT-MAKER';

var options = {
	port:portNumber,
  host: hostname,
  clientId:client_Id,
  username:name,
  password:pw,
  keepalive: 0,
	reconnectPeriod: 1000,
	protocolId: 'MQIsdp',
	protocolVersion: 3,
	clean: true,
	encoding: 'utf8'
};


var client = mqtt.connect(options);


client.on('connect', function()  {
	console.log('time:'+new Date()+'-> mqtt topic:'+mytopic);
  client.subscribe(mytopic,{qos:2},function(err,granted){
    if(err){
      console.log('subscribe fail: '+err);
    }
    console.log('subscribe success: '+JSON.stringify(granted));
  });
});

client.on('message', function(topic, message) {
  console.log('----------------------------------------------------------------');
	console.log(new Date()+'\ntopic:'+topic.toString());
  	if(topic == mytopic) {
      console.log('message ---------------------------------------');
  		console.log('message:'+message.toString());
  		var obj = JSON.parse(message);
      console.log('JSON object ---------------------------------------');
      console.log('macAddr:'+obj.macAddr+', data:'+obj.data + '>> receive time : '+obj.recv);
    }
});


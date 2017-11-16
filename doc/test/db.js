var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

//mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/demo');

var userSchema = new mongoose.Schema({
    name:        { type: String},
	age:        { type: Number},
	//info:     { type: Schema.Types.Mixed}
});

mongoose.model('User', userSchema);

var UserModel = mongoose.model('User');


var mUser = 'jason';
//var infomation = { birthday:new Date('1996-05-05 12:00:00'),sex:'male'};
var userEntity = new UserModel({name:mUser,age:20});

console.log(userEntity.name);

userEntity.save(function(error){
	if(error){
		console.log('save fail!');
	}else{
		console.log('save success!');
		UserModel.find(function(err,users){
		  //查詢到的所有user
		  if(err){
			  console.log("查詢到所有user err!\n")
		  }
		  console.log("查詢到所有user");
		  console.log(users+"\n");
		});
	}
});

/*UnitModel.update({_id : userId},
	{name:'wall'},
	{safe : true, upsert : true},
	(err, rawResponse)=>{
        if (err) {
            console.log('Debug : update Unit : '+ err);

    	} else {
            console.log('Debug : update Unit : success');
        }
    }
);*/

/*UserModel.find({ name: 'jason' }, function(err,users){
	if(err){
		console.log("查詢到所有user err!\n");
	}else{
		console.log("查詢到所有user");
		console.log(users+"\n");
	}
	var userID = users[0]._id;
	UserModel.update({_id : userID},
		{name:'wall'},
		{safe : true, upsert : true},
		(err, rawResponse)=>{
		    	if (err) {
		        console.log('Debug : update user : '+ err);

			} else {
		        console.log('Debug : update  user : success');
		    }
		}
	);
});*/

/*UserModel.remove({name:'wall'}, (err)=>{
  console.log('---removeAllUsers ---------------------------------------');
  if (err) {
    console.log('Debug : User remove all occur a error:', err);

  } else {
    console.log('Debug : User remove all success.');
    UserModel.find(function(err,users){
	  //查詢到的所有user
	  if(err){
		  console.log("查詢到所有user err!\n");
	  }
	  console.log("查詢到所有user");
	  console.log(users+"\n");
	});
  }
});*/



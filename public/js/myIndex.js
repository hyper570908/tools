console.log("My Index");


var opt2={
     "order": [[ 2, "desc" ]],
     "iDisplayLength": 25
 };

function toSecondTable(mac){
    console.log("mac :"+mac);
    var now = new Date();
    var date = (now.getFullYear() + '/' + (now.getMonth() + 1) + '/' + now.getDate() );
    document.location.href="/devices?mac="+mac;
}

$(document).ready(function(){
    var table = $("#table1").dataTable(opt2);
    table.$('tr').click(function() {
        var row=table.fnGetData(this);
        toSecondTable(row[1]);

    });    

});


console.log("My Index");

var opt={"oLanguage":{"sProcessing":"處理中...",
            "sLengthMenu":"顯示 _MENU_ 項結果",
            "sZeroRecords":"沒有匹配結果",
            "sInfo":"顯示第 _START_ 至 _END_ 項結果，共 _TOTAL_ 項",
            "sInfoEmpty":"顯示第 0 至 0 項結果，共 0 項",
            "sInfoFiltered":"(從 _MAX_ 項結果過濾)",
            "sSearch":"搜索:",
            "oPaginate":{"sFirst":"首頁",
                        "sPrevious":"上頁",
                        "sNext":"下頁",
                        "sLast":"尾頁"}
            },dom: 'Blrtip',
            buttons: [
                'copyHtml5',
                //'excelHtml5',
                //'pdfHtml5'
                'csvHtml5'
            ]
    };
var opt2={
     "order": [[ 2, "desc" ]],
     "iDisplayLength": 25
 };

function toSecondTable(mac){
    console.log("mac :"+mac);
    var now = new Date();
    var date = (now.getFullYear() + '/' + (now.getMonth() + 1) + '/' + now.getDate() );
    date = date + ' ' + now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
    document.location.href="/devices?mac="+mac+'&date='+date;
}

$(document).ready(function(){
    var table = $("#table1").dataTable(opt2);
    table.$('tr').click(function() {
        var row=table.fnGetData(this);
        toSecondTable(row[1]);
    });
});


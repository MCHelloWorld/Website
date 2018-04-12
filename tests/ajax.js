function start(){
  var data = {
    info: "hey this is a return",
    name: "sam",
  };
  data = JSON.stringify(data);
$.ajax({
  type: "get",
  dataType: "json",
  url: "127.0.0.1:5000/api/test",
  data: data,
  success: function(response, data){
    $('#status').text(response.back);

  },
  error: function(xhr, status, error){
    $('#status').text(status);
  }


  });
         }
start();

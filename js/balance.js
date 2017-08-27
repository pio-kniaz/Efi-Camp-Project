$.ajax({
  method:'get',
  url:'https://efigence-camp.herokuapp.com/api/data/summary',
  dataTypes:'jeson',
  success:function(data){
    // console.log(data);
    // $.map(data,function(moni,i){
      $('#balance-api').append(data.content[0].balance);
      $('#funds-api').append(data.content[0].funds);
      $('#payments-api').append(data.content[0].payments);
    // })
  }

})

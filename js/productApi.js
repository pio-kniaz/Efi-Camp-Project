$.ajax({
  method:'get',
  url:'https://efigence-camp.herokuapp.com/api/data/products',
  dataTypes:'jeson',
  success:function(data){
    console.log(data);
    // $.map(data,function(products,i){
      // Wallet Box
      $("#wallet-elem").append("["+data.content[0].elements+"]");
      $("#wallet-currency").append(data.content[0].currency);
      $("#wallet-amount").append(data.content[0].amount);
      $("#wallet-type").append(data.content[0].type);

      // Pigy Box
      $("#depo-type").append(data.content[1].type);
      $("#depo-currency").append(data.content[1].currency);
      $("#depo-amount").append(data.content[1].amount);
      $("#depo-elem").append('['+data.content[1].elements+']');

      // coins box

      $("#coins-type").append(data.content[2].type);
      $("#coins-currency").append(data.content[2].currency);
      $("#coins-amount").append(data.content[2].amount);
      $("#coins-elem").append('['+data.content[2].elements+']');

      // chart box
      $("#chart-type").append(data.content[3].type);
      $("#chart-currency").append(data.content[3].currency);
      $("#chart-amount").append(data.content[3].amount);
      $("#chart-elem").append('['+data.content[3].elements+']');


    // })
  }

})

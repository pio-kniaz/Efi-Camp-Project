// var myChart = document.querySelector("#my-chart").getContext('2d');



  $.ajax({
    method:'get',
    url:'https://efigence-camp.herokuapp.com/api/data/chart',
    error:function(response){

    },
    success:function(response){
      var chartLineScore=[]

      for (var i=0; i<response.content.length; i++){


        console.log(response.content[i].amount);

      chartLineScore.push(response.content[i].amount);

      }
    var myChart= document.getElementById('myChart').getContext('2d');
    var chart = new Chart(myChart,{
      type:'line',
      label:'test',
      data:{
        labels:['1', '3', '7', '11', '14', '21', '25','28','30','33'],
        datasets:[{
          label:"sadsadasdsa",
          data:chartLineScore,
          backgroundColor:'#0088d5',
          borderWidth:3,
          borderColor:'black',

        }]
      },

    });
    }
  })





    // labels:['1', '3', '7', '11', '14', '21', '25'],
    //
    //   data:[12000, 4000, 2500, 10000, 1600, 7000, 2000]

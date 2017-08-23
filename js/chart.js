// var myChart = document.querySelector("#my-chart").getContext('2d');
var myChart= document.getElementById('myChart').getContext('2d');
var chart = new Chart(myChart,{
  type:'line',
  data:{
    labels:['1', '3', '7', '11', '14', '21', '25'],
    datasets:[{
      label:['money'],
      data:[12000, 4000, 2500, 10000, 1600, 7000, 2000],
      backgroundColor:'#0088d5',
      borderWidth:3,
      borderColor:'black',

    }]
  },
  options:{
    title:{
      display:true,
      text:'balance',
      fontSize:20
    },
    legend:{
      // false/true on of
      display:false,
      position:'right',
      labels:{
        fontColor:'red'
      }
    }
  }
});


    // labels:['1', '3', '7', '11', '14', '21', '25'],
    //
    //   data:[12000, 4000, 2500, 10000, 1600, 7000, 2000]

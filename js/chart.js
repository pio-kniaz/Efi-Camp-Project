// var myChart = document.querySelector("#my-chart").getContext('2d');



  $.ajax({
    method:'get',
    url:'https://efigence-camp.herokuapp.com/api/data/chart',
    error:function(response){

    },
    success:function(response){
      var chartLineScore=[]
      var chartDate=[]
      var status=[]
      var description1=[]
      var inComePie=[]
      var outComePie=[]

      // console.log(status);
      // console.log(response.content.status);
      ;
      for (var i=0; i<response.content.length; i++){
        // console.log(inComePie);
        // console.log(outComePie)

        switch(response.content[i].status) {
  				case 'outcome':

            inComePie.push(response.content.status);

  					break;
  				case 'income':
  					outComePie.push(response.content.status)
  					break;

  				default:

  			}



        // console.log(response.content[i].amount);
        // console.log(response.content[i].description);


        inComePie.push(response.content[i].status)
      chartLineScore.push(response.content[i].amount);
      chartDate.push(response.content[i].date);
      status.push(response.content[i].status)
      description1.push(response.content[i].description)
      // console.log(chartDate);


      }
      // console.log(description1);
      // console.log(status);
      // console.log(inComePie);
      // ~~~~ LINE CHART~~~~~~ start
    var myChart= document.getElementById('myChart').getContext('2d');
    var chart = new Chart(myChart,{
      type:'line',
      label:'test',
      data:{
        labels:chartDate,
        datasets:[{
          label:'sds',
          data:chartLineScore,
          backgroundColor:'#0088d5',
          borderWidth:3,
          borderColor:'black',

        }]
      },

    });
    // LINE CHART END~~

    }
  })





    // labels:['1', '3', '7', '11', '14', '21', '25'],
    //
    //   data:[12000, 4000, 2500, 10000, 1600, 7000, 2000]

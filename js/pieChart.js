// var myChart = document.querySelector("#my-chart").getContext('2d');



  $.ajax({
    method:'get',
    url:'https://efigence-camp.herokuapp.com/api/data/chart',
    error:function(response){

    },
    success:function(response){
      var chartLineScore=[]

      // dataTime
      var chartDate=[]
      // descriptions
      var description1=[]
      // ALL 10 STATUS
      var statusPieAll=[]
      // EXPENSES STATUS
      var statusOut=[]
      // income

      // Income Amount
      var plusScore=[]
      // Income Status
      var statusIn=[]

      // var inComeSummary=0;


      // console.log(status);
      // console.log(response.content.status);
// console.log(plusScore);
console.log(statusIn);
console.log(statusOut);
// console.log(statusPieAll);
// console.log(outComePie);
// console.log(statusIn);
// console.log(status);
// console.log(statusIn);
      ;
      for (var i=0; i<response.content.length; i++){
        // console.log(inComePie);
        // console.log(outComePie)


        switch(response.content[i].status) {
  				case 'income':

            // statusPie.push(response.content[i].status);
            plusScore.push(response.content[i].amount);
            statusIn.push(response.content[i].status);
            // console.log(inComePie);
            // console.log(plusScore);

  					break;
  				case 'outcome':
  					statusOut.push(response.content[i].status)
  					break;

  				default:

  			}

        // console.log(response.content[i].amount);
        // console.log(response.content[i].description);

        statusPieAll.push(response.content[i].status)
      chartLineScore.push(response.content[i].amount);
      chartDate.push(response.content[i].date);

      // description1.push(response.content[i].description)
      // console.log(chartDate);
      }
      // console.log(description1);
      // console.log(status);
      // console.log(inComePie);

    // PIE CHART start
    let myChart2 = document.getElementById('myChart2').getContext('2d');

    let massPopChart = new Chart(myChart2,{
      type:'pie',
      label:'test',
      data:{
        labels:statusIn,
        datasets:[{
          label:'label',
          data:plusScore,
          backgroundColor:[
            '#d9dada',
            '#409d00',
            '#018cad',
            'aqua',
            'brown',
            'grey',
            'yellow'
          ],
          borderWidth:1,
          borderColor:'black',

        }]
      },

    });

    // ~~~END PIE CHART~~
    }
  })





    // labels:['1', '3', '7', '11', '14', '21', '25'],
    //
    //   data:[12000, 4000, 2500, 10000, 1600, 7000, 2000]

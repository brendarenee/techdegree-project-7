
Chart.defaults.global.defaultFontFamily = '\'Open Sans Condensed\', sans-serif';

var ctx = document.getElementById('myMainChart');
  var myMainChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['1-7','8-14','15-21','22-28','29-4','5-11','12-18','19-25','26-2','3-9','10-16','17-23'],
      datasets: [{
        label: '# of visitors',
        data: [1000,1112,2033,2507,1723,1581,2018,2374,1887,2005,2139,2487],
        borderColor: 'rgba(0,0,0)',
        borderWidth: 3,
        backgroundColor: 'rgba(61,94,94,0.4)',
      }]
    },
    options: {
      title: {
        display: true,
        text: 'TRAFFIC',
      },
      legend: {
        display: false,
      },
      aspectRatio: 4,
    }
  });

var ctx = document.getElementById('myDailyChart');
    var myDailyChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['M','T','W','TH','F','SA','SU'],
        datasets: [{
          label: 'Daily Traffic',
          data: [150,203,117,160,316,259,350],
          borderColor: 'rgba(0,0,0)',
          backgroundColor: 'rgb(43,56,56)',
        }]
      },
      options: {
        title: {
          display: true,
          text: 'DAILY TRAFFIC'
        }
      }
    });

      var ctx = document.getElementById('myMobileChart');
      var myMobileChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
          labels: ['Desktop','Tablets','Phones'],
          datasets: [{
            label: 'Mobile Users',
            data: [80,20,200],
            borderColor: 'rgba(0,0,0)',
            backgroundColor:
              ['rgb(91,7,105)','rgb(154,155,102)','rgb(43,56,56)']
          }]
        },
        options: {
          title: {
            display: true,
            position: 'top',
            text: 'MOBILE USERS'
          },
        }
      });

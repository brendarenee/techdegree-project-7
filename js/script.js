
// Dynamically create alert

const alertBanner = document.getElementById("alert");

alertBanner.innerHTML = '<div class="alert-banner"> <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p> <p class="alert-banner-close">x</p></div>';

alertBanner.addEventListener('click', e => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = 'none';
  }
})

// User message 'SEND' button event addEventListener

const sendMessage = document.getElementById("send-message-btn");
const userInput = document.getElementById("input-user");
const messageInput= document.getElementById("input-message");

sendMessage.addEventListener('click', () => {

  if (userInput.value === "" || messageInput.value === "") {
    alert('Please enter information for both fields.');
  } else {
    alert(`Your message has been sent to: ${userInput.value}`);
  }

})


// Insert charts

Chart.defaults.global.defaultFontFamily = '\'Open Sans Condensed\', sans-serif';

var ctx = document.getElementById('myWeeklyTrafficChart');
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
      legend: {
        display: true,
        align: 'end',
      },
      aspectRatio: 3,
      responsive: true,
      maintainAspectRatio: true,
    }
  });

  // var ctx = document.getElementById('myMonthlyTrafficChart');
  //   var myMonthlyTrafficChart = new Chart(ctx, {
  //     type: 'line',
  //     data: {
  //       labels: ['Aug','Sept','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun','Jul'],
  //       datasets: [{
  //         label: '# of visitors',
  //         data: [1000,1112,2033,2507,1723,1581,2018,2374,1887,2005,2139,2487],
  //         borderColor: 'rgba(0,0,0)',
  //         borderWidth: 3,
  //         backgroundColor: 'rgba(61,94,94,0.4)',
  //       }]
  //     },
  //     options: {
  //       title: {
  //         display: true,
  //         text: 'TRAFFIC',
  //       },
  //       legend: {
  //         display: false,
  //       },
  //       aspectRatio: 3,
  //       responsive: true,
  //       maintainAspectRatio: true,
  //     }
  //   });

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
        responsive: true,
        maintainAspectRatio: true,
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
          responsive: true,
          maintainAspectRatio: true,
        }
      });

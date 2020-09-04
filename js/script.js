
// Dynamically create alert

const alertBanner = document.getElementById("alert");

alertBanner.innerHTML = '<div class="alert-banner"> <p><strong>Alert:</strong> You have <strong>6</strong> overdue tasks to complete</p> <p class="alert-banner-close">x</p></div>';

alertBanner.addEventListener('click', e => {
  const element = e.target;
  if (element.classList.contains("alert-banner-close")) {
    alertBanner.style.display = 'none';
  }
})

// Click event listener for Alert Notification

const alertDropdown = document.getElementById("alert-dropdown");
const alertIcon = document.querySelector(".bell-alert");
const alertBell = document.querySelector(".bell-container");

alertDropdown.innerHTML = '<ul class="alert-menu"><li>You have a new message from Betty Light.<p class="alert-item-close">X</p></li><li>Georgia Ford commented on a recent post.<p class="alert-item-close">X</p></li></ul>';

alertBell.addEventListener('click', e => {
  const element = e.target;
  if (element.classList.contains("bell-svg")) {
    alertDropdown.style.display = "inline-block";
    alertIcon.style.visibility = "hidden";
  } else if (element.classList.contains("alert-item-close")) {
    element.parentNode.style.display = "none";
  }
});

// Add autocomplete to user search bar

$( function() {
  var availableNames = [
    'Georgia Ford',
    'Paula McCargo',
    'John Lemon',
    'Ringo Farr',
    'Betty Light',
    'Anthony Shopkins',
    'Chris Cornelius',
    'Brad Litt'
  ];
  $( "#input-user" ).autocomplete({
    minLength: 0,
    source: availableNames,
    select: function (e) {
      $( "#input-user").val();
    }
  });
});

// User message 'SEND' button event addEventListener

const sendMessage = document.getElementById("send-message-btn");
const userInput = document.getElementById("input-user");
const messageInput= document.getElementById("input-message");

sendMessage.addEventListener('click', () => {

  if (userInput.value === "" && messageInput.value === "") {
    alert('Please enter information for both fields.');
  } else if (userInput.value === ""){
    alert('Please enter user information');
  } else if (messageInput.value === ""){
    alert(`Please enter a message for: ${userInput.value}`)
  } else {
    alert(`Your message has been sent to: ${userInput.value}`);
    userInput.value = "";
    messageInput.value = "";
  }

})

// Insert charts

Chart.defaults.global.defaultFontFamily = '\'Open Sans Condensed\', sans-serif';

// Media Query Function for Main Chart

const mqMd = window.matchMedia('(min-width: 768px)');
const mqLg = window.matchMedia('(min-width: 1024px)');
let chartSize = 0;
console.log(mqLg.matches);

function checkScreenSize () {
  if (mqLg.matches) {
    chartSize = 4;
  } else if (mqMd.matches) {
    chartSize = 3;
  } else {
    chartSize = 2;
  }
}

checkScreenSize();

// click event for traffic chart



const trafficNav = document.querySelector(".traffic-chart-nav");
const trafficNavList = trafficNav.children;

trafficNavList[2].classList.add("selected");


function navSelect (e) {
  for (i=0; i<trafficNavList.length; i++) {
    if (trafficNavList[i].innerHTML === e.innerHTML) {
      trafficNavList[i].classList.add("selected");
    } else {
      trafficNavList[i].classList.remove("selected");
    }
  }
}

function updateChart (li, chart) {
  if (li.innerHTML === "Monthly") {
    chart.data.labels.splice(0,12,'Sept','Oct','Nov','Dec','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug');
    chart.data.datasets[0].data.splice(0,12,6221,6330,6499,6822,7011,6523,6775,6901,7375,7500,7860,6631);
    chart.update();
  } else if (li.innerHTML === "Daily") {
    chart.data.labels.splice(0,12,'W','TH','F','SA','SU','M','TU','W','TH','F','SA','SU');
    chart.data.datasets[0].data.splice(0,12,177,200,183,141,135,150,203,117,160,316,259,350);
    chart.update();
  } else if (li.innerHTML === "Weekly") {
    chart.data.labels.splice(0,12,'1-7','8-14','15-21','22-28','29-4','5-11','12-18','19-25','26-2','3-9','10-16','17-23');
    chart.data.datasets[0].data.splice(0,12,1000,1112,2033,2507,1723,1581,2018,2374,1887,2005,2139,2487);
    chart.update();
  } else if (li.innerHTML === "Hourly") {
    chart.data.labels.splice(0,12,'6a','7a','8a','9a','10a','11a','12p','1p','2p','3p','4p','5p');
    chart.data.datasets[0].data.splice(0,12,10,15,37,43,25,20,17,31,44,45,31,27);
    chart.update();
  }
}

trafficNav.addEventListener('click', e => {
  const element = e.target;
  navSelect(element);
  updateChart(element, myMainChart);
});



// create traffic chart

var ctx = document.getElementById('myTrafficChart');
  var myMainChart = new Chart(ctx, {
    type: 'line',
    data:  {
      labels: ['1-7','8-14','15-21','22-28','29-4','5-11','12-18','19-25','26-2','3-9','10-16','17-23'],
      datasets: [{
        data: [1000,1112,2033,2507,1723,1581,2018,2374,1887,2005,2139,2487],
        borderColor: 'rgba(0,0,0)',
        borderWidth: 2,
        backgroundColor: 'rgba(70,107,91,0.4)',
      }],
    },
    options: {
      legend: {
        display: false
      },
      aspectRatio: chartSize,
      responsive: true,
      maintainAspectRatio: true,
      animation: {
        duration: 0
      },
    },
  });

// daily chart

var ctx = document.getElementById('myDailyChart');
    var myDailyChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['M','T','W','TH','F','SA','SU'],
        datasets: [{
          data: [150,203,117,160,316,259,350],
          borderColor: 'rgba(0,0,0)',
          backgroundColor: 'rgb(70,107,91)',
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        legend: {
          display: false,
        }
      }
    });

// mobile chart

var ctx = document.getElementById('myMobileChart');
var myMobileChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Desktop','Tablets','Phones'],
    datasets: [{
      label: 'Mobile Users',
      data: [80,20,200],
      borderColor: 'rgba(0,0,0)',
      borderWidth: 0,
      borderAlign: 'inner',
      backgroundColor:
        ['rgb(112,94,140)','rgb(255,246,142)','rgb(70,107,91)']
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: true,
  }
});


// Local Storage for SETTINGS

const buttons = document.querySelectorAll('button');

buttons.forEach(btn => {
  btn.addEventListener('mousedown', event => {
    btn.style.transform = 'translateY(3px)';
  })
  btn.addEventListener('mouseup', event => {
    btn.style.transform = 'translateY(0)';
  })
})



const saveButton = document.querySelector('.button-save');
const cancelButton = document.querySelector('.button-cancel');

//grab reference for dom elements
const settingsEmail = document.querySelector('#email-settings .toggle');
const settingsProfile = document.querySelector('#profile-settings .toggle');
const settingsTimeZone = document.querySelector('.timezone-menu');

saveButton.addEventListener('click', e => {

  //check the checkboxes values and set localStorage
  if (settingsEmail.checked) {
    localStorage.setItem ('emailSettings', 'on');
  } else {
    localStorage.setItem('emailSettings', 'off');
  }

  if (settingsProfile.checked) {
    localStorage.setItem('profileSettings', 'public');
  } else {
    localStorage.setItem('profileSettings', 'private');
  };

  // save the timezone selection and set localStorage

  const selectedTimeZone = settingsTimeZone.options[settingsTimeZone.selectedIndex];

  localStorage.setItem('timeZone', selectedTimeZone.innerHTML);

});

cancelButton.addEventListener('click', e => {

  // change all settings to default
  settingsEmail.checked = false;
  settingsProfile.checked = false;
  settingsTimeZone.selectedIndex = 0;

  // update local storage to null
  localStorage.emailSettings = null;
  localStorage.profileSettings = null;
  localStorage.timeZone = null;
});

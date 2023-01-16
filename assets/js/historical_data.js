// custom Tabs

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}
window.onload = function () {
    document.getElementById('branch_performance').click();
}


// chart js
const DATA_COUNT = 12;
const labels6 = [];
for (let i = 0; i < DATA_COUNT; ++i) {
    labels6.push(i.toString());
}
const datapoints1 = [0, 20, 20, 60, 60, 120, 110, 180, 120, 125, 105, 110, 170];
const datapoints2 = [0, 10, 10, 30, 30, 60, 55, 90, 60, 65, 50, 55, 85];
const datapoints3 = [0, 5, 5, 15, 15, 30, 22, 45, 30, 33, 25, 27, 43];
const data6 = {
    labels: labels6,
    datasets: [{
        label: 'Najm',
        data: datapoints1,
        borderColor: '#32825a',
        fill: false,
        cubicInterpolationMode: 'monotone',
        tension: 0.4
    }, {
        label: 'Najm & Maroor',
        data: datapoints2,
        borderColor: '#056387',
        fill: false,
        tension: 0.4
    }, {
        label: 'Un Najm',
        data: datapoints3,
        borderColor: '#fa8005',
        fill: false
    }]
};


const config6 = {
    type: 'line',
    data: data6,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
            },
        },
        interaction: {
            intersect: false,
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Value'
                },
                suggestedMin: -10,
                suggestedMax: 200
            }
        }
    },
};

const lineChartOne = new Chart(
    document.getElementById('lineChartOne'),
    config6
);
const lineChartTwo = new Chart(
    document.getElementById('lineChartTwo'),
    config6
);
const lineChartThree = new Chart(
    document.getElementById('lineChartThree'),
    config6
);
const lineChartFour = new Chart(
    document.getElementById('lineChartFour'),
    config6
);

const DATA_COUNT7 = 24;
const labels7 = [];
for (let i = 0; i < DATA_COUNT7; ++i) {
    labels7.push(i.toString());
}
const datapoints4 = [0, 20, 20, 60, 60, 120, 110, 180, 120, 125, 105, 110, 170, 0, 20, 20, 60, 60, 120, 110, 180, 120, 125, 105, 110, 170];
const datapoints5 = [0, 10, 10, 30, 30, 60, 55, 90, 60, 65, 50, 55, 85, 0, 10, 10, 30, 30, 60, 55, 90, 60, 65, 50, 55, 85];
const datapoints6 = [0, 5, 5, 15, 15, 30, 22, 45, 30, 33, 25, 27, 43, 0, 5, 5, 15, 15, 30, 22, 45, 30, 33, 25, 27, 43];
const data7 = {
    labels: labels7,
    datasets: [{
        label: 'Najm',
        data: datapoints4,
        borderColor: '#32825a',
        fill: false,
        cubicInterpolationMode: 'monotone',
        tension: 0.4
    }, {
        label: 'Najm & Maroor',
        data: datapoints5,
        borderColor: '#056387',
        fill: false,
        tension: 0.4
    }, {
        label: 'Un Najm',
        data: datapoints6,
        borderColor: '#fa8005',
        fill: false
    }]
};


const config7 = {
    type: 'line',
    data: data7,
    options: {
        responsive: true,
        plugins: {
            title: {
                display: true,
            },
        },
        interaction: {
            intersect: false,
        },
        scales: {
            x: {
                display: true,
                title: {
                    display: true
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    text: 'Value'
                },
                suggestedMin: -10,
                suggestedMax: 200
            }
        }
    },
};


const lineChartFive = new Chart(
    document.getElementById('lineChartFive'),
    config7
);
const lineChartSix = new Chart(
    document.getElementById('lineChartSix'),
    config7
);


const labels8 = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
];
const data = {
    labels: labels8,
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56, 55, 40, 45, 55, 68, 70, 81],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
        ],
        borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
        ],
        borderWidth: 1
    }]
};
const config8 = {
    type: 'bar',
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    },
};
const barChartOne = new Chart(
    document.getElementById('barChartOne'),
    config8
);

// Get the modal
var modal = document.getElementById("modelOne");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
function rs_modelShow() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.animationName = "fadeOut";
    modal.addEventListener("animationend", () => {
        if (modal.style.animationName == 'fadeIn') return
        modal.style.animationName = "fadeIn";
        modal.style.display = "none"
    })
    // modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.animationName = "fadeOut";
        modal.addEventListener("animationend", () => {
            if (modal.style.animationName == 'fadeIn') return
            modal.style.animationName = "fadeIn";
            modal.style.display = "none"
        })
        // modal.style.display = "none";
    }
}
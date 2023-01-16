// today time
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    t = setTimeout(function () {
        startTime()
    }, 500);
}
startTime();

// guage setup

var opts = {
    angle: 0, // The span of the gauge arc
    lineWidth: 0.05, // The line thickness
    radiusScale: 0.58, // Relative radius
    pointer: {
        length: 0.52, // // Relative to gauge radius
        strokeWidth: 0.018, // The thickness
        color: '#000000' // Fill color
    },
    limitMax: false, // If false, max value increases automatically if value > maxValue
    limitMin: false, // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF', // Colors
    colorStop: '#8FC0DA', // just experiment with them
    strokeColor: '#E0E0E0', // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true, // High resolution support
    staticZones: [
        { strokeStyle: "#5cd65c", min: 0, max: 15 }, // green
        { strokeStyle: "#ffff80", min: 15, max: 30 }, // yellow
        { strokeStyle: "#ffb84d", min: 30, max: 45 }, // orange
        { strokeStyle: "#ff3333", min: 45, max: 60 }, // red
    ],
    staticLabels: {
        font: "10px sans-serif", // Specifies font
        labels: [0, 10, 20, 30, 40, 50, 60], // Print labels at these values
        color: "#000000", // Optional: Label text color
        fractionDigits: 0 // Optional: Numerical precision. 0=round off.
    },
};
var guageOne = document.getElementById('guageOne'); // your canvas element
var gauge1 = new Gauge(guageOne).setOptions(opts); // create sexy gauge!
gauge1.maxValue = 60; // set max gauge value
gauge1.setMinValue(0); // Prefer setter over gauge.minValue = 0
gauge1.animationSpeed = 40; // set animation speed (32 is default value)
gauge1.set(15); // set actual value

var guageTwo = document.getElementById('guageTwo'); // your canvas element
var guage2 = new Gauge(guageTwo).setOptions(opts); // create sexy gauge!
guage2.maxValue = 60; // set max gauge value
guage2.setMinValue(0); // Prefer setter over gauge.minValue = 0
guage2.animationSpeed = 40; // set animation speed (32 is default value)
guage2.set(30); // set actual value

var guageThree = document.getElementById('guageThree'); // your canvas element
var gauge3 = new Gauge(guageThree).setOptions(opts); // create sexy gauge!
gauge3.maxValue = 60; // set max gauge value
gauge3.setMinValue(0); // Prefer setter over gauge.minValue = 0
gauge3.animationSpeed = 40; // set animation speed (32 is default value)
gauge3.set(45); // set actual value


// CHART JS SETUP
Chart.defaults.font.size = 10;
// Chart.defaults.global.legend.display = false;
const labels2 = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
];

const data2 = {
    labels: labels2,
    datasets: [{
        label: 'My First dataset',
        backgroundColor: '#4bc0c0',
        borderColor: '#4bc0c0',
        data: [0, 40, 80, 120, 180, 200],
    }]
};

const config2 = {
    type: 'line',
    data: data2,
    options: {
        plugins: {
            legend: {
                display: false,
            }
        }
    }
};

const myChart2 = new Chart(
    document.getElementById('chartTwo'),
    config2
);

const config4 = {
    type: 'line',
    data: data2,
    options: {
        plugins: {
            legend: {
                display: false,
            }
        }
    }
};
const myChart4 = new Chart(
    document.getElementById('chartFour'),
    config4
);

const labels1 = [
    'FB',
    'Insta',
    'Other',
    'Web',
    'Agent',
];
const data1 = {
    labels: labels1,
    datasets: [{
        label: 'My First Dataset',
        data: [65, 59, 80, 81, 56],
        backgroundColor: [
            '#e6c068',
            '#db6b2a',
            '#cb150c',
            '#32835b',
            '#e6c068',
        ],
        // borderColor: [
        //     'rgb(255, 99, 132)',
        //     'rgb(255, 159, 64)',
        //     'rgb(255, 205, 86)',
        //     'rgb(75, 192, 192)',
        //     'rgb(54, 162, 235)',
        // ],
        borderWidth: 1
    }]
};

const config1 = {
    type: 'bar',
    data: data1,
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        plugins: {
            legend: {
                display: false,
            }
        }
    },
};
const myChart1 = new Chart(
    document.getElementById('chartOne'),
    config1
);
const myChart3 = new Chart(
    document.getElementById('chartThree'),
    config1
);

const data5 = {
    labels: ['Yellow', 'Orange', 'Red', 'Green'],
    datasets: [{
        label: 'Dataset 1',
        data: [25, 25, 25, 5],
        backgroundColor: [
            '#e6c068',
            '#db6b2a',
            '#cb150c',
            '#32835b',
        ],
    }]
};

const config5 = {
    type: 'pie',
    data: data5,
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
                display: false,
            },
            title: {
                display: false,
                text: 'Chart.js Pie Chart'
            }
        }
    },
};

const myChart5 = new Chart(
    document.getElementById('chartFive'),
    config5
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
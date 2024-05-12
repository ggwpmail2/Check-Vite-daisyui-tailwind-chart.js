//todo: theme switcher
function changeTheme(elem) {
  if (elem.checked) {
    document.querySelector("html").dataset.theme = "dark";
    localStorage.theme = "dark";
  } else {
    document.querySelector("html").dataset.theme = "winter";
    localStorage.theme = "winter";
  }
}

//todo: input range adding functon
function slider(elem) {
  if (
    elem.value >
    elem.parentNode.parentNode.parentNode.querySelector(".slider__inner_value")
      .innerHTML
  ) {
    elem.parentNode.parentNode.parentNode
      .querySelector(".slider__plus_value")
      .classList.add("show_opacity");
  } else {
    elem.parentNode.parentNode.parentNode
      .querySelector(".slider__minus_value")
      .classList.add("show_opacity");
  }
  elem.parentNode.parentNode.parentNode.querySelector(
    ".slider__inner_value"
  ).innerHTML = elem.value;
  setTimeout(() => {
    elem.parentNode.parentNode.parentNode
      .querySelector(".slider__plus_value")
      .classList.remove("show_opacity");
    elem.parentNode.parentNode.parentNode
      .querySelector(".slider__minus_value")
      .classList.remove("show_opacity");
  }, 300);
}

//todo: chart with memory usage
let tempIndex = 1;

let xValues = [0];
let yValues = [bytesToSize(window.performance.memory.usedJSHeapSize)];
let yValues2 = [bytesToSize(window.performance.memory.totalJSHeapSize)];

chart=new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [
    {
      fill: true,
      lineTension: 1,
      backgroundColor: "rgba(100,100,100,0.5)",
      borderColor: "rgba(100,100,100,0.2)",
      data: yValues
    },
    {
        fill: true,
        lineTension: 1,
        backgroundColor: "rgba(0,0,255,0.2)",
        borderColor: "rgba(100,200,255,0.5)",
        data: yValues2
      }
]
  },
  options: {
    legend: {display: false},
    scales: {
      yAxes: [{ticks: {min: 0, max:128}}],
    }
  }
});

setInterval(() => {
  let delay=0;
   xValues.push(tempIndex++);
   yValues.push(bytesToSize(window.performance.memory.usedJSHeapSize));
   yValues2.push(bytesToSize(window.performance.memory.totalJSHeapSize));
   chart.update(); 
}, 1200);

function bytesToSize(bytes, precision = 2) {
    if (bytes === 0) return '0';
    const index = Math.floor(Math.log(bytes) / Math.log(1024));
    return (bytes / Math.pow(1024, index)).toFixed(precision);
}


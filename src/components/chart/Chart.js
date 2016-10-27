import React from "react";
import Chart from "chart.js";

export class ChartThing extends React.Component {

  componentDidMount() {
    const { data } = this.props
    const colors = createColors(data.length);
    var colorIndex = 0;
    const datasets = data.map(e => createDataset(e.title, e.values, colors[colorIndex++]))
    datasets.push(createAverageDataset(datasets));

    const ctx = document.getElementById("myChart");
    const myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: datasets
      },
      options: {
        maintainAspectRatio: false,
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
      }
    });
  }

  render() {
    return (
      <div className="pohina-container-m-top">
        <canvas id="myChart" width="400" height="400"></canvas>
      </div>
    );
  }
}

import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    data: state.business.data
  }
};

export default connect(mapStateToProps, null)(ChartThing)

// dataPoints: array of numbers
function createDataset(title, dataPoints, color) {
  return {
    label: title,
    data: dataPoints,
    fill: false,
    lineTension: 0.2,
    backgroundColor: color,
    borderColor: color,
    borderCapStyle: 'butt',
    borderDash: [],
    borderDashOffset: 0.0,
    borderJoinStyle: 'miter',
    pointBorderColor: '#fff',
    pointBorderWidth: 1,
    pointHoverRadius: 6,
    pointHoverBackgroundColor: color,
    pointHoverBorderColor: '#fff',
    pointHoverBorderWidth: 1,
    pointRadius: 3,
    pointHitRadius: 10,
    spanGaps: false
  };
}

function createAverageDataset(datasets) {
  var averageDataPoints = [];
  for (var i = 0; i < datasets[0].data.length; i++) {
    var sum = 0.0;
    for (var datasetIndex = 0; datasetIndex < datasets.length; datasetIndex++) {
      sum += datasets[datasetIndex].data[i];
    }
    averageDataPoints.push(sum / datasets.length);
  }
  return createDataset("average", averageDataPoints, '#ddd');
}

function createColors(count) {
  var colors = [];
  for (var i = 0; i < count; i++) {
    colors.push('hsla(' + (360 / count * i) + ', 90%, 70%, 1)');
  }
  return colors;
}

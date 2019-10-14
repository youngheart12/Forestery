import React, { Component } from 'react'
import Chart from 'react-apexcharts'
class graphComp extends Component {
    constructor(props) {
      super(props);
   
      this.state = {
        options: {
          chart: {
            id: 'apexchart-example'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
          }
        },
        series: [{
          name: 'Wildfires',
          data: [2000, 2500, 1800, 2700, 3000,2400, 3000, 3015]
        }]
      }
    }
    render() {
      return (
        <Chart options={this.state.options} series={this.state.series} type={this.props.datatype} width={500} height={150} />
      )
    }
  }
  export default graphComp;

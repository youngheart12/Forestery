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
            categories: ["MP","Kerla","Tamilnadu","AP","Karntak"]
          }
        },
        series: [{
          name: 'Wildfires',
          data: [1800, 1750, 1650, 1750, 1450,2400, 3600, 155]
        }]
      }
    }
    render() {
      return (
        <Chart options={this.state.options} series={this.state.series} type={this.props.datatype} width={500} height={170} />
      )
    }
  }
  export default graphComp;

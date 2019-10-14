import React, { Component } from 'react'
import { Table, Progress } from 'reactstrap';
export class table extends Component {
    render() {
        return (
            <div>
                
                 <Table>
      <thead>
        <tr>
          <th>Serial No.</th>
          <th>State</th>
          <th>Year</th>
          <th>Performance</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Tamilnadu</td>
          <td>2018-19</td>
          <td><Progress multi>
        <Progress bar value="15" />
        <Progress bar color="success" value="30" />
        <Progress bar color="warning" value="10" />
        </Progress></td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Kerala</td>
          <td>2018-19</td>
          <td><Progress multi>
        <Progress bar value="15" />
        <Progress bar color="success" value="30" />
        <Progress bar color="warning" value="40" />
        </Progress></td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Maharastra</td>
          <td>2018-19</td>
          <td><Progress multi>
        <Progress bar value="15" />
        <Progress bar color="success" value="30" />
        <Progress bar color="warning" value="20" />
        </Progress></td>
        </tr>
      </tbody>
    </Table>
            </div>
        )
    }
}

export default table

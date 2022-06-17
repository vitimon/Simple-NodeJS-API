import React, { PureComponent } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    month: 'January',
    sales: 100
  },
  {
    month: 'February',
    sales: 50
  },
  {
    month: 'March',
    sales: 150
  },
  {
    month: 'April',
    sales: 180
  }
];

export default class Chart extends PureComponent {

  render() {
    return (
        <BarChart
          width={1300}
          height={400}
          data={this.props.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="sales" fill="#88B4E7" />
        </BarChart>
    );
  }
}

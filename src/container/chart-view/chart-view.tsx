import React from 'react';
import { BarChart } from './bar-chart/bar-chart';
import { BubleChart } from './buble-chart/buble-chart';
import { ChartEvents } from './chart-events/chart-events';
import './chart-view.scss';
import { DoughnutChart } from './doughnut-chart/doughnut-chart';
import { PolarAreaChart } from './polar-area-chart/polar-area-chart';

export default function ChartView() {
  return (
    <div className="charts-container">
      <div className="chart-full-width">
        <ChartEvents />
        <div className="chart-name">
          <span>Chart Events</span>
        </div>
      </div>
      <div className="chart-full-width">
        <BubleChart />
        <div className="chart-name">
          <span>Buble Chart</span>
        </div>
      </div>
      <div className="half-width-container">
        <div className="chart-half-width">
          <DoughnutChart />
          <div className="chart-name">
            <span>Doughnut Chart</span>
          </div>
        </div>
        <div className="chart-half-width">
          <PolarAreaChart />
          <div className="chart-name">
            <span>Polar Area Chart</span>
          </div>
        </div>
      </div>
      <div className="chart-full-width">
        <BarChart />
        <div className="chart-name">
          <span>Bar Chart</span>
        </div>
      </div>

    </div>
  )
}

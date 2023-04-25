import React from 'react'
import {
	Chart,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';

Chart.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Filler,
	Title,
	Tooltip,
);

Chart.defaults.font.size = 14;

export const options = {
	responsive: true,
	plugins: {
		legend: {
			display: false
		},
	},
	scales: {
		x: {
			grid: {
				display: false,
			},
			border: {
				display: false
			},
		},
		y: {
			grid: {
				tickWidth: 0,
			},
			border: {
				dash: [2, 4],
				display: false
			},
			ticks: {
				stepSize: 200,
			},
		}
	},
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

export const data = {
	labels,
	datasets: [
		{
			label: 'Dataset 2',
			data: [0, 700, 300, 500, 1000, 300],
			borderColor: '#FF5403',
			fill: true,
			backgroundColor: (context: any) => {

				const bgColor = [
					"rgba(255, 84, 3, 0.2)",
					"rgba(255, 84, 3, 0)"
				]

				if (!context.chart.chartArea) return

				const { ctx, data, chartArea: { top, bottom } } = context.chart
				const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
				gradientBg.addColorStop(0, bgColor[0])
				gradientBg.addColorStop(1, bgColor[1])
				return gradientBg
			},
			pointRadius: 0,
		},
	],
};

const LineChart = () => {
	return (
		<div className='mt-10'><Line options={options} data={data} /></div>
	)
}

export default LineChart
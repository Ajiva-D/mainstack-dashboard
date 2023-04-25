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

const options = {
	responsive: true,
	maintainAspectRatio: false,
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
				stepSize: 20,
			},
		}
	},
};


export interface LineChartProps {
	data?: number[];
	labels?: string[]
}
const LineChart: React.FC<LineChartProps> = ({ data, labels }) => {

	const chartData = {
		labels,
		datasets: [
			{
				label: 'Dataset',
				data,
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
	return (
		<div className='mt-10 h-[300px]'> {chartData && <Line data={chartData} options={options} />}</div>
	)
}

export default LineChart
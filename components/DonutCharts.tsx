import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import Image from 'next/image';

ChartJS.register(ArcElement, Tooltip);

const options = {
	responsive: true,
	cutout: '65%'
}
const bgColors = [
	'#599EEA',
	'#844FF6',
	'#0FB77A',
	'#F09468',
	'#FAB70A',
]
export interface DonutChartProps {
	data?: number[];
	labels?: string[]
}
interface TitleProps {
	title: string;
	donutChartData: DonutChartProps;
	images: string[]
}
const DonutCharts: React.FC<TitleProps> = ({ title, images, donutChartData: { data, labels } }) => {
	const chartData = {
		labels,
		datasets: [
			{
				label: title,
				data,
				backgroundColor: bgColors,
				borderWidth: 1,
				width: 10
			},
		],
	};

	return (
		<div className='border border-gray-100 rounded-xl p-6'>
			<div className="flex justify-between items-center">
				<h1 className=' text-lg text-black font-medium tracking-tightest'>{title}</h1>
				<p className=' text-orange-300 text-sm'>View full reports</p>
			</div>

			<div className="flex justify-between mt-11 items-start">
				<ul className='space-y-4'>
					{labels?.map((label, index) => (<li className='flex space-x-3 items-center text-black capitalize' key={label}>
						<Image src={images[index]} alt={label} width={20} height={15} className='rounded-[3px]' />
						<p>{label} <span className='font-medium'>{data?.[index]}%</span></p> <div className="w-3 h-3 rounded-full" style={{ backgroundColor: bgColors[index] }}></div>
					</li>))}
				</ul>

				<div className='w-[150px] h-[150px]'>
					{data && <div data-testid="DonutChart"><Doughnut data={chartData} options={options} /></div>}
				</div>
			</div>
		</div>
	)
}

export default DonutCharts
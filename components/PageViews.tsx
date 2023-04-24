import React from 'react'
import { InfoIcon } from './icons';
import DonutCharts from './DonutCharts';

const PageViews = () => {
	const buttons: Array<{ text: string; active: boolean }> = [
		{ text: '1 Day', active: false },
		{ text: '3 Days', active: false },
		{ text: '7 Days', active: false },
		{ text: '30 Days', active: false },
		{ text: 'All Time', active: true },
		{ text: 'Custom Date', active: false },

	]
	return (
		<main>
			<div className="flex justify-between items-center">
				<div>
					<h1 className=' text-2xl text-black font-bold tracking-tightest'>Good morning, Blessing ⛅️</h1>
					<p className=' text-gray-500 text-sm mt-[10px]'>Check out your dashboard summary.</p>
				</div>

				<p className=' text-orange-300 text-sm'>View Analytics</p>
			</div>

			<div className="mt-6 flex space-x-3">
				{buttons.map((button, index) => <ButtonPill key={index} {...button} />)}
			</div>

			<div className=' mt-6 border border-gray-100 rounded-xl py-8 px-6'>
				<div className="flex justify-between items-center">
					<h6 className=' text-lg text-black font-medium tracking-tightest'>Page Views</h6>
					<InfoIcon />
				</div>
				<p className=' text-gray-500 text-sm mt-2'>All time</p>
				<h1 className=' text-5xl text-black font-bold tracking-tightest mt-6'>500</h1>
			</div>

			<div className="grid grid-cols-2 gap-4 mt-6">
				<DonutCharts title="Top Locations" />
				<DonutCharts title="Top Referral source" />
			</div>
		</main>
	)
}

const ButtonPill = ({ text, active = false }: { text: string; active: boolean }) => {
	return (
		<button className={`px-4 py-3 text-sm rounded-[100px] border ${active ? 'bg-orange-100 text-orange-300 border-orange-300' : 'border-gray-100 text-gray-500'}`} >
			{text}
		</button>
	)
}
export default PageViews
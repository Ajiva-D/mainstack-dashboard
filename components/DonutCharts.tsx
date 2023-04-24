import React from 'react'

interface TitleProps {
	title: string;
}
const DonutCharts: React.FC<TitleProps> = ({ title }) => {
	return (
		<div className='border border-gray-100 rounded-xl p-6'>
			<div className="flex justify-between items-center">
				<h1 className=' text-lg text-black font-medium tracking-tightest'>{title}</h1>
				<p className=' text-orange-300 text-sm'>View full reports</p>
			</div>

			<ul className=' mt-[42px]'>
				<li className='flex space-x-3 items-center text-black'>
					<p>Nigeria <span className='font-medium'>50%</span></p> <div className="w-3 h-3 rounded-full bg-red-600"></div>
				</li>
			</ul>
		</div>
	)
}

export default DonutCharts
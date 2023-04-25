import Image from 'next/image'
import React, { useState } from 'react'
import { AlarmIcon, BugIcon, CameraIcon, DashboardIcon, DeleteIcon, EditIcon, FileIcon, GroupIcon, HourGlassIcon, IntegrationsIcon, LogoutIcon, MoreIcon, ReferIcon, SettingsIcon, SubscriptionsIcon, SwitchIcon } from './icons'

const Sidebar = () => {
	const [showPopup, setShowPopup] = useState<boolean>(false)
	return (
		<aside className='h-screen pt-8 relative border-r border-gray-100'>
			<div className="px-[54px] relative">
				<Image src={'/images/mainstack-logo.svg'} alt='Mainstack Logo' width={40} height={40} />
			</div>

			<ul className=' mt-10 space-y-5 text-gray-400'>
				<ListItem active text='Dashboard'><DashboardIcon /></ListItem>
				<ListItem text="Item 1" ><EditIcon /></ListItem>
				<ListItem text="Item 2" ><GroupIcon /></ListItem>
				<ListItem text="Item 3" ><HourGlassIcon /></ListItem>
			</ul>

			<ul className=' mt-8 space-y-5 text-gray-400'>
				<li className=' text-xs px-[60px]'> OTHERS 1 </li>
				<ListItem text="Item 4" ><CameraIcon /></ListItem>
				<ListItem text="Item 5" ><DeleteIcon /></ListItem>
			</ul>

			<ul className=' mt-8 space-y-5 text-gray-400'>
				<li className=' text-xs px-[60px]'> OTHERS 2 </li>
				<ListItem text="Item 6" ><SubscriptionsIcon /></ListItem>
				<ListItem text="Item 7" ><FileIcon /></ListItem>
				<ListItem text="Item 8" ><AlarmIcon /></ListItem>
			</ul>

			<div className='px-[60px] flex justify-between items-center absolute bottom-[60px] w-full' role='button' onClick={() => setShowPopup(true)}>
				<div className="flex items-center space-x-3">
					<div className="relative w-8 h-8">
						<Image src={'https://images.unsplash.com/photo-1522938974444-f12497b69347?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1409&q=80'} alt='Profile Picture' fill style={{ objectFit: "cover" }} quality={100} className='rounded-full' />
					</div>
					<p>Blessing Daniels</p>
				</div>
				<MoreIcon />
			</div>

			{showPopup && <div className='p-6 bg-white rounded-xl absolute bottom-[60px] -right-2 shadow-xl w-11/12'>
				<ul className=' mt-8 space-y-5 text-gray-400 text-sm'>
					<li className='flex items-center space-x-4'><SettingsIcon /> <p>Settings</p></li>
					<li className='flex items-center space-x-3'><IntegrationsIcon /> <p>Integrations</p></li>
					<li className='flex items-center space-x-3'><ReferIcon /> <p>Refer and Earn</p></li>
					<li className='flex items-center space-x-3'><BugIcon /> <p>Report Bug</p></li>
					<li className='flex items-center space-x-3'><SwitchIcon /> <p>Switch account</p></li>
					<li className='flex items-center space-x-3 text-orange-300' role='button' onClick={() => setShowPopup(false)}><LogoutIcon /> <p>Log out</p></li>
				</ul>
			</div>}
		</aside>
	)
}

const ListItem = ({ children, active = false, text }: { children?: React.ReactElement, active?: boolean, text: string }) => {
	return (
		<>	<li className={`${active && 'text-orange-300 border-l-2 border-orange-300'} flex items-center space-x-3 px-[60px]`}>
			{children} <span>{text}</span></li>
		</>
	)
}

export default Sidebar
import Image from 'next/image'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import PageViews from '@/components/PageViews'


export default function Home() {
	return (
		<main
			className={` min-h-screen flex font-soehne`}
		>
			<div className='fixed top-0 w-[23%]'><Sidebar /></div>

			<div className="ml-[23%] w-[77%] px-[60px]">
				<div className='fixed w-full'>
					<Navbar />
				</div>
				<section className='mt-[72px]'>
					<PageViews />
				</section>
			</div>
		</main>
	)
}

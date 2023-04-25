import Image from 'next/image'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'
import PageViews from '@/components/PageViews'


export default function Home() {
	return (
		<main
			className={` min-h-screen flex font-soehne`}
		>
			<div className='hidden md:block fixed top-0 w-[23%]'><Sidebar /></div>

			<div className="md:ml-[23%] md:w-[77%] px-8 md:px-[60px]">
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

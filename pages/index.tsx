import Image from 'next/image'
import Sidebar from '@/components/Sidebar'
import Navbar from '@/components/Navbar'


export default function Home() {
	return (
		<main
			className={` min-h-screen grid grid-cols-12 font-soehne`}
		>
			<div className="col-span-12 md:col-span-3">
				<Sidebar />
			</div>

			<div className="col-span-12 md:col-span-3 px-[60px]">
				<Navbar />
			</div>
		</main>
	)
}

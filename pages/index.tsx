import Image from 'next/image'
import Sidebar from '@/components/Sidebar'


export default function Home() {
	return (
		<main
			className={` min-h-screen grid grid-cols-12 font-soehne`}
		>
			<div className="col-span-12 md:col-span-3">
				<Sidebar />
			</div>
		</main>
	)
}

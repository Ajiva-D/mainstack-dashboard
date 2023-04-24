import Image from 'next/image'
import { Inter } from 'next/font/google'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	return (
		<main
			className={` min-h-screen grid grid-cols-12 ${inter.className}`}
		>
			<div className="col-span-12 md:col-span-3">
				<Sidebar />
			</div>
		</main>
	)
}

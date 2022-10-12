import Head from 'next/head'
import Header from '../components/Header'

if (
	typeof window !== 'undefined' &&
	process.env.NODE_ENV === 'development'
	// && /VIVID_ENABLED=true/.test(document.cookie)
) {
	import('vivid-studio').then(v => v.run())
	import('vivid-studio/style.css')
}

export default function Home() {
	return (
		<div>
			<Head>
				<title>TechWear - Your Tech Fashion</title>
				<meta
					name='description'
					content='Get Your Tech Fashion from Here - Tech Wear'
				/>
				<link rel='icon' href='/logo.png' />
			</Head>
			<Header />
		</div>
	)
}

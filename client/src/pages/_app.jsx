import { StateProvider } from '@/context/StateContext';
import reducer, { initalState } from '@/context/StateReducers';
import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
	return (
		<StateProvider initalState={initalState} reducer={reducer}>
			<Head>
				<title>Whatsapp</title>
				<link rel='shortcut icon' href='/favicon.png' />
			</Head>
			<Component {...pageProps} />
		</StateProvider>
	);
}

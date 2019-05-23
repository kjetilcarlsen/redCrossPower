import React, { useState, useEffect } from 'react';
import './App.css';

function useWindowSize() {
	const w = window,
		d = document,
		e = d.documentElement,
		g = d.getElementsByTagName('body')[0],
		x = w.innerWidth || e.clientWidth || g.clientWidth,
		y = w.innerHeight || e.clientHeight || g.clientHeight;

	return { x, y };
}

const size = {
	mobile: 480,
	tablet: 768,
	web: 1249
};

function App() {
	const [{ x, y }, setWindowSize] = useState(useWindowSize());

	useEffect(() => {
		function resizeWindow() {
			setWindowSize(useWindowSize());
		}

		window.addEventListener('resize', resizeWindow);

		return () => {
			window.removeEventListener('resize', resizeWindow);
		};
	}, [x, y]);

	function renderIframeSrc() {
		const desktopEmbedUrl =
			'https://app.powerbi.com/view?r=eyJrIjoiMjQzNzVmMjEtOGFjZi00ZDA0LWEwNDYtNjc2OWYxN2JlMzM0IiwidCI6Ijc2YTJhZTVhLTlmMDAtNGY2Yi05NWVkLTVkMzNkNzdjNGQ2MSIsImMiOjh9';
		const tabletEmbedUrl =
			'https://app.powerbi.com/view?r=eyJrIjoiMjQzNzVmMjEtOGFjZi00ZDA0LWEwNDYtNjc2OWYxN2JlMzM0IiwidCI6Ijc2YTJhZTVhLTlmMDAtNGY2Yi05NWVkLTVkMzNkNzdjNGQ2MSIsImMiOjh9';
		const mobileEmbedUrl = 'https://www.sol.no';

		if (x > size.web) {
			return desktopEmbedUrl;
		} else if (x > size.tablet && x < size.web) {
			return tabletEmbedUrl;
		} else {
			return mobileEmbedUrl;
		}
	}

	return (
		<div className='App'>
			<iframe
				title='power-bi-redcross'
				width={x}
				height={y}
				src={renderIframeSrc()}
				frameborder='0'
				allowFullScreen='true'
			/>
		</div>
	);
}

export default App;

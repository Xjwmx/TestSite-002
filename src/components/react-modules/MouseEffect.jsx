import React, { useEffect, useRef } from 'react';
import '../styles/pointer.css';

export default function MouseEffect() {
	const cursorRef = useRef();

	useEffect(() => {
		const cursor = cursorRef.current;
		const mouseMoveHandler = (e) => {
			var x = e.clientX;
			var y = e.clientY;
			cursor.style.left = x + 'px';
			cursor.style.top = y + 'px';
			console.log(x, y);
		};
		document.addEventListener('mousemove', mouseMoveHandler);

		// Clean up the event listener on component unmount
		return () => {
			document.removeEventListener('mousemove', mouseMoveHandler);
		};
	}, []);

	return (
		<div>
			<div className="cursor" ref={cursorRef}></div> {}
		</div>
	);
}
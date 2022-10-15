import { GlobalStyle } from '../../Common/globalStyle';
import { Reset } from '../../Common/globalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from '../MainPage/Homepage';

export default function App() {
	return (
		<>
			<Reset />
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Homepage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

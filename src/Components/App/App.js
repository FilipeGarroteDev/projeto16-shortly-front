import { GlobalStyle } from '../../Common/globalStyle';
import { Reset } from '../../Common/globalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from '../MainPage/Homepage';
import Signup from '../SignUp/SignUp';
import SignIn from '../SignIn/Signin';

export default function App() {
	return (
		<>
			<Reset />
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/signin" element={<SignIn />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

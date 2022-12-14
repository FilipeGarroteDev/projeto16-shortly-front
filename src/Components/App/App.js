import { GlobalStyle } from '../../Common/globalStyle';
import { Reset } from '../../Common/globalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Ranking from '../Ranking/Ranking';
import Signup from '../SignUp/SignUp';
import SignIn from '../SignIn/Signin';
import LinkPage from '../LinkPage/LinkPage';

export default function App() {
	return (
		<>
			<Reset />
			<GlobalStyle />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Ranking />} />
					<Route path="/signup" element={<Signup />} />
					<Route path="/signin" element={<SignIn />} />
					<Route path="/mylinks" element={<LinkPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

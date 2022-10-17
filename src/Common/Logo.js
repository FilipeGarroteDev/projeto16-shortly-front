import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/logo.png';

export default function Logo() {
	const navigate = useNavigate();
	return (
		<LogoStyle onClick={() => navigate('/')}>
			<h1>Shortly</h1>
			<img src={logo} alt="logo" />
		</LogoStyle>
	);
}

const LogoStyle = styled.header`
	display: flex;
	align-items: center;
	gap: 10px;
	margin-bottom: 30px;

	&:hover {
		cursor: pointer;
		filter: brightness(1.1);
		color: #929090;
	}

	h1 {
		font-size: 41px;
		font-weight: 200;
	}

	img {
		width: 64px;
		height: 64px;
	}
`;

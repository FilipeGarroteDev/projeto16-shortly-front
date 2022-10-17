import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function Topbar({ page }) {
	const navigate = useNavigate();
	const [token, setToken] = useState('');
	const [isLogged, setIsLogged] = useState(false);

	useEffect(() => {
		if (token) {
			setIsLogged(true);
		} else {
			setToken(localStorage.getItem('token'));
		}
	}, [token, setToken]);

	return (
		<TopbarWrapper isLogged={isLogged} page={page}>
			{isLogged ? (
				<>
					<div>
						<h3>Seja bem-vindo(a), Pessoa!</h3>
					</div>
					<div>
						<h4 onClick={() => navigate('/mylinks')}>Home</h4>
						<h4 onClick={() => navigate('/')}>Ranking</h4>
						<h4
							onClick={() => {
								localStorage.clear();
								setIsLogged(false);
								navigate('/');
							}}
						>
							Sair
						</h4>
					</div>
				</>
			) : (
				<div>
					<h4 onClick={() => navigate('/signin')}>Entrar</h4>
					<h4 onClick={() => navigate('/signup')}>Cadastrar-se</h4>
				</div>
			)}
		</TopbarWrapper>
	);
}

const TopbarWrapper = styled.nav`
	background-color: #ffffff;
	width: 100vw;
	height: 85px;
	padding: 0 20% 0 20%;
	display: flex;
	align-items: center;
	justify-content: ${(props) =>
		props.isLogged ? 'space-between' : 'flex-end'};
	z-index: 5;

	> div {
		display: flex;
		gap: 20px;
	}

	h3 {
		font-size: 12px;
		font-weight: 400;
		color: #5d9040;
	}

	h4 {
		font-size: 12px;
		font-weight: 400;
		color: #9c9c9c;
	}
`;

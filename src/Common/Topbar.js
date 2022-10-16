import styled from 'styled-components';

export default function Topbar({ page }) {
	const isLogged = true;

	return (
		<TopbarWrapper isLogged={isLogged} page={page}>
			{isLogged ? (
				<>
					<div>
						<h3>Seja bem-vindo(a), Pessoa!</h3>
					</div>
					<div>
						<h4>Home</h4>
						<h4>Ranking</h4>
						<h4>Sair</h4>
					</div>
				</>
			) : (
				<div>
					<h4>Entrar</h4>
					<h4>Cadastrar-se</h4>
				</div>
			)}
		</TopbarWrapper>
	);
}

const TopbarWrapper = styled.nav`
	background-color: #ffffff;
	width: 100vw;
	height: 85px;
	position: fixed;
	top: 0;
	right: 0;
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

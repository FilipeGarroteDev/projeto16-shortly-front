import styled from 'styled-components';
import Form from '../../Common/Form';
import Logo from '../../Common/Logo';
import Topbar from '../../Common/Topbar';

export default function Signup() {
	return (
		<>
			<Topbar>
				<div>
					<h3>Entrar</h3>
					<h3>Cadastrar-se</h3>
				</div>
			</Topbar>
			<Wrapper>
				<Logo />
				<Form type="signup">
					<input type="text" name="name" placeholder="Nome" />
					<input type="email" name="email" placeholder="E-mail" />
					<input type="password" name="password" placeholder="Senha" />
					<input
						type="password"
						name="confirmPassword"
						placeholder="Confirmar senha"
					/>
				</Form>
			</Wrapper>
		</>
	);
}

const Wrapper = styled.main`
	height: 100%;
	width: 100%;
	padding-top: 85px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

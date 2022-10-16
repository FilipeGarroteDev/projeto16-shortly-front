import styled from 'styled-components';
import Form from '../../Common/Form';
import Logo from '../../Common/Logo';
import Topbar from '../../Common/Topbar';

export default function SignIn() {
	return (
		<>
			<Topbar/>
			<Wrapper>
				<Logo />
				<Form type="signin">
					<input type="email" name="email" placeholder="E-mail" />
					<input type="password" name="password" placeholder="Senha" />
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

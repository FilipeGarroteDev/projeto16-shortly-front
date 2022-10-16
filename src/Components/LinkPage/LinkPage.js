import styled from 'styled-components';
import Logo from '../../Common/Logo';
import Topbar from '../../Common/Topbar';

export default function LinkPage() {
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
				<form>
					<input type="url" name="url" placeholder="Links que cabem no bolso" />
					<button>Encurtar link</button>
				</form>
				<Link />
				<Link />
				<Link />
				<Link />
				<Link />
				<Link />
			</Wrapper>
		</>
	);
}

function Link() {
	return (
		<LinkStyle>
			<div>
				<span>https://google.com.br</span>
				<span>e43215Af</span>
				<span>Quantidade de visitantes: 271</span>
			</div>
			<div>
				<ion-icon name="trash-sharp"></ion-icon>
			</div>
		</LinkStyle>
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

	form {
		width: 60%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 50px;

		input {
			width: 75%;
			height: 40px;
			border: 1px solid #eff7ea;
			border-radius: 12px;
			box-shadow: 0 4px 24px rgba(120, 177, 89, 0.25);
			padding: 20px;
		}

		button {
			width: 140px;
			height: 40px;
			background-color: #5d9040;
			border-radius: 12px;
			border: none;
			color: #ffffff;
			font-weight: 700;
			font-size: 12px;
		}
	}
`;

const LinkStyle = styled.article`
	display: flex;
	width: 60%;
	box-shadow: 0 4px 24px rgba(120, 177, 89, 0.25);
	border-radius: 12px;
	border: 1px solid #78b15940;
	overflow: hidden;
	margin-bottom: 20px;

	div:nth-of-type(1) {
		width: 87%;
		height: 40px;
		background-color: #80cc74;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 21px;
		color: #ffffff;
		font-size: 12px;
	}

	div:nth-of-type(2) {
		width: 13%;
		background-color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #ea4f4f;
		font-size: 24px;
	}
`;

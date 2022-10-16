import styled from 'styled-components';

export default function Form({ type, children }) {
	const buttonSubject = (type = 'signup' ? 'Criar Conta' : 'Entrar');

	return (
		<FormStyle>
			{children}
			<button>{buttonSubject}</button>
		</FormStyle>
	);
}

const FormStyle = styled.form`
	width: 60%;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 20px;

	input {
		width: 100%;
		padding: 21px;
		border: 1px solid #78b159;
		border-radius: 15px;
		box-shadow: 0 4px 24px rgba(120, 177, 89, 0.25);
	}

	button {
		width: 180px;
		height: 60px;
		background-color: #5d9040;
		border: none;
		border-radius: 12px;
		color: #ffffff;
		font-weight: 700;
		margin-top: 40px;
	}
`;

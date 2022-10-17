import styled from 'styled-components';

export default function Form({ type, children, ...otherProps }) {
	const buttonSubject = type === 'signup' ? 'Criar Conta' : 'Entrar';

	return (
		<FormStyle {...otherProps}>
			{children}
			<button>{buttonSubject}</button>
		</FormStyle>
	);
}

const FormStyle = styled.form`
	width: 50%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 60px;
	gap: 20px;

	input {
		width: 100%;
		height: 45px;
		padding: 21px;
		border: 1px solid #78b15940;
		border-radius: 15px;
		box-shadow: 0 4px 24px rgba(120, 177, 89, 0.25);
	}

	button {
		width: 180px;
		height: 50px;
		background-color: #5d9040;
		border: none;
		border-radius: 12px;
		color: #ffffff;
		font-weight: 700;
		margin-top: 40px;

		&:hover {
			transform: scale(1.04);
			box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
			cursor: pointer;
		}
	}
`;

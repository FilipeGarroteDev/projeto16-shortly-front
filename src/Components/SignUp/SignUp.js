import { useState } from 'react';
import styled from 'styled-components';
import Form from '../../Common/Form';
import Logo from '../../Common/Logo';
import Topbar from '../../Common/Topbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
	const [signupData, setSignupData] = useState({});
	const navigate = useNavigate();

	function handleForm(e) {
		setSignupData({
			...signupData,
			[e.target.name]: e.target.value,
		});
		console.log(signupData);
	}

	async function submitForm(e) {
		e.preventDefault();
		try {
			await axios.post(
				'https://filipegarrote-shortly-back.herokuapp.com/signup',
				signupData
			);
			alert('Usuário criado com sucesso');
			navigate('/signin');
		} catch (error) {
			console.log(error);
			alert(error.response.data);
		}
	}

	return (
		<>
			<Topbar page="signup" />
			<Wrapper>
				<Logo />
				<Form type="signup" onSubmit={submitForm}>
					<input
						type="text"
						name="name"
						placeholder="Nome"
						onChange={handleForm}
					/>
					<input
						type="email"
						name="email"
						placeholder="E-mail"
						onChange={handleForm}
					/>
					<input
						type="password"
						name="password"
						placeholder="Senha"
						onChange={handleForm}
					/>
					<input
						type="password"
						name="confirmPassword"
						placeholder="Confirmar senha"
						onChange={handleForm}
					/>
				</Form>
			</Wrapper>
		</>
	);
}

const Wrapper = styled.main`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;

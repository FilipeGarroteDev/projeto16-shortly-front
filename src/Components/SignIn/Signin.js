import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Form from '../../Common/Form';
import Logo from '../../Common/Logo';
import Topbar from '../../Common/Topbar';

export default function SignIn() {
	const [signinData, setSigninData] = useState({});
	const navigate = useNavigate();

	function handleForm(e) {
		setSigninData({
			...signinData,
			[e.target.name]: e.target.value,
		});
	}

	async function submitForm(e) {
		e.preventDefault();
		try {
			const loggedIn = await axios.post(
				'https://filipegarrote-shortly-back.herokuapp.com/signin',
				signinData
			);
			localStorage.setItem('token', loggedIn.data.token);
			navigate('/mylinks');
		} catch (error) {
			alert(error.response.data);
		}
	}

	return (
		<>
			<Topbar page="signin" />
			<Wrapper>
				<Logo />
				<Form type="signin" onSubmit={submitForm}>
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

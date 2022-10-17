import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../Common/Logo';
import Topbar from '../../Common/Topbar';

export default function LinkPage() {
	const navigate = useNavigate();
	const token = localStorage.getItem('token');
	const [linksList, setLinksList] = useState([]);
	const [newUrl, setNewUrl] = useState('');

	useEffect(() => {
		if (!token) {
			alert('Você não está logado.\nPor gentileza, refaça o login.');
			navigate('/');
		}
		async function fetchData() {
			const config = { headers: { Authorization: `Bearer ${token}` } };
			try {
				const userHistoric = await axios.get(
					'http://localhost:4000/users/me',
					config
				);
				setLinksList(userHistoric.data.shortenedUrls);
			} catch (error) {
				alert(error.response.data);
				navigate('/');
			}
		}
		fetchData();
	}, [navigate, token]);

	function handleForm(e) {
		setNewUrl({
			url: e.target.value,
		});
	}

	async function shortenUrl(e) {
		e.preventDefault();
		try {
			const config = { headers: { Authorization: `Bearer ${token}` } };
			const shortUrl = await axios.post(
				'http://localhost:4000/urls/shorten',
				newUrl,
				config
			);
			setLinksList([
				...linksList,
				{
					id: Date.now(),
					url: newUrl.url,
					shortUrl: shortUrl.data.shortUrl,
					visitCount: 0,
				},
			]);
		} catch (error) {
			alert(error.response.data);
		}
	}

	return (
		<>
			<Topbar />
			<Wrapper>
				<Logo />
				<form onSubmit={shortenUrl}>
					<input
						type="url"
						name="url"
						placeholder="Links que cabem no bolso"
						onChange={handleForm}
					/>
					<button>Encurtar link</button>
				</form>
				{linksList.map(({ id, shortUrl, url, visitCount }) => (
					<Link
						key={id}
						shortUrl={shortUrl}
						url={url}
						visitCount={visitCount}
					/>
				))}
			</Wrapper>
		</>
	);
}

function Link({ shortUrl, url, visitCount }) {
	return (
		<LinkStyle>
			<div>
				<span>{url}</span>
				<span>{shortUrl}</span>
				<span>Quantidade de visitantes: {visitCount}</span>
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

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Logo from '../../Common/Logo';
import Topbar from '../../Common/Topbar';
import Link from './Link';

export default function LinkPage() {
	const navigate = useNavigate();
	const token = localStorage.getItem('token');
	const [linksList, setLinksList] = useState([]);
	const [newUrl, setNewUrl] = useState('');

	useEffect(() => {
		if (!token) {
			alert('Você não está logado.\nPor gentileza, refaça o login.');
			navigate('/');
			return;
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
				localStorage.clear();
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
						type="text"
						name="url"
						placeholder="Links que cabem no bolso"
						onChange={handleForm}
					/>
					<button>Encurtar link</button>
				</form>
				{!linksList
					? 'LOADING...'
					: linksList.map(({ id, shortUrl, url, visitCount }) => (
							<Link
								key={id}
								id={id}
								shortUrl={shortUrl}
								token={token}
								url={url}
								visitCount={visitCount}
								setLinksList={setLinksList}
							/>
					  ))}
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

	form {
		width: 60%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 40px;
		margin-top: 60px;

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

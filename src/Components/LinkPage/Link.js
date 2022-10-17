import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

export default function Link({
	id,
	shortUrl,
	url,
	visitCount,
	token,
	setLinksList,
}) {
	const config = { headers: { Authorization: `Bearer ${token}` } };
	const [isDeleted, setIsDeleted] = useState(false);

	async function deleteLink() {
		try {
			if (!window.confirm('Você tem certeza que deseja excluir esse site?')) {
				return;
			}
			await axios.delete(
				`https://filipegarrote-shortly-back.herokuapp.com/urls/${id}`,
				config
			);
			setIsDeleted(true);
			setTimeout(async () => {
				const userHistoric = await axios.get(
					'https://filipegarrote-shortly-back.herokuapp.com/users/me',
					config
				);
				setLinksList(userHistoric.data.shortenedUrls);
			}, 500);
		} catch (error) {
			alert(error.response.data);
		}
	}

	async function goToLink() {
		try {
			await axios.get(
				`https://filipegarrote-shortly-back.herokuapp.com/urls/open/${shortUrl}`
			);
		} catch (error) {
			console.log(error.message);
			window.open(url, '_self');
			window.location.reload();
		}
	}

	return (
		<LinkStyle isDeleted={isDeleted}>
			<div onClick={goToLink}>
				<span>{url}</span>
				<span>{shortUrl}</span>
				<span>Quantidade de visitantes: {visitCount}</span>
			</div>
			<div onClick={deleteLink}>
				<ion-icon name="trash-sharp"></ion-icon>
			</div>
		</LinkStyle>
	);
}

const LinkStyle = styled.article`
	display: flex;
	width: 60%;
	min-height: 40px;
	box-shadow: 0 4px 24px rgba(120, 177, 89, 0.25);
	border-radius: 12px;
	border: 1px solid #78b15940;
	overflow: hidden;
	margin-bottom: 20px;
	opacity: ${(props) => (props.isDeleted ? '0' : '1')};
	transition: all 0.5s;

	div:nth-of-type(1) {
		width: 87%;
		min-height: 40px;
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
		min-height: 40px;
		background-color: #ffffff;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #ea4f4f;
		font-size: 24px;

		&:hover {
			cursor: pointer;
			background-color: #ffe1e1;
		}
	}
`;

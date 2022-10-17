import axios from 'axios';
import styled from 'styled-components';

export default function Link({
	id,
	shortUrl,
	url,
	visitCount,
	token,
	setLinksList,
}) {
	async function deleteLink() {
		const config = { headers: { Authorization: `Bearer ${token}` } };
		try {
			if (!window.confirm('Você tem certeza que deseja excluir esse site?')) {
				return;
			}
			await axios.delete(`http://localhost:4000/urls/${id}`, config);
			const userHistoric = await axios.get(
				'http://localhost:4000/users/me',
				config
			);
			setLinksList(userHistoric.data.shortenedUrls);
		} catch (error) {
			alert(error.response.data);
		}
	}

	return (
		<LinkStyle>
			<div>
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
	}
`;

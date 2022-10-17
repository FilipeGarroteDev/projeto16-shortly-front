import styled from 'styled-components';

export default function EmptyData({ children }) {
	return <Container>{children}</Container>;
}

const Container = styled.section`
	width: 60%;
	height: 200px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;
	border: 1px solid #78b15940;
	box-shadow: 0 4px 24px rgba(120, 177, 89, 0.25);
	border-radius: 15px;
	margin-bottom: 54px;

	h3 {
		font-size: 20px;
		font-weight: 200;
		color: #857f7f;
	}
	&& {
		> ion-icon {
			font-size: 35px;
			font-weight: 200;
			color: #b8b2b2;
		}
	}
`;

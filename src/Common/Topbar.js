import styled from 'styled-components';

export default function Topbar({ children }) {
	return <TopbarWrapper>{children}</TopbarWrapper>;
}

const TopbarWrapper = styled.header`
	background-color: #ffffff;
	width: 100vw;
	height: 85px;
	position: fixed;
	top: 0;
	right: 0;
	padding: 0 15% 0 15%;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	z-index: 5;

	> div {
		display: flex;
		gap: 20px;
	}

	h3 {
		font-size: 14px;
		font-weight: 400;
	}
`;

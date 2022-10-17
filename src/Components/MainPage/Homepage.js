import styled from 'styled-components';
import Logo from '../../Common/Logo.js';
import Topbar from '../../Common/Topbar.js';

export default function Homepage() {
	return (
		<>
			<Topbar/>
			<Wrapper>
				<Logo />
				<div>
					<ion-icon name="trophy-sharp"></ion-icon>
					<h2>Ranking</h2>
				</div>
				<Ranking>
					<span>Robson - 32 links - 1.703.584 visualizações</span>
					<span>Robson - 32 links - 1.703.584 visualizações</span>
					<span>Robson - 32 links - 1.703.584 visualizações</span>
					<span>Robson - 32 links - 1.703.584 visualizações</span>
					<span>Robson - 32 links - 1.703.584 visualizações</span>
					<span>Robson - 32 links - 1.703.584 visualizações</span>
					<span>Robson - 32 links - 1.703.584 visualizações</span>
					<span>Robson - 32 links - 1.703.584 visualizações</span>
					<span>Robson - 32 links - 1.703.584 visualizações</span>
					<span>Robson - 32 links - 1.703.584 visualizações</span>
				</Ranking>
				<p>Crie sua conta para usar nosso serviço!</p>
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

	> div {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 30px;
	}

	ion-icon {
		font-size: 36px;
		color: #ffd233;
	}

	h2 {
		font-size: 23px;
		font-weight: 700;
	}

	p {
		font-size: 23px;
		font-weight: 700;
	}
`;

const Ranking = styled.section`
	display: flex;
	flex-direction: column;
	width: 60%;
	height: auto;
	padding: 20px 40px;
	border-top-left-radius: 25px;
	border-top-right-radius: 25px;
	box-shadow: 0 4px 20px rgba(120, 177, 89, 0.25);
	margin-bottom: 54px;

	span {
		margin-bottom: 12px;
	}
`;

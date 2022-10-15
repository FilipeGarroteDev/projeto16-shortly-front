import Logo from '../../Common/Logo';
import Topbar from '../../Common/Topbar';

export default function Signup() {
	return (
		<>
			<Topbar>
				<div>
					<h3>Entrar</h3>
					<h3>Cadastrar-se</h3>
				</div>
			</Topbar>
			<Logo />
			<Form>
				<input type="text" name="name" placeholder="Nome" />
				<input type="email" name="email" placeholder="E-mail" />
				<input type="password" name="password" placeholder="Senha" />
				<input
					type="password"
					name="confirmPassword"
					placeholder="Confirmar senha"
				/>
				<button>Criar Conta</button>
			</Form>
		</>
	);
}

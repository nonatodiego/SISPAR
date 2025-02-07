import logo from '../../assets/logo-ws.png';
import './login.module.scss';

function Login() {
    return (
        <>
            <main>
                <section>
                </section>
                <section>
                    <img src={logo} alt="" />
                    <h1><span>Boas vindas ao </span><span>Novo Portal SISPAR</span></h1>

                    <section>
                        <p>Sistema de Emissão de Boletos e Parcelamento</p>
                        <form action="">
                            <input type="email" name="email" id="email" placeholder="Email" aria-label="E-mail" />
                            <input type="password" name="password" id="password" placeholder="Senha" aria-label="Senha" />
                        </form>

                        <a href='#'>Esqueci minha senha</a>
                        <span>
                            <button>entrar</button>
                            <button>Criar conta</button>
                        </span>
                    </section>

                </section>
            </main>
        </>
    );
}

export default Login;
import logo from '../../assets/logo-ws.png'; 
import './login.module.scss';

function Login() {
    return (
        <>
            <main>
                <section id='logo'>
                    
                </section>
                <section>       
                    <img src={logo} alt="" />             
                    <h1><span>Boas vindas ao </span><span>Novo Portal SISPAR</span></h1>
                    <p>Sistema de Emissão de Boletos e Parcelamento</p>
                    <form action="">
                        <input type="email" name="email" id="email" placeholder="Email" aria-label="E-mail"/>
                        <input type="password" name="password" id="password" placeholder="Senha" aria-label="Senha"/>
                    </form>
                    <p>Esqueci minha senha</p>
                    <span>
                        <button>entrar</button>
                        <button>Criar conta</button>
                    </span>
                </section>
            </main>
        </>
    );
}

export default Login;
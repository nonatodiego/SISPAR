import logo from '../../assets/logo-ws.png';
import styles from './Login.module.scss';

function Login() {
    return (
        <>
            <main>
                <section className={styles.containerLogin}>
                </section>
                <section className={styles.containerForm}>
                    <img src={logo} alt="" />
                    <h1><span>Boas vindas ao </span><span>Novo Portal SISPAR</span></h1>

                    <section className={styles.containerFormLogin}>
                        <p>Sistema de Emissão de Boletos e Parcelamento</p>
                        <form action="">
                            <input type="email" name="email" id="email" placeholder="Email" aria-label="E-mail" />
                            <input type="password" name="password" id="password" placeholder="Senha" aria-label="Senha" />

                            <a href='#'>Esqueci minha senha</a>
                            <div className={styles.containerButtons}>
                                <button className={styles.loginButton}>Entrar</button>
                                <button className={styles.createAccountButton}>Criar conta</button>
                            </div>
                        </form>
                    </section>

                </section>
            </main>
        </>
    );
}

export default Login;
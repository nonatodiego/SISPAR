import { useNavigate } from "react-router"
import Historico from '../../assets/historico.png'
import Home from '../../assets/navbarHome.png'
import Pesquisa from '../../assets/pesquisa.png'
import Reembolso from '../../assets/reembolso.png'
import Sair from '../../assets/sair.png'
import Perfil from '../../assets/perfil.png'
import Fechar from '../../assets/imagem-fechar-header.png'
import styles from './NavBar.module.scss'

export default function NavBar() {

    const navigate = useNavigate()
    return (
        <>
            <nav className={styles.navbar}>
                <button onClick={() => {navigate("/")} }>
                    <img src={Fechar} alt="botão abrir e fechar" />
                </button>

                <section>
                    <img src={Perfil} alt="" />
                    <button onClick={()=>{navigate("/")}}><img src={Home} alt="Página inicial" /></button>
                    <button onClick={()=>{navigate("/solicitacao")}}><img src={Reembolso} alt="Solicitação de reembolso" /></button>
                    <button onClick={()=>{navigate("/reembolsos")}}><img src={Pesquisa} alt="Botão de pesquisar" /></button>
                    <button onClick={()=>{navigate("/solicitacao")}}><img src={Historico} alt="Botão de histórico" /></button>
                </section>

                <button  onClick={()=>{navigate("/")}} className={styles.buttonSair}><img src={Sair} alt="botão de sair" /></button>
            </nav>
        </>
    )
}
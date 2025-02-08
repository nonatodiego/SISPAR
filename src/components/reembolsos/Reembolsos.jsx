import menuIcon from '../../assets/imagem-fechar-header.png';
import profile from '../../assets/profile.png';
import btnHome from '../../assets/btn-home.png';
import btnPesquisa from '../../assets/btn-pesquisa.png';
import btnReembolso from '../../assets/btn-reembolso.png';
import btnHistorico from '../../assets/btn-historico.png';
import btnSair from '../../assets/btn-sair.png';    
import styles from './Reembolso.module.scss';


function reembolsos() {
    return (
        <>
            <header>

                <div className={styles.abrirMenu}>
                    <img src={menuIcon} alt="menu icon" />
                </div>
                <nav>
                    <div className={styles.profile}>
                        <img src={profile} alt="perfil" />
                    </div>

                    <ul>
                        <li className={styles.home}><a href="#"><img src={btnHome} alt="botão de home" /></a></li>                        
                        <li className={styles.reembolso}><a href="#"><img src={btnReembolso} alt="" /></a></li>                        
                        <li className={styles.pesquisa}><a href="#"><img src={btnPesquisa} alt="" /></a></li>                        
                        <li className={styles.historico}><a href="#"><img src={btnHistorico} alt="" /></a></li>  
                    </ul>
                </nav>
                <div className={styles.btnSair}>
                    <img src={btnSair} alt="botão de sair" />
                </div>

            </header>
        </>
    );
} 

export default reembolsos;
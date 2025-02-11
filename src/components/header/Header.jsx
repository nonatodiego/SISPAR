import styles from './header.module.scss';
import menuIcon from '../../assets/menuIcon.png'
import profileIcon from '../../assets/profileIcon.png'
import homeIcon from '../../assets/homeIcon.png'
import reembolsosIcon from '../../assets/reembolsosIcon.png'
import pesquisaIcon from '../../assets/pesquisaIcon.png'
import historicoIcon from '../../assets/historicoIcon.png'
import sairIcon from '../../assets/sairIcon.png'


export default function Header() {

    return (
        <header className={styles.header}>
            <div className={styles.iconMenu}>
                <img src={menuIcon} alt="" />
            </div>
            <nav>
                <ul>
                    <li>
                        <img src={profileIcon} alt="Icone de perfil" />
                    </li>
                    <li>
                        <img src={homeIcon} alt="Icone de Home" />
                    </li>
                    <li>
                        <img src={reembolsosIcon} alt="Icone de Reembolso" />
                    </li>
                    <li>
                        <img src={pesquisaIcon} alt="Icone de Pesquisa" />
                    </li>
                    <li>
                        <img src={historicoIcon} alt="Icone de Histórico" />
                    </li>

                </ul>
            </nav>
            <div className={styles.iconSair}>
                <img src={sairIcon} alt="" />
            </div>


        </header>
    )
}
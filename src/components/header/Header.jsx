import { useState } from "react";
import styles from './header.module.scss';
import menuIcon from '../../assets/menuIcon.png'
import profileIcon from '../../assets/profileIcon.png'
import homeIcon from '../../assets/homeIcon.png'
import reembolsosIcon from '../../assets/reembolsosIcon.png'
import pesquisaIcon from '../../assets/pesquisaIcon.png'
import historicoIcon from '../../assets/historicoIcon.png'
import sairIcon from '../../assets/sairIcon.png'


export default function Header() {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <header className={`${styles.header} ${isExpanded ? styles.expanded : ""}`}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}>

            <div className={styles.iconMenu}>
                <img src={menuIcon} alt="" />
            </div>
                
            <nav>
                <ul>
                    <li>
                        <span className={`${styles.navIcons} ${styles.perfilIcon}`}>
                            <img src={profileIcon} alt="Icone de perfil" />
                        </span>
                        {isExpanded && <span>Perfil</span>}
                    </li>
                    <li>
                        <span  className={styles.navIcons}>
                            <img src={homeIcon} alt="Icone de Home" />
                        </span>
                        {isExpanded && <span>Início</span>}
                    </li>
                    <li>
                        <span className={styles.navIcons}>
                            <img src={reembolsosIcon} alt="Icone de Reembolso" />
                        </span>
                        {isExpanded && <span>Reembolsos</span>}
                    </li>
                    <li>
                        <span className={styles.navIcons}>
                            <img src={pesquisaIcon} alt="Icone de Pesquisa" />
                        </span>
                        {isExpanded && <span>Análises</span>}
                    </li>
                    <li>
                        <span className={styles.navIcons}>
                            <img src={historicoIcon} alt="Icone de Histórico" />
                        </span>
                        {isExpanded && <span>Histórico</span>}
                    </li>
                </ul>
            </nav>
            <div className={styles.iconSair}>
                <img src={sairIcon} alt="" />
            </div>
        </header>
    )
}

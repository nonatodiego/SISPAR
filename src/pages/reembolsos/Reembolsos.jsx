import styles from "./Reembolsos.module.scss";
// importa das Imagens
import Home from "../../assets/iconHome.png";
import Seta from '../../assets/iconSeta.png';
import Analise from '../../assets/iconAnalises.png';
import NumeroAprovados from '../../assets/iconAprovados.png';
import NumeroReprovados from '../../assets/iconRejeitados.png';
import Analisando from '../../assets/iconAnalisando.png';
import SolicitarHistorico from '../../assets/iconSolicitarHistorico.png';
import SolicitarReembolsos from '../../assets/iconSolicitarReembolsos.png';

export default function Reembolsos() {
    return (
      <>
        <header>
          <img src={Home} alt="" />
          <img src={Seta} alt="" />
          <p>Reembolsos</p>
        </header>
      </>
    )
  }
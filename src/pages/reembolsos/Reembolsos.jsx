import styles from "./Reembolsos.module.scss";
// importa das Imagens
import Home from "../../assets/iconHome.png";
import Seta from '../../assets/iconSeta.svg';
import Analise from '../../assets/iconAnalises.png';
import NumeroAprovados from '../../assets/iconAprovados.png';
import NumeroReprovados from '../../assets/iconRejeitados.png';
import Analisando from '../../assets/iconAnalisando.png';
import SolicitarHistorico from '../../assets/solicitarHistorico.png';
import SolicitarReembolsos from '../../assets/solicitarReembolsos.png';
import Solicitados from '../../assets/solicitados.png';

export default function Reembolsos() {
  return (
    <>
      <div className={styles.container}>
        <navbar></navbar>
        <div className={styles.conteudo}>

          <header>
            <img src={Home} alt="" />
            <img src={Seta} alt="" />
            <p>Reembolsos</p>
          </header>
          <main>
            <div className={styles.mainContainer}>
              <div className={styles.titulo}>
                <h1>Sistema de Reembolsos</h1>
                <p>Solicite novos pedidos de reembolso, visualize solicitações em análise e todo o histórico.</p>
              </div>

              <section className={styles.acoes}>
                <span>
                  <img src={SolicitarReembolsos} alt="" />
                  <p>Solicitar Reembolso</p>
                </span>
                <span>
                  <img src={Analise} alt="" />
                  <p>Verificar Análises</p>
                </span>
                <span>
                  <img src={SolicitarHistorico} alt="" />
                  <p>Histórico</p>
                </span>
              </section>

              <section className={styles.status}>
                <span>
                  <div>
                    <img src={Solicitados} alt="seta solicitados" />
                  </div>
                  <p><b>182</b>Solicitados</p>
                </span>
                <span>
                  <div id={styles.analisando}>
                    <img src={Analisando} alt="seta solicitados" />
                  </div>
                  <p><b>74</b>Em análise</p>
                </span>
                <span>
                  <div id={styles.aprovados}>
                    <img src={NumeroAprovados} alt="seta solicitados" />
                  </div>
                  <p><b>195</b>Aprovados</p>
                </span>
                <span>
                  <div id={styles.rejeitados}>
                    <img src={NumeroReprovados} alt="seta solicitados" />
                  </div>
                  <p><b>41</b>Rejeitados</p>
                </span>
              </section>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}
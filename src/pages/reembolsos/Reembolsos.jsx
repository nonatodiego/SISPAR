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
import SistemaAtualizado from '../../assets/sistema-atualizado.png';
// importando o componente NavBar
import NavBar from '../../components/navbar/NavBar.jsx';


export default function Reembolsos() {
  return (
    <>
    <div className={styles.containerReembolsos}>
      <NavBar />
      <header>
        <img src={Home} alt="" />
        <img src={Seta} alt="" />
        <p>Reembolsos</p>
      </header>
      <main className={styles.mainReembolsos}>
        <section>
          <h1>Sistema de Reembolsos</h1>
          <p>Solicite novos pedidos de reembolso, visualize solicitações em análise e todo o histórico.</p>
          <section className={styles.containerCards}>
            <article>
              <img src={SolicitarReembolsos} alt="ícone para solicitação de Reembolso" />
              <h3>Solicitar Reembolso</h3>
            </article>
            <article>
              <img src={Analise} alt="ícone para verificar análises" />
              <h3>Verificar análises</h3>
            </article>
            <article>
              <img src={SolicitarHistorico} alt="ícone para solicitar histórico" />
              <h3>Histórico</h3>
            </article>
          </section>
          <section className={styles.containerStatus}>
            <div>
              <div className={styles.containerIcon}>
                <img className={styles.solicitados} src={Solicitados} alt="" />
              </div>
              <h4>182</h4>
              <p>Solicitados</p>
            </div>
            <div>
              <div className={styles.containerIcon}>
                <img className={styles.analise} src={Analisando} alt="" />
              </div>
              <h4>74</h4>
              <p>Em Análise</p>
            </div>
            <div>
            <div className={styles.containerIcon}>
                <img className={styles.aprovados} src={NumeroAprovados} alt="" />
              </div>
              <h4>195</h4>
              <p>Aprovador</p>
            </div>
            <div>
            <div className={styles.containerIcon}>
                <img className={styles.rejeitados} src={NumeroReprovados} alt="" />
              </div>
              <h4>41</h4>
              <p>Rejeitados</p>
            </div>
          </section>

          <div className={styles.containerSistema}>
            <img src={SistemaAtualizado} alt="" />
            <p>Sistema atualizado.</p>
          </div>
        </section>
      </main>
      </div>
    </>
  )
}
// importando o componente NavBar
import NavBar from '../../components/navbar/NavBar.jsx';
import styles from "./Solicitacao.module.scss";
import Home from '../../assets/iconHome.png'
import Seta from '../../assets/iconSeta.png'

export default function Solicitacao() {
  return (
    <>
      <div className={styles.layoutSolicitacao}>
        <NavBar />
        <div className={styles.containerSolicitacao}>
          <header className={styles.headerSolicitacao}>
            <img src={Home} alt="vetor do home" />
            <img src={Seta} alt="vetor da seta" />
            <p>Reembolso</p>
            <img src={Seta} alt="vetor da seta" />
            <p>Solicitação de Reembolso</p>
          </header>
          <main className={styles.mainSolicitacao}>
            <form className={styles.formSolicitacao}>
              <div className={styles.grupo1}>
                <div className={styles.inputNome}>
                  <label htmlFor="">Nome completo</label>
                  <input type="text" />
                </div>
                <div className={styles.inputEmpresa}>
                  <label htmlFor="">Empresa</label>
                  <input type="text" />
                </div>
                <div className={styles.inputContas}>
                  <label htmlFor="">Nº Prest. Contas</label>
                  <input type="number" />
                </div>
                <div className={styles.inputMotivo}>
                  <label htmlFor="">Descrição / Motivo do Reembolso</label>
                  <textarea name="" id=""></textarea>
                </div>
              </div>
              <div className={styles.barraVertical}></div>
              <div className={styles.grupo2}>
                <div className={styles.inputData}>
                  <label htmlFor="">Data</label>
                  <input type="date" />
                </div>
                <div className="despesas">
                  <label htmlFor="">Tipos de Despesas</label>
                  <select name="" id="">
                    <option value="">Selecionar</option>
                    <option value="">Alimentação</option>
                    <option value="">Combustivel</option>
                  </select>
                </div>
              </div>
            </form>
          </main>
        </div>
      </div>
    </>
  )
}
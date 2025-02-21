// importando o componente NavBar
import NavBar from '../../components/navbar/NavBar.jsx';
import styles from "./Solicitacao.module.scss";
import Home from '../../assets/iconHome.png'
import Seta from '../../assets/iconSeta.png'
import Lixeira from '../../assets/lixeira.png'
import Motivo from '../../assets/motivo.png'

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
                    <option value="">Condução</option>
                    <option value="">Estacionamento</option>
                    <option value="">Viagem Admin.</option>
                    <option value="">Viagem Operacional</option>
                    <option value="">Eventos de representação</option>
                  </select>
                </div>

                <div className={styles.centroDeCusto}>
                  <label htmlFor="">Centro de custo</label>
                  <select name="" id="">
                    <option value=""> Selecionar</option>
                    <option value="">
                      1100109002 - FIN CONTROLES INTERNOS MTZ
                    </option>
                    <option value="">
                      1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ
                    </option>
                    <option value="">1100110101 - FIN CONTABILIDADE MTZ</option>
                  </select>
                </div>

                <div className={styles.ordem}>
                  <label htmlFor="">Ord. Int.</label>
                  <input type="number" />
                </div>
                <div className={styles.divisoes}>
                  <label htmlFor="">Div</label>
                  <input type="number" />
                </div>
                <div className={styles.pep}>
                  <label htmlFor="">PEP</label>
                  <input type="number" />
                </div>

                <div className={styles.moeda}>
                  <label htmlFor="">Moeda</label>
                  <select name="" id="">
                    <option value="">Selecionar</option>
                    <option value="">BRL</option>
                    <option value="">ARS</option>
                    <option value="">USD</option>
                  </select>
                </div>

                <div className={styles.distancia}>
                  <label htmlFor="">Dist / Km</label>
                  <input type="text" />
                </div>

                <div className={styles.valorKm}>
                  <label htmlFor="">Valor / Km</label>
                  <input type="number" />
                </div>

                <div className={styles.valorFaturado}>
                  <label htmlFor="">Valor / Faturado</label>
                  <input type="number" />
                </div>

                <div className={styles.despesas}>
                  <label htmlFor="">Despesas</label>
                  <input type="number" />
                </div>

                <div className={styles.botoes}>
                  <button className={styles.btnSalvar}>+ Salvar</button>
                  <button className={styles.btnDel}>Del</button>
                </div>
              </div>
            </form>

            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Colaborador(a)</th>
                  <th>Empresa</th>
                  <th>Nº Prest.</th>
                  <th>Data</th>
                  <th>Motivo</th>
                  <th>Tipos de despesa</th>
                  <th>Ctr. Custo</th>
                  <th>Ord. Int.</th>
                  <th>Div.</th>
                  <th>PEP</th>
                  <th>Moeda</th>
                  <th>Dist. Km</th>
                  <th>Val. Km</th>
                  <th>Val. Faturado</th>
                  <th>Despesa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><img src={Lixeira} alt="" /></td>
                  <td>Jefin</td>
                  <td>Mototaxi</td>
                  <td>24</td>
                  <td>21/02/2025</td>
                  <td><img src={Motivo} /></td>
                  <td>Alimentação</td>
                  <td>200.00</td>
                  <td>1</td>
                  <td>0</td>
                  <td>nada</td>
                  <td>BRL</td>
                  <td>20km</td>
                  <td>0.50</td>
                  <td>600.00</td>
                  <td>1500.00</td>
                </tr>
              </tbody>
            </table>
          </main>
        </div>
      </div>
    </>
  )
}
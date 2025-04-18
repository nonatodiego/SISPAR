import { useState } from 'react'; // Certifique-se de importar o useState
import NavBar from '../../components/navbar/NavBar.jsx';
import styles from "./Solicitacao.module.scss";
import Home from '../../assets/iconHome.png';
import Seta from '../../assets/iconSeta.png';
import Lixeira from '../../assets/lixeira.png';
import Motivo from '../../assets/motivo.png';

export default function Solicitacao() {
  const [colaborador, setColaborador] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [nPrestacao, setnPrestacao] = useState("");
  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState("");
  const [tipoReembolso, setTipoReembolso] = useState("");
  const [centroCusto, setCentroCusto] = useState("");
  const [ordemInterna, setOrdemInterna] = useState("");
  const [divisao, setDivisao] = useState("");
  const [pep, setPep] = useState("");
  const [moeda, setMoeda] = useState("");
  const [distanciaKm, setDistanciaKm] = useState("");
  const [valorKm, setValorKm] = useState("");
  const [valorFaturado, setValorFaturado] = useState("");
  const [despesa, setDespesa] = useState("");

  const [dadosReembolso, setDadosReembolso] = useState([]); // Estado para armazenar os dados do reembolso

  // Função para capturar os valores dos inputs e fazer o que for necessário com eles
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita o envio do formulário padrão    
    const objetoReembolso = {
      colaborador,
      empresa,
      nPrestacao,
      descricao,
      data,
      tipoReembolso,
      centroCusto,
      ordemInterna,
      divisao,
      pep,
      moeda,
      distanciaKm,
      valorKm,
      valorFaturado,
      despesa
    };
    setDadosReembolso(dadosReembolso.concat(objetoReembolso)); // Adiciona o novo reembolso ao estado
  };

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
                  <input value={colaborador} type="text" onChange={(e) => setColaborador(e.target.value)} />
                </div>
                <div className={styles.inputEmpresa}>
                  <label htmlFor="">Empresa</label>
                  <input value={empresa} type="text" onChange={(e) => setEmpresa(e.target.value)} />
                </div>
                <div className={styles.inputContas}>
                  <label htmlFor="">Nº Prest. Contas</label>
                  <input value={nPrestacao} type="number" onChange={(e) => setnPrestacao(e.target.value)} />
                </div>
                <div className={styles.inputMotivo}>
                  <label htmlFor="">Descrição / Motivo do Reembolso</label>
                  <textarea value={descricao} onChange={(e) => setDescricao(e.target.value)}></textarea>
                </div>
              </div>
              <div className={styles.barraVertical}></div>
              <div className={styles.grupo2}>
                <div className={styles.inputData}>
                  <label htmlFor="">Data</label>
                  <input value={data} type="date" onChange={(e) => setData(e.target.value)} />
                </div>
                <div className="despesas">
                  <label htmlFor="">Tipos de Despesas</label>
                  <select value={tipoReembolso} onChange={(e) => setTipoReembolso(e.target.value)}>
                    <option value="">Selecionar</option>
                    <option value="Alimentação">Alimentação</option>
                    <option value="Combustivel">Combustível</option>
                    <option value="Condução">Condução</option>
                    <option value="Estacionamento">Estacionamento</option>
                    <option value="Viagem Admin.">Viagem Admin.</option>
                    <option value="Viagem Operacional">Viagem Operacional</option>
                    <option value="Eventos de representação">Eventos de representação</option>
                  </select>
                </div>
                <div className={styles.centroDeCusto}>
                  <label htmlFor="">Centro de custo</label>
                  <select value={centroCusto} onChange={(e) => setCentroCusto(e.target.value)}>
                    <option value="">Selecionar</option>
                    <option value="1100109002">1100109002 - FIN CONTROLES INTERNOS MTZ</option>
                    <option value="1100110002">1100110002 - FIN VICE-PRESIDENCIA FINANCAS MTZ</option>
                    <option value="1100110101">1100110101 - FIN CONTABILIDADE MTZ</option>
                  </select>
                </div>
                <div className={styles.ordem}>
                  <label htmlFor="">Ord. Int.</label>
                  <input value={ordemInterna} type="number" onChange={(e) => setOrdemInterna(e.target.value)} />
                </div>
                <div className={styles.divisoes}>
                  <label htmlFor="">Div</label>
                  <input value={divisao} type="number" onChange={(e) => setDivisao(e.target.value)} />
                </div>
                <div className={styles.pep}>
                  <label htmlFor="">PEP</label>
                  <input value={pep} type="number" onChange={(e) => setPep(e.target.value)} />
                </div>
                <div className={styles.moeda}>
                  <label htmlFor="">Moeda</label>
                  <select value={moeda} onChange={(e) => setMoeda(e.target.value)}>
                    <option value="">Selecionar</option>
                    <option value="BRL">BRL</option>
                    <option value="ARS">ARS</option>
                    <option value="USD">USD</option>
                  </select>
                </div>
                <div className={styles.distancia}>
                  <label htmlFor="">Dist / Km</label>
                  <input value={distanciaKm} type="text" onChange={(e) => setDistanciaKm(e.target.value)} />
                </div>
                <div className={styles.valorKm}>
                  <label htmlFor="">Valor / Km</label>
                  <input value={valorKm} type="number" onChange={(e) => setValorKm(e.target.value)} />
                </div>
                <div className={styles.valorFaturado}>
                  <label htmlFor="">Valor / Faturado</label>
                  <input value={valorFaturado} type="number" onChange={(e) => setValorFaturado(e.target.value)} />
                </div>
                <div className={styles.despesas}>
                  <label htmlFor="">Despesas</label>
                  <input value={despesa} type="number" onChange={(e) => setDespesa(e.target.value)} />
                </div>
                <div className={styles.botoes}>
                  <button type='submit' onClick={handleSubmit} className={styles.btnSalvar}>+ Salvar</button>
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
                {dadosReembolso.map((reembolso, index) => (
                  <tr key={index}>
                    <td><img src={Lixeira} alt="" /></td>
                    <td>{reembolso.colaborador}</td>
                  </tr>))}
                <tr>
                  <td><img src={Lixeira} alt="" /></td>
                  <td>Jefin</td>
                  <td>Mototaxi</td>
                  <td>24</td>
                  <td>21/02/2025</td>
                  <td><img src={Motivo} alt="Motivo" /></td>
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
  );
}

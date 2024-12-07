let btnCadastrar = document.querySelector(".cadastrar");
let array = [];
let id = 0;
let tabela = document.querySelector(".tabela");

btnCadastrar.addEventListener("click", () => cadastrarDados());

function cadastrarDados() {
  let nome = document.querySelector("#nome").value;
  let especialidade = document.querySelector("#especialidade").value;
  let crm = document.querySelector("#crm").value;
  array.push({ nome: nome, especialidade: especialidade, crm: crm });
  gerarTabela();
}

function gerarTabela() {
  let cabecalho = `<tr>   
            <th>Nome</th>
            <th>Especialidade</th>
            <th>CRM</th>
        </tr>`;

  tabela.innerHTML = cabecalho;
  for (const element of array) {
    let tr = document.createElement("tr");
    let tdNome = document.createElement("td");
    let tdEspecialidade = document.createElement("td");
    let tdCrm = document.createElement("td");

   

    tdNome.innerText = element.nome;
    tdEspecialidade.innerText = element.especialidade;
    tdCrm.innerText = element.crm;
  

    tr.append(tdNome, tdEspecialidade, tdCrm);

    tabela.appendChild(tr);
  }
}

//As referências seguem nomes mnemônicos.
//As siglas pp se referem a popUps, em todo caso, cada popUp, possui uma descricao no formato PPDescricao ou PP_Descricao

//legenda de linha, para caso a linha nao esteja comentada
//transições entre paginas: pagAntigaToPagNova
//botao de suporte: paginaSup

//Referências das páginas(Home, User, Woker/Colaborador, Paginas para cada ação)
const homePage = document.querySelector('.HomePage');
const userPage = document.querySelector('.UserPage');
const workerPage = document.querySelector('.WorkerPage');
const cepPage = document.querySelector('.UserCep');
const listaServPage = document.querySelector('.ListaServico');
const workerStatisticPage = document.querySelector('.WorkerStatistic');
const insertAdressPage = document.querySelector('.InsertAdress');
const insertResidence = document.querySelector('.InsertResidence');
const ruaPage = document.querySelector('.UserRua');
const workerSol = document.querySelector(".WorkerSol");
const paginas = [homePage, userPage, workerPage, 
cepPage, listaServPage, 
workerStatisticPage, insertAdressPage, insertResidence, ruaPage, workerSol];





//Botões e referências da pagina da HomePage
const homeToUserPage = document.getElementById("HomeToUserPage");//Transição Home para Página de Usuário
const homeToWorkerPage = document.getElementById("HomeToWorkerPage");//Transição Home para Página de Colaborador

//Botões e referências da UserPage
const userToCepPage = document.getElementById("UserToCepPage");//Transição User para Página de pesquisa de CEP
const userToRuaPage = document.getElementById("UserToRuaPage");//Transição User para Página de pesquisa por CEP
const userToListaServPage = document.getElementById("UserToListServPage");//Transição User para Agendamento de servico
const userToHomePage = document.getElementById("UserToHome");//Botao Home da pagina User
const userSup = document.getElementById("UserSup")//Botao de suporte 
const ppUserSup = document.getElementById("ppSup_UserPage");//popup de suporte 
const closeUserSup = document.getElementById("closerUserSup");//fechar popup

//Botões e referências da WorkerPage
const workerToStatisticPage = document.getElementById("workerToStatisticPage");//Transição Worker para Página de estatistica
const workerToInsertAdress = document.getElementById("workerToInsertAdress");//Transição Worker para Página de adição de endereco
const workerToInsertResidence = document.getElementById("workerToInsertResidence");
const workerToHomePage = document.getElementById("workerToHomePage");//Botao Home da pagina Worker
const workerSup = document.getElementById("workerSup");//botao  de suporte
const ppWorkerSup = document.getElementById("ppWorkerSup");//popup de suporte
const closeWorkerSup = document.getElementById("closeWorkerSup");//fechar popup

//Botões e referências da cepPage
const cepToHomePage = document.getElementById("cepToHomePage");//Botao Home da pagina Cep
const cepSend = document.getElementById("cepSend");//Botao de envio de form
const cepSup = document.getElementById("cepSup");// botao de suporte
const ppCep = document.getElementById("ppCep");//retorno do cep pesquisado
const ppCepSup = document.getElementById("ppCepSup");//popup de suporte
const closeCepPP = document.getElementById("closeCepPP");//fechar popup
const ppCepRetorno = document.getElementById("ppCepRetorno");//fechar popup

//Botões e referências da pagina RuaPage
const ruaToHomePage = document.getElementById("RuaToHomePage");//Transição RuaPage para Home 
const userRuaSup = document.getElementById("UserRuaSup");//Botao suporte
const ppSup_UserRuaPage = document.getElementById("ppSup_UserRuaPage");//popup suporte
const closeUserRuaSup = document.getElementById("closeUserRuaSup");//fechar popup

//Botões e referências da Solicitação de servico
const agendaServToHomePage = document.getElementById("agendaServToHomePage");//Botao Home da pagina de agendamento de servicos
const botaoConfirmServ = document.getElementById("botaoConfirmServ");//Botao para confirmar serviço selecionado
const agendaServSup = document.getElementById("agendaServSup");//Botao para suporte
const closeAgendaServSup = document.getElementById("closeAgendaServSup");//fechar popup
const agendaServPP = document.getElementById("agendaServPP");//popup de suporte

//Botões e referências da Estatísticas
const statisticToHomePage = document.getElementById("statisticToHomePage");//Botao Home da pagina Statistics
const botaoFindStatistic = document.getElementById("botaoFindStatistic");
const statisticSup = document.getElementById("statisticSup");//botao de suporte 
const closePpStatistic = document.getElementById("closePpStatistic");//fechar popup
const statisticSupPP = document.getElementById("statisticSupPP");//popup de suporte
const campoContagem = document.getElementById("campoContagem");

//Botões e referências da pagina WorkerSol
const workerSolTohomePage = document.getElementById("WorkerSolToHomePage");//transição workerSol to Home
const workerToSol = document.getElementById("workerToSolicitacoes");//Transição Worker para lista de solicitaçao

//Botões e referências da Adição de endereço
const insertAdressToHomePage = document.getElementById("insertAdressToHomePage");//Botao Home da pagina de adição de endereço
const botaoInsertAdress = document.getElementById("botaoInsertAdress");//botao para adicionar endereco 
const insertAdressSup = document.getElementById("insertAdressSup");//botao de suoorte
const closePPinsertAdress = document.getElementById("closePPinsertAdress");//fechar popup
const insertAdressPP = document.getElementById("insertAdresPP");
//campos input da pagina
const ruaInsertAdress = document.getElementById("ruaInsertAdress");
const numInsertAdress = document.getElementById("numInsertAdress");
const cepInsertAdress = document.getElementById("cepInsertAdress");
const cidadeInsertAdress = document.getElementById("cidadeInsertAdress");
const estadoInsertAdress = document.getElementById("estadoInsertAdress");


//Botões e referências da adiciona residencia
const insertResidenceToHomePage = document.getElementById("insertResidenceToHomePage");//Botao Home da pagina de inserção de residência
const insertResidenceSup = document.getElementById("insertResidenceSup");//botao suporte
const closeInsertResidencePP = document.getElementById("closeInsertResidencePP");//fechar popup
const insertResidencePP = document.getElementById("insertResidencePP");
//campos input da pagina
const ruaInsertResidence = document.getElementById("ruaInsertResidence");
const numInsertResidence = document.getElementById("numInsertResidence");
const cepInsertResidence = document.getElementById("cepInsertResidence");
const cidadeInsertResidence = document.getElementById("cidadeInsertResidence");
const estadoInsertResidence = document.getElementById("estadoInsertResidence");

//showThisPage abre a pagina definida no parametro, só é possivel ter uma página aberta
function showThisPage(page){
  for (var i = 0; i < paginas.length; i++){
    if (page != paginas[i]){
      paginas[i].style.display = "none"
    }

  }
  page.style.display = "block"
}

//Função que aplica transição entre paginas
function goToThisPage(button, page){
  button.addEventListener("click", ()=>{
    showThisPage(page)
  })
}

//torna visivel o popup do parametro
function showThisPopUp(button1,button2, pp){
  button1.addEventListener("click", () =>{
    pp.style.display = "block";
  })

  button2.addEventListener('click', event=> {
    const x = event.target.classList[0]
    const y = ['close', pp]
    const z = y.some(i => i === x)
        
    if(z) {
      pp.style.display = 'none'
    }
    })
}

//torna visivel o popup do parametro
function showThisPopUp2(button1,button2, pp, pp2){
  button1.addEventListener("click", () =>{
    pp.style.display = "block";
    pp2.style.display = "block";
  })

  button2.addEventListener('click', event=> {
    const x = event.target.classList[0]
    const y = ['close', pp]
    const z = y.some(i => i === x)
        
    if(z) {
      pp.style.display = 'none'
      pp2.style.display = 'none'
    }
    })
}

//Chamadas para transição entre as paginas
goToThisPage(workerToSol, workerSol);
goToThisPage(workerSolTohomePage, homePage);

goToThisPage(ruaToHomePage, homePage)
goToThisPage(userToRuaPage, ruaPage)
showThisPopUp(userRuaSup, closeUserRuaSup ,ppSup_UserRuaPage)

goToThisPage(homeToUserPage, userPage)
goToThisPage(homeToWorkerPage, workerPage)

goToThisPage(userToCepPage, cepPage)
goToThisPage(userToListaServPage, listaServPage)
goToThisPage(userToHomePage, homePage)
showThisPopUp(userSup, closeUserSup, ppUserSup)

goToThisPage(workerToStatisticPage, workerStatisticPage)
goToThisPage(workerToInsertAdress, insertAdressPage)
goToThisPage(workerToInsertResidence, insertResidence)
goToThisPage(workerToHomePage, homePage)
showThisPopUp(workerSup, closeWorkerSup, ppWorkerSup)

goToThisPage(cepToHomePage, homePage)
showThisPopUp2(cepSup, closeCepPP, ppCepSup, ppCep)
showThisPopUp2(cepSend, closeCepPP, ppCepRetorno, ppCep)

goToThisPage(agendaServToHomePage, homePage)
showThisPopUp(agendaServSup, closeAgendaServSup, agendaServPP)

goToThisPage(statisticToHomePage, homePage)
showThisPopUp(statisticSup, closePpStatistic, statisticSupPP)

goToThisPage(insertAdressToHomePage, homePage)
showThisPopUp(insertAdressSup, closePPinsertAdress, insertAdressPP)

goToThisPage(insertResidenceToHomePage, homePage)
showThisPopUp(insertResidenceSup, closeInsertResidencePP, insertResidencePP)






class Node{
    // Nó utilizado na trie
    constructor(){
        this.val = null;
        var alfabeto = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var registro = {};
        for(let i = 0; i < alfabeto.length; i++){
            registro[alfabeto[i].toString()] = null;
        }
        this.next = registro;
}
}

class Trie{
    // Basicamente uma trie de chaves inteiras tratadas como strings, R=10
    constructor() {
        this.r = 10;
        this.root = new Node;
    }
    put(key, val){
        key = key.toString();
        this.root = this.__put(this.root, key, 0, val);
    }
    __put(r, key, d, val){
        if(r == null){
            r = new Node();}
        if(d == key.length){
            r.val = val;
            return r
        }
        var c = key[d];
        r.next[c] = this.__put(r.next[c], key, d+1, val);
        return r
    }
    get(key){
        key = key.toString();
        var x = this.__get(this.root, key, 0);
        if(x == null){return null}
        return x
    }
    __get(r, key, d){
        if(r==null){return null;}
        if(d==key.length){return r}
        var c = key[d];
        return this.__get(r.next[c], key, d+1);
    }
    delete(key){
        key = key.toString();
        this.root = this.__delete(this.root, key, 0);
    }
    __delete(r, key, d){
        if(r==null){return null}
        if(d==key.length){
            r.val = null;}
        else{
            var c = key[d];
            r.next[c] = this.__delete(r.next[c], key, d+1);}
        if(r.val != null){return r}
        for(let i = 0; i < this.r; i++){
            if(r.next[i.toString()] != null){return r}
        }
        return r
        }
    keyswithpre(pre){
        pre = pre.toString();
        var lista = [];
        this.collect(this.get(pre), pre, lista);
        return lista
    }
    collect(r, pre, q){
        if(r==null){return null}
        if(r.val != null){
            q.push(pre);
        }
        for(let i = 0; i < this.r; i++){
            this.collect(r.next[i.toString()], pre+(i.toString()), q);
        }
        }        
}

class Node2{
    // Nó utilizado na Lse
    constructor(x){
        this.x = x;
        this.next = null;
        
    }
}

class Lse{
    // Classe da Tad Lista simplismente encadeada
    constructor(){
        this.n = 0;
        this.head = null;
        this.tail = null;
    }
    new_node(x){
        return new Node2(x)
    }
    push(x){
        var u = this.new_node(x);
        u.next = this.head;
        this.head = u;
        if(this.n==0){
            this.tail = u;
        }
        this.n += 1;
        return x
    }
    pop(){
        if(this.n == 0){return null}
        var x = this.head.x;
        this.head = this.head.next;
        this.n -= 1;
        if(this.n == 0){
            this.tail = null;
        }
        return x
    }
    adicione(x){
        var u = this.new_node(x);
        if(this.n == 0){this.head = u;}
        else{
            this.tail.next = u;
        }
        this.tail = u;
        this.n += 1;
        return true
    }
    get_node(i){
        if(i == 0){return this.head}
        var u = this.head;
        for(let x = 0; x < i; x++){
            u = u.next;
        }
        return u
    }
    get(i){
        if(i < 0 || i > (this.n - 1)){
            console.log("LSE| Index inválido");
            return null
        }
        return this.get_node(i).x
    }
    set(i, x){
        if(i < 0 || i > (this.n-1)){
            console.log("LSE| Index inválido");
            return false
        }
        var u = this.get_node(i);
        var y = u.x;
        u.x = x;
        return y
    }
    add_i(i, x){
        if(i < 0 || i > (this.n)){
            console.log("LSE| Index inválido");
            return false
        }
        if(i == 0){
            this.push(x);
            return true
        }
        var u = this.head;
        for(let c = 0; c < (i-1); c++){
            u = u.next;
        }
        var w = this.new_node(x);
        w.next = u.next;
        u.next = w;
        this.n += 1;
        return true
    }
    remova(i){
        if(i < 0 || i > (this.n-1)){
            console.log("LSE| Index inválido");
            return false
        }
        if(i == 0){
            return this.pop()
        }
        var u = this.head;
        for(let c = 0; c < (i-1); c++){
            u = u.next;
        }
        var w = u.next;
        if(w == this.tail){
            this.tail = u;
        }
        u.next = w.next;
        this.n -= 1;
        return w.x
    }

    findIndex(x){
        let u = this.head;
        for (i == 0; i < this.n; i += 1 ){
            if (u.x == x) return i;
            u = u.next;
        }
        return null;
    }
}

function parseData(data){
    // Tratamento de data
    let csvData = [];
    let lbreak = data.split("\n");
    lbreak.forEach(res => {
        csvData.push(res.split(","));
    });
    return csvData
}

// Variaveis para estatística
var tot_pessoas = 0;
var tot_ceps = 0;
var tot_idade = 0;
var tot_masc = 0;

function leitura(trie){
    // Lê o array do csv e joga na trie, retorna um registro que é uma estrutura auxiliar
    var registro = {};
    var csv = parseData(localStorage.getItem("ceps"));
    csv.splice(0, 1);
    for(linha in csv){
        var linha = csv[linha];
        var lista = new Lse();
        var cep = parseInt(linha[0]);
        var estado = linha[1].trim();
        var cidade = linha[2].trim();
        var bairro = linha[3].trim();
        var rua = linha[4].trim();
        var num = parseInt(linha[5]);
        var apartamento = linha[6].trim();
        var n_moradores = parseInt(linha[7]);

        tot_pessoas += n_moradores;
        tot_ceps += 1;

        lista.adicione(cep);
        lista.adicione(estado);
        lista.adicione(cidade);
        lista.adicione(bairro);
        lista.adicione(rua);
        lista.adicione(num);
        lista.adicione(apartamento);
        lista.adicione(n_moradores);

        // Cria a estrutura contendo os moradores
        var lista_moradores = new Lse();
        var n = 8;
        for(c = 0; c < n_moradores; c++){
            var pessoa = [linha[n], linha[n+1], linha[n+2]];
            n += 3;
            var nome = pessoa[0].replace("(", "").trim();
            var gen = pessoa[1].trim();
            var idade = parseInt(pessoa[2].replace(")"));
            var morador = {"nome": nome, "genero": gen, "idade": idade}
            lista_moradores.adicione(morador);

            if(gen == "Masc"){
                tot_masc += 1;
            }
            tot_idade += idade;
        }
        lista.adicione(lista_moradores);
        trie.put(cep, lista);
        // Fim da parte relacionada a estrutura principal(trie)


        // Esta parte é relacionado a criação do registro por regioes.
        var numero = num;
        var cond1 = estado != "null";
        var cond2 = cidade != "null" && cond1;
        var cond3 = bairro != "null" && cond2;
        var cond4 = rua != "null" && cond3;
        var cond5 = numero != "null" && cond4;
  
        // Cria o caminho no dicionario até que ache uma variavel nula
        if(cond2){
            if(registro[estado] == null){
                registro[estado] = {val: null};
            }
        }
        if(cond3){
            if(registro[estado][cidade] == null){
                registro[estado][cidade] = {val: null}; 
            }
        }
        if(cond4){
            if(registro[estado][cidade][bairro] == null){
                registro[estado][cidade][bairro] = {val: null}; 
            }
        }
        if(cond5){
            if(registro[estado][cidade][bairro][rua] == null){
                registro[estado][cidade][bairro][rua] = {val: null}; 
            }
        }
  
        // Adiciona o cep no valor relacionado ao caminho(antes de achar alguma posição nula)
        if(estado == "null"){registro.val = cep;}
        else if(cidade == "null"){registro[estado].val = cep;}
        else if(bairro == "null"){registro[estado][cidade].val = cep;}
        else if(rua == "null"){registro[estado][cidade][bairro].val = cep;}
        else if(numero == "null"){registro[estado][cidade][bairro][rua].val = cep;}
        else{registro[estado][cidade][bairro][rua][numero] = {val: cep};}
    }
    return registro
}

function sol_leitura(){
    // Lê o csv de solicitacoes e joga numa Lse, retorna ela
    var csv = parseData(localStorage.getItem("solicitacoes"));
    csv.splice(0, 1);
    lista = new Lse();
    for(x in csv){
        var linha = csv[x];
        var tipo = linha[0].trim();
        var desc = linha[1].trim();
        lista.adicione([tipo, desc]);
    }
    return lista
}

// AtualizaCSV recebe um array das linhas
//Ex: [[...],[...],[...]]
function AtualizaCSV(data){
  let csvContent = "data:text/csv;charset=utf-8," 
    + data.map(e => e.join(",")).join("\n");
  var encodedUri = encodeURI(csvContent);
  window.open(encodedUri);
  var encodedUri = encodeURI(csvContent);
}


class App{
    // Este objeto é responsável pelo controle geral do html e suas interações, 
    // fazendo os devidos acessos as estruturas de dados.
    constructor(){
        console.log("Iniciando objeto");
        // Criando as estruturas princiapsi
        this.trie = new Trie;
        this.solicitacoes = sol_leitura();
        this.registro = leitura(this.trie);
        console.log(this.registro);
        console.log(this.trie);
        
        // Guardando variaveis estatisticas
        this.tot_pessoas = tot_pessoas;
        this.tot_masc = tot_masc;
        this.tot_ceps = tot_ceps;
        this.tot_idade = tot_idade;
    }

    getNumMoradores(cep){
        return this.trie.get(cep).val.get(5);
    }
    getHomemProp(cep){
        var num = this.getNumMoradores(cep);
        var lse = this.trie.get(cep).val.get(8);
        var masc = 0;
        for(c = 0; c < lse.n; c++){
            if((lse.get(c).genero) == "Masc"){masc += 1}
        }
        return masc/num
    }
    getMulherProp(cep){
        var num = this.getNumMoradores(cep);
        var lse = this.trie.get(cep).val.get(8);
        var fem = 0;
        for(c = 0; c < lse.n; c++){
            if((lse.get(c).genero) == "Fem"){fem += 1}
        }
        return fem/num
    }
    getEnderecoCep(cep){
        var lugar = this.trie.get(cep).val;
        var rua = lugar.get(4);
        return rua
    }

    // Funcoes relacionadas a tela de moradores
    getResidentes(cep){
        // retorna uma lista com os residentes de tal cep
        var lugar = this.trie.get(cep).val;
        var pessoas = lugar.get(8);
        var lista = []
        console.log(pessoas);
        for(let x = 0; x < pessoas.n; x++){
            var pessoa = pessoas.get(x);
            var item = [pessoa.nome, pessoa.genero, pessoa.idade];
            lista.push(item);
        }
        return lista
    }
    updateResidentesLis(){
        // Faz update dos elementos da tela, gerando o sistema de adição remoção e edição de moradores
        var cep = document.getElementById("inputcep").value;
        var lis = document.getElementById("lista");
        lis.innerHTML = "<h3>Lista de moradores</h3>";
        var moradores = this.getResidentes(cep);
        if(moradores.length == 0){lis.innerHTML += "Lista vazia";}
        for(let x = 0; x < moradores.length; x++){
            var pessoa = moradores[x];
            var item = document.createElement("li");
            item.setAttribute("id", x);

            var entrada1 = document.createElement("input");
            entrada1.setAttribute("placeholder", pessoa[0]);
            entrada1.setAttribute("type", "text");
            entrada1.setAttribute("onchange", "app.update("+x+", 0)");
            entrada1.setAttribute("id", x+"0");

            var entrada2 = document.createElement("input");
            entrada2.setAttribute("placeholder", pessoa[1]);
            entrada2.setAttribute("type", "text");
            entrada2.setAttribute("onchange", "app.update("+x+", 1)");
            entrada2.setAttribute("id", x+"1");

            var entrada3 = document.createElement("input");
            entrada3.setAttribute("placeholder", pessoa[2]);
            entrada3.setAttribute("type", "number");
            entrada3.setAttribute("max", 130);
            entrada3.setAttribute("min", 0);
            entrada3.setAttribute("onchange", "app.update("+x+", 2)");
            entrada3.setAttribute("id", x+"2");

            var btn = document.createElement("button");
            btn.innerHTML = "X";
            btn.setAttribute("onclick", "app.deleta("+x+", "+cep+")");

            item.appendChild(entrada1);
            item.appendChild(entrada2);
            item.appendChild(entrada3);
            item.appendChild(btn);
        
            lis.appendChild(item);
        }
    }
    deleta(nome, cep){
        // Deleta um morador
        var trie = this.trie;
        var x = trie.get(cep).val;
        var pessoas = x.get(8);
        pessoas.remova(nome);
        this.tot_pessoas -= 1;
        this.updateResidentesLis();
    }
    novo_residente(){
        // Adicionar um novo morador com valores vazios
        var cep = document.getElementById("inputcep").value;
        var x = this.trie.get(cep).val.get(8);
        var pessoa = {nome: "", genero: "", idade: ""};
        x.adicione(pessoa);
        this.tot_pessoas += 1;
        this.updateResidentesLis();
    }

    update(num, tipo){
        // Faz update dos campos de determinado morador
        var cep = document.getElementById("inputcep").value;
        var x = this.trie.get(cep).val.get(8).get(num);
        if(tipo == 0){
            var valor = document.getElementById(num+"0").value;
            x.nome = valor;
        }
        else if(tipo == 1){
            var valor = document.getElementById(num+"1").value;
            if(x.genero == "Masc" && valor == "Fem"){this.tot_masc -= 1;}
            else if(x.genero == "Fem" && valor == "Masc"){this.tot_masc += 1;}
            x.genero = valor;
        }
        else if(tipo == 2){
            var valor = document.getElementById(num+"2").value;
            if(valor >= 0 && valor <= 130){
                if(valor < x.idade){this.tot_idade -= (x.idade - valor);}
                else if(valor > x.idade){this.tot_idade += (valor - x.idade);}
                x.idade = parseInt(valor);
            }
            else{
                document.getElementById(num+"2").value = x.idade;
            }
        }
    }

    // Funcoes relacionadas a tela de solicitacoes 
    updateSolLis(){
        // Gera a lista de solicitações no html
        var lista = document.getElementById("sol_lista");
        lista.innerHTML = "<h3>Lista de solicitações</h3>";
        var solic = this.solicitacoes;
        for(let c = 0; c < solic.n; c++){
            var item = solic.get(c);
            var elem = document.createElement("li");
            elem.setAttribute("id", "sol"+c);

            var lbl = document.createElement("label");
            lbl.innerText = "Tipo: "+item[0]+" ";
            var lbl2 = document.createElement("label");
            lbl2.innerText = "Descrição: "+item[1]; 
            var parag = document.createElement("p");
            parag.innerText = "";

            var btn = document.createElement("button");
            btn.innerHTML = "X";
            btn.setAttribute("onclick", "app.delete_sol("+c+")");

            elem.appendChild(lbl);
            //elem.appendChild(parag);
            elem.appendChild(lbl2);
            elem.appendChild(btn);
            lista.appendChild(elem);

        }

    }
    delete_sol(x){
        // Apaga uma solictacao tanto no html quanto na lista
        document.getElementById("sol"+x).remove();
        this.solicitacoes.remova(x);
        this.updateSolLis();
    }
    nova_sol(){
        // Adiciona uma nova solicitacao na lista
        var tipo = document.getElementById("Tipo").value;
        var desc = document.getElementById("sol_desc").value;
        if(tipo != "" && (desc != "" && desc.length > 6)){
            if(tipo == 1){tipo = "adicionar";}
            else{tipo = "remover";}
            this.solicitacoes.adicione([tipo, desc]);
            console.log(this.solicitacoes)
        }
    }

    // Funcoes relacionadas a tela de alterar cep
    updateAlteraCep(){
        var cep = document.getElementById("alteracep").value;
        var elem = this.trie.get(cep);
        if(elem != null){
            if(elem.val != null){
                elem = elem.val;
                var estado = elem.get(1);
                var cidade = elem.get(2);
                var bairro = elem.get(3);
                var rua = elem.get(4);
                var num = elem.get(5);
            }
        }
        else{
            var estado, bairro, cidade, rua, num = "Inexistente";
        }
        document.getElementById("alteraEstado").value = estado;
        document.getElementById("alteraCidade").value = cidade;
        document.getElementById("alteraBairro").value = bairro;
        document.getElementById("alteraRua").value = rua;
        document.getElementById("alteraNumero").value = num;
    }
    deletaCep(){
        // Deleta um cep no html e na trie
        var cep = document.getElementById("alteracep").value;
        this.remover_aux();
        var lis = this.trie.get(cep);
        if(lis != null){
            lis = lis.val;
            this.tot_pessoas -= lis.get(7);
            this.tot_ceps -= 1;
            var pessoas = lis.get(8);
            for(let c = 0; c < pessoas.n; c++){
                var pessoa = pessoas.get(c);
                this.tot_idade -= pessoa.idade;
                if(pessoa.genero == "Masc"){this.tot_masc -= 1;}
            }
        }
        this.trie.delete(cep);
        console.log("cep deletado");
        this.updateAlteraCep();
    }
    adicionaCep(){
        // Adiciona um cep no html e na trie
        var cep = document.getElementById("alteracep").value;
        if(this.trie.get(cep) == null){
            var lista = new Lse();
            lista.adicione(cep);
            for(let c = 0; c <= 5; c++){
                lista.adicione(null);
            }
            lista.adicione(0);
            lista.adicione(new Lse());
            this.trie.put(cep, lista);
            console.log("Cep adicionado");
            this.tot_ceps += 1;
            this.updateAlteraCep();
        }
        else{console.log("Cep ja existente");}
    }
    updateCep(item){
        // Atualiza valores relacionados a um cep
        var cep = document.getElementById("alteracep").value;
        var lis = this.trie.get(cep).val;
        if(item == 0){
            lis.set(1, document.getElementById("alteraEstado").value);
        }
        else if(item == 1){
            lis.set(2, document.getElementById("alteraCidade").value);
        }
        else if(item == 2){
            lis.set(3, document.getElementById("alteraBairro").value);
        }
        else if(item == 3){
            lis.set(4, document.getElementById("alteraRua").value);
        }
        else if(item == 4){
            lis.set(5, document.getElementById("alteraNumero").value);
        }
    }

    // Funcoes para busca de rua por cep
    buscaRua(){
        // Retorna a localizacao para o html dado o cep
        var cep = document.getElementById("ruaCepbusca").value;
        var lugar = this.trie.get(cep);
        if(lugar == null){
            document.getElementById("endereco").innerHTML = " Inválido ou inexistente";
        }
        else{
            lugar = lugar.val
            document.getElementById("endereco").innerHTML = lugar.get(4)+" "+lugar.get(5)+
            ", "+lugar.get(3)+", "+lugar.get(2)+"|"+lugar.get(1);
        }
    }

    // Funções relacionadas as estatisticas
    estatisticaBase(){
        // Responsavel por atualizar as estatisticas basicas do sistema
        document.getElementById("estatisticaTotCeps").innerHTML = " " + this.tot_ceps;
        document.getElementById("estatisticaTotMoradores").innerHTML = " " + this.tot_pessoas;
        document.getElementById("estatisticaIdadeMedia").innerHTML = " " + Math.round(this.tot_idade/this.tot_pessoas)+" anos";
        document.getElementById("estatisticaPropMascFem").innerHTML = " " + Math.round((this.tot_masc/this.tot_pessoas)*100)
        +"% por "+Math.round(((this.tot_pessoas - this.tot_masc)/this.tot_pessoas)*100)+"%";
    }

    // Funções relacionadas a estrutura auxiliar(this.registo)
    busca_chave(reg, chave){
        let item = "";
        for(item in reg){
          if(item != "val"){
            if(item == chave){return reg[item]}
            if(reg[item] != null){
              var x = this.busca_chave(reg[item], chave)
              if(x != null){return x}
          }
        }
      }
      return null
    }
    
    
    busca(){
        var rua = (document.getElementById("rua")).value
        var estado = document.getElementById("estado").value
        var num = parseInt(document.getElementById("num").value)
        var cidade = document.getElementById("city").value
        var cep = this.busca_cep(this.registro, estado, cidade, null, rua, num);
        console.log("O cep é", cep);
        document.getElementById('cep').innerHTML = cep;
    }
  
    busca_cep(registro, estado, cidade, bairro, rua, numero){
        // Busca um cep passados dados regionais, a rua é obrigatoria
        if(cidade.trim() == ""){cidade = null;}
        if(estado.trim() == ""){estado = null;}
        if(isNaN(numero)){numero = null;}
        console.log("Buscando....")
        var atual = registro;
        if(estado != null){
            atual = this.busca_chave(atual, estado);
        }
        if(cidade != null){
            atual = this.busca_chave(atual, cidade);
        }
        if(bairro != null){
            atual = this.busca_chave(atual, bairro);
        }
        atual = this.busca_chave(atual, rua);
        if(numero != null){
            numero = parseInt(numero);
            console.log(atual[numero].val);
            return atual[numero].val
            }
        else{
            return atual.val
        }
        
    }
    add_aux(){
        // Adiciona um cep na estrutura auxiliar
        var cep = document.getElementById("alteracep").value;
        var lis = this.trie.get(cep).val;
        var estado = lis.get(1);
        var cidade = lis.get(2);
        var bairro = lis.get(3);
        var rua = lis.get(4);
        var num = lis.get(5);
        
        if(this.registro[estado] == null){
            this.registro[estado] = {val: null};
        }
        if(this.registro[estado][cidade] == null){
            this.registro[estado][cidade] = {val: null}; 
        }
        if(this.registro[estado][cidade][bairro] == null){
            this.registro[estado][cidade][bairro] = {val: null}; 
        }
        if(this.registro[estado][cidade][bairro][rua] == null){
            this.registro[estado][cidade][bairro][rua] = {val: null}; 
        }
        this.registro[estado][cidade][bairro][rua][num] = {val: cep};
        console.log(this.registro);
    }
    remover_aux(){
        // Remove um cep da estrutura auxiliar
        var cep = document.getElementById("alteracep").value;
        var lis = this.trie.get(cep).val;
        var estado = lis.get(1);
        var cidade = lis.get(2);
        var bairro = lis.get(3);
        var rua = lis.get(4);
        var num = lis.get(5);

        this.registro[estado][cidade][bairro][rua][num] = null;
        console.log(this.registro);
    }
    atualizar_aux(){

    }
}



const mac = document.getElementById("mac");
const modelo = document.getElementById("modelo");
const moon = document.getElementById("moon");
const sun = document.getElementById("sun");
const configss = document.getElementById("configss");
const boxperfil = document.getElementById("edit-perfil")
const perfil = document.getElementById("box-perfil");
const boxclick = document.getElementById("configs-dashboard");
const boxconfigs = document.getElementById("box-configs");
const boxintegration = document.getElementById("box-integration")
const fundo = document.getElementById("fundo")
const integrationB = document.getElementById("integration");
const ferramentas = document.getElementById("ferramentas");
const notification = document.getElementById("notification");
const notify = document.getElementById("notify");
const body = document.body;
const logout = document.getElementById("logout");
document.getElementById("nomeUser").innerText = localStorage.getItem('nome');
logout.addEventListener('click', () =>{
    
    localStorage.removeItem("token");
    location.href = "login.html";
    alert("Sessão encerrada, clique em OK")
})

if(!localStorage.getItem('token')){
    alert("Você não está logado!");
    window.location.href = 'login.html';
}



// Alternância de modo escuro/claro
sun.addEventListener("click", () => {
    body.classList.toggle("show");
    document.getElementById("sun").style.display = "none";
    document.getElementById("moon").style.display = "block";
});

moon.addEventListener("click", () => {
    body.classList.toggle("show");
    document.getElementById("sun").style.display = "block";
    document.getElementById("moon").style.display = "none";
});

// Abrir/fechar configurações
configss.addEventListener("click", () => {
    ferramentas.classList.toggle("ferramentas-show");
});

boxclick.addEventListener("click", () =>{
    boxconfigs.classList.toggle("box-show");
    fundo.classList.toggle("fundo-show");
});

integration.addEventListener("click", () =>{
    boxintegration.classList.toggle("box-integration-show");
    fundo.classList.toggle("fundo-show");
})

boxperfil.addEventListener("click", () =>{
    perfil.classList.toggle("box-perfil-show");
    fundo.classList.toggle("fundo-show");
})


// Abrir/fechar notificações
notify.addEventListener("click", () => {
    notification.classList.toggle("notification-show");
    
});



// Pegando todas as sections do HTML
const sections = document.querySelectorAll("section");

// Pegando todos os itens do menu dentro do nav
const menuItems = document.querySelectorAll("nav ul li");

// Alterar de seção conforme o item clicado
menuItems.forEach(item => {

    item.addEventListener("click", () => {
        /*
            Pegando o ID do item clicado e convertendo
            para o ID da seção correspondente.
        */
        const target = item.id
            .replace("home", "sessao-primary")
            .replace("carro", "sessao-carros")
            .replace("equipamentos", "sessao-equipamentos")
            .replace("boxlote", "lote-box")
            .replace("veiculos", "sessao-veiculos")
            .replace("faqs", "sessao-faqs")
            .replace("services", "sessao-services");

        // Esconde todas as seções
        sections.forEach(sec => sec.style.display = "none");

        // Mostra somente a seção correspondente
        document.getElementById(target).style.display = "block";
    });

});

// Executando código após carregar o HTML

document.addEventListener("DOMContentLoaded", () => {

    const itens = document.querySelectorAll("nav li");

    // Adiciona evento de clique para alterar active
    itens.forEach(item => {

        item.addEventListener("click", () => {

            // Remove active de todos os itens
            itens.forEach(i => i.classList.remove("active"));

            // Adiciona active no item clicado
            item.classList.add("active");
        });

    });

    // Home começa selecionado
    document.getElementById("home").classList.add("active");

});
//Pegue o formulario formEquipamentos e execute essa funcao ao clicar em submit!
//function (e){}

//PASSO 1: Pegue o ID do formulario criado e atribua um evento do tipo submit para executar uma função.

//PASSO 2: Aplique a função para impedir que o formulario recarregue. Ex(preventdefault)

//PASSO 3: crie as variaveis e pegue os inputs do formulario!

//PASSO 4: Crie objetos e passe para as Propiedade guardar o valor das variaveis do input

/*Passo 5: Crie uma Lista(LocalStorage), transforme os texto dessa lista em Array/Objeto
           Caso essa lista não exista, retorne uma array vazia.
           Adicione um novo equipamento com push
           salve novamente em localstorage e transforme as array em texto.
           salve a tabela.
           limpe o formulario.
*/

/* Passo 6: Adicione um evento para que o javascript espere o doc html carregar!
            Crie a função carregarTabela (essa funçao envolve o ID da tabela!):
                Essa função precisará:
                    pegar o id dessa tabela e o tbody
                    carregar a lista em formato json
                    limpar o doc html
                    percorre cada item da array e adicionar index.
                    criar a tabela <tr> <td> e passar os valores que irá receber.
                    carregue a tabela.
                    reseta a tabela.

*/

/* Passo 7: Desenvolva a função remover!
            Crie a função remover e passe o i(de indice)
            carregue a lista em formato json.
            chame a propriedade split e passe a sintaxe correta.
            salve em formato stringify
            carregue a tabela novamente.
*/



document.getElementById("formVehicles").addEventListener("submit", function(e){
    e.preventDefault();

    //variaveis da tabela veiculos
    let veiculo = document.getElementById("carro").value;
    let date = document.getElementById("datee").value;
    let observ = document.getElementById("observ").value;
    let user = document.getElementById("user").value;
    let valor = document.getElementById("valor").value;


    let vehicles = {
        vehicles: veiculo,
        date: date,
        observ: observ,
        user: user,
        valor: valor,
    }
    
    let listaVehicles = JSON.parse(localStorage.getItem("veiculos")) || [];
    listaVehicles.push(vehicles);
    localStorage.setItem("veiculos", JSON.stringify(listaVehicles));
    tabelaCar();
    atualizarTabela();
    document.getElementById("formVehicles").reset();
})

document.getElementById("formEquipamentosLote").addEventListener("submit", function(e){
    e.preventDefault();

    let box = document.getElementById("box").value;
    let modelbox = document.getElementById("modelbox").value;
    let quantimodel = document.getElementById("quantimodel").value;
    let boxentrada = document.getElementById("boxentrada").value;
    let regiaobox = document.getElementById("regiaobox").value;
    let usuario = localStorage.getItem("nome");

    let boxlote = {
        boxlote: box,
        modelbox: modelbox,
        quantimodel: quantimodel,
        boxentrada: boxentrada,
        regiaobox: regiaobox,
        usuario: usuario
    }

    let listaBox = JSON.parse(localStorage.getItem("lotebox")) || [];
    listaBox.push(boxlote);
    localStorage.setItem("lotebox", JSON.stringify(listaBox));
    tabelaBox();
    atualizarTabela();
    document.getElementById("formEquipamentosLote").reset();
})

document.getElementById("formEquipamentos").addEventListener("submit", function(e){
    e.preventDefault();

    let mac = document.getElementById("mac").value;
    let modelo = document.getElementById("modelo").value;
    //let user = localStorage.getItem('nome');
    let user = localStorage.getItem("nome");
    let data = document.getElementById("date").value;
    let region = document.getElementById("regiao").value;
    let desc = document.getElementById("desc").value;
   

    //Criando uma lista 
    //Localstorage é como uma caixa, getItem("equipamentos ") -> seria a etiqueta da parte de fora
    //getItem("equipamentos") - dentro do "" fica o nome da etiqueta da caixa
    //setItem coloca algo dentro dessa caixa
    //getItem abre essa gaveta para pegar algo
    //conceito para entender -> setItem("equipamentos")-> Abra a caixa, procure a gaveta chamada "equipamentos" e coloque um texto dentro dela.
    let equipamento = {
        equipamento: modelo,
        mac: mac,
        usuario: user,
        data: data,
        desc: desc,
        region: region
    }
    
    //criando variavel lista 
    /*criando variavel list!
      apos a variavel lista estamos dizendo -> pegue a lista salva no localstorage, se não existir ou estiver vazia, use uma lista vazia.
      Ex: JSON.parse(localStorage.getItem("equipamentos")) || [];
          Pegue a lista (equipamentos), salva no localstorage, ||(esta dizendo) -> se não existir ou estiver vazia, use uma lista vazia
    */

    let lista = JSON.parse(localStorage.getItem("equipamentos")) || [];
    lista.push(equipamento);
    localStorage.setItem("equipamentos", JSON.stringify(lista));

    carregarTabela();
    atualizarTabela();
    document.getElementById("formEquipamentos").reset();

})

document.addEventListener("DOMContentLoaded", () =>{
    
})


function atualizarTabela()
{
    const elemento = document.getElementById("update-time");
    const agora =  new Date();
    const data = agora.toLocaleDateString();
    const hora = agora.toLocaleTimeString();

    elemento.textContent = `Tabela atualizada em ${data} ás ${hora}`;
    

    
}
async function gerarHash(){
    const text = document.getElementById("text").value;

    const res = await fetch("http://localhost:4000/hash",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({text})
    });

    const data = await res.json();
    document.getElementById("text2").innerText = data.hash;
}

function contEQP()
{
    let lista = JSON.parse(localStorage.getItem("equipamentos")) || [];

    let categorias = { //Criando as categorias de cada equipamento
        huawei: ["HG", "HS", "HUAWEI AX2","AX2"],
        mercusys: ["ME", "MR"],
        tplink: ["TP", "EX", "IWR", "GWR"],
        multi: ["RE"],
        china: ["H2-2", "UT"],
        stavix: ["ST"],
        sirius: ["XS", "SI"],
        maxprint: ["MAX", "MAXPRINT", "3A", "2A"],
        navigator: ["NAVIGATOR", "SUMEC", "NV"]

    }

    let contagem = { //atribuilistaVehiclesndo o valor de 0 pra cada equipamento.
        huawei: 0,
        mercusys: 0,
        tplink: 0,
        multi: 0,
        china: 0,
        stavix: 0,
        sirius: 0,
        maxprint: 0,
        navigator: 0
    }

    lista.forEach(item =>{ //percorrendo cada item na minha lista
        if(!item.equipamento)//caso o item.equipamento não exista, ira retorna uma mensagem.
        {
            console.warn("Nenhum equipamento preenchido");
            return;
        }
        let modelo = item.equipamento.toUpperCase().trim();//Pegando apenas os itens com letras maiusculas.

        if(categorias.huawei.some(prefix => modelo.startsWith(prefix))) //Condição  
        {
            contagem.huawei++
        }
        else if(categorias.mercusys.some(prefix => modelo.startsWith(prefix)))
        {
            contagem.mercusys++;
        }
        else if(categorias.tplink.some(prefix => modelo.startsWith(prefix)))
        {
            contagem.tplink++;
        }
        else if(categorias.multi.some(prefix => modelo.startsWith(prefix)))
        {
            contagem.multi++;
        }
        else if(categorias.china.some(prefix => modelo.startsWith(prefix)))
        {
            contagem.china++;
        }
        else if(categorias.stavix.some(prefix => modelo.startsWith(prefix)))
        {
            contagem.stavix++;
        }

        else if(categorias.sirius.some(prefix => modelo.startsWith(prefix)))
        {
            contagem.sirius++;
        }

        else if(categorias.maxprint.some(prefix => modelo.startsWith(prefix)))
        {
            contagem.maxprint++;
        }

        else if(categorias.navigator.some(prefix => modelo.startsWith(prefix)))
        {
            contagem.navigator++
        }
    })

    document.getElementById("huawei").innerText = "#" + contagem.huawei;
    document.getElementById("mercusys").innerText = "#" + contagem.mercusys;
    document.getElementById("multi").innerText = "#" + contagem.multi;
    document.getElementById("tl").innerText = "#" + contagem.tplink;
    document.getElementById("china").innerText = "#" + contagem.china;
    document.getElementById("stavix").innerText = "#" + contagem.stavix;
    document.getElementById("sirius").innerText = "#" + contagem.sirius;
    document.getElementById("maxprint").innerText = "#" + contagem.maxprint;
    document.getElementById("navigator").innerText = "#" + contagem.navigator;
    document.getElementById("navi").innerText = "Quantidade cadastrado no sistema: " + contagem.navigator;
    document.getElementById("merc").innerText = "Quantidade cadastrado no sistema: " + contagem.mercusys;
    

}

function tabelaBox()
{
    //Selecionando a tabela equip-lote
    let boxtabela = document.querySelector("#tabela-equip-lote tbody");

    let listaBox = JSON.parse(localStorage.getItem("lotebox")) || [];


    boxtabela.innerHTML = "";

    listaBox.forEach((item, index)=>{
        boxtabela.innerHTML +=
        `
            <tr>
                <td><i class="bi bi-box"></i> ${item.boxlote}</td>
                <td><i class="bi bi-router-fill"></i> ${item.modelbox}</td>
                <td>${item.quantimodel}</td>
                <td>${item.boxentrada}</td>
                <td>${item.regiaobox}</td>
                <td>
                    <button onclick="remover(${index})"><i class="bi bi-trash-fill"></i></button>
                </td>
            </tr>
        
        `;
    });

}

function tabelaCar()
{

    let tabela1 = document.querySelector("#tabela-car tbody"); //Selecionando a tabela e o tbody para aplicar elementos.
    let listaVehicles = JSON.parse(localStorage.getItem("veiculos")) || [];
    

  

    tabela1.innerHTML = "";
      listaVehicles.forEach((item, index) =>{
        tabela1.innerHTML += `
            <tr>
                <td>${item.vehicles}</td>
                <td>${item.date}</td>
                <td>${item.user}</td>
                <td>${item.observ}</td>
                <td>R$ ${item.valor}</td>
                    <td>
                        <button onclick="remover(${index})"><i class="bi bi-trash-fill"></i></button>
                    </td>
            </tr>
        
        `;
    });

    
}

function modalButton()
{
    
}


function carregarTabela(){
    let tabela = document.querySelector("#tabela-equip tbody"); //Selecionando a tabela e o tbody para aplicar elementos.
    let lista = JSON.parse(localStorage.getItem("equipamentos")) || []; //Carregando a lista e transformando em Objeto/Array
    
    const coresPorModelo = {
        "HS8545M5": "#CB392E",
        "HG8010H": "#CB392E",
        "HG8546M": "#CB392E",
        "EG8010H": "#CB392E",
        "HS8545M": "#CB392E",
        "HG8310M": "#CB392E",
        "NAVIGATOR": "#98271fff",
        "HUAWEI AX2": "#8c0d10ff",
        "H2-2": "#0fdb5dff",
        "GWR300N": "#3f9c63ff",
        "UT-GP4483": "#3f9c63ff",
        "MAXLINK 300 2A": "#0b5dc7ff",
        "MAXLINK 300 3A": "#0b5dc7ff",
        "EX141": "#1f5fb3ff",
        "RE171": "#3685e0ff",
        "RE172": "#3685e0ff",
        "STAVIX": "#3685e0ff",
        "MR60X": "#F35D5F",
        "MR30G": "#F35D5F",
        "XSIRIUS-G410-W6": "#04306dff"
    }

    const coresRegião = {
        "SÃO PAULO": "#0fdb5dff",
        "GUARULHOS": "#06418fff",
        "FORTALEZA": "#CB392E"
    }

    

    
    tabela.innerHTML = ""; //Limpando a tabela HTML

    lista.forEach((item, index) => { //percorrendo cada item dentro da array(lista), index envia a posição do item da array para o remover
        //Acrescentando conteudos html na tabela.

        //criando variavel corModelo e atribuindo a ela a variavel coresPorModelo -> e chamando os parametros item/equipamento
        let corRegiao = coresRegião[item.region] || "#ccc";
        let corModelo = coresPorModelo[item.equipamento] || "#ccc";
        tabela.innerHTML += `
        
            <tr>
                 <td class="clickshow" style="color:${corModelo};">${item.equipamento}</td>
                    <td id="td_mac">${item.mac}</td>
                    <td id="td_user">${item.usuario}</td>
                    <td id="td_data">${item.data}</td>
                    <td id="td_region" style="color:${corRegiao};">${item.region}</td>
                    <td id="td_desc">
                        <button class="btn-view"><i class="bi bi-eye-fill"></i></button>
                        
                    </td>
                        <td>
                            <button onclick="remover(${index})"><i class="bi bi-trash-fill"></i></button>
                        </td>
                </tr>

                <tr class="desc-row" style="display: none;">
                <td colspan="7">

               <div class="desc-row">
                                <div class="title-produto">
                                    <h3>Descrição do equipamento</h3>
                                </div>

                                <div class="list-desc">
                                    <span>Equipamento: ${item.equipamento}</span>
                                    <br>
                                     <span>Usuario: ${item.usuario}</span>
                                    <br>
                                    <span>MAC/SN: ${item.mac}</span>
                                    <br>
                                    <span>Descrição: ${item.desc}</span>
                                    
                                </div>
                            </div>
                            </td>
                            </tr>
            `;
    });

    document.addEventListener("click", function (e) {

    const viewBtn = e.target.closest(".btn-view");
    if (viewBtn) {
        const tr = viewBtn.closest("tr");
        const descRow = tr.nextElementSibling;

        if (!descRow || !descRow.classList.contains("desc-row")) return;

        descRow.style.display =
            descRow.style.display === "table-row"
                ? "none"
                : "table-row";
    }

    const closeBtn = e.target.closest(".close-desc");
    if (closeBtn) {
        closeBtn.closest(".desc-row").style.display = "none";
    }
});

    atualizarTabela();
    contEQP()
}



function remover(i){ //i seria o indice do item a ser removido.
    let lista = JSON.parse(localStorage.getItem("equipamentos")) || []; //Carregando a lista 
    let listaVehicles = JSON.parse(localStorage.getItem("veiculos")) || [];
    let listaBox = JSON.parse(localStorage.getItem("lotebox")) || [];
    
    listaVehicles.splice(i, 1);
    listaBox.splice(i, 1);
    lista.splice(i, 1); //indice do item a ser removido, 1 (quantidade que sera removido),

    localStorage.setItem("equipamentos", JSON.stringify(lista)); //transformando em texto e salvando.
    localStorage.setItem("veiculos", JSON.stringify(listaVehicles));
    localStorage.setItem("lotebox", JSON.stringify(listaBox));
    carregarTabela();
    tabelaCar();
    tabelaBox();
}

carregarTabela();
tabelaCar();
tabelaBox();



  const services = [

  { id: "amazon", name: "Amazon", url: "https://www.google.com/s2/favicons?domain=amazon.com&sz=64" },

  { id: "apple", name: "Apple", url: "https://www.google.com/s2/favicons?domain=apple.com&sz=64" },
  { id: "discord", name: "Discord", url: "https://www.google.com/s2/favicons?domain=discord.com&sz=64" },
  { id: "dropbox", name: "Dropbox", url: "https://www.google.com/s2/favicons?domain=dropbox.com&sz=64" },
  { id: "facebook", name: "Facebook", url: "https://www.google.com/s2/favicons?domain=facebook.com&sz=64" },
  { id: "github", name: "GitHub", url: "https://www.google.com/s2/favicons?domain=github.com&sz=64" },
  { id: "google", name: "Google", url: "https://www.google.com/s2/favicons?domain=google.com&sz=64" },
  { id: "instagram", name: "Instagram", url: "https://www.google.com/s2/favicons?domain=instagram.com&sz=64" },
  { id: "linkedin", name: "LinkedIn", url: "https://www.google.com/s2/favicons?domain=linkedin.com&sz=64" },
  { id: "microsoft", name: "Microsoft", url: "https://www.google.com/s2/favicons?domain=microsoft.com&sz=64" },
  { id: "netflix", name: "Netflix", url: "https://www.google.com/s2/favicons?domain=netflix.com&sz=64" },
  { id: "notion", name: "Notion", url: "https://www.google.com/s2/favicons?domain=notion.so&sz=64" },
  { id: "paypal", name: "PayPal", url: "https://www.google.com/s2/favicons?domain=paypal.com&sz=64" },
  { id: "reddit", name: "Reddit", url: "https://www.google.com/s2/favicons?domain=reddit.com&sz=64" },
  { id: "slack", name: "Slack", url: "https://www.google.com/s2/favicons?domain=slack.com&sz=64" },
  { id: "spotify", name: "Spotify", url: "https://www.google.com/s2/favicons?domain=spotify.com&sz=64" },
  { id: "telegram", name: "Telegram", url: "https://www.google.com/s2/favicons?domain=telegram.org&sz=64" },
  { id: "tiktok", name: "TikTok", url: "https://www.google.com/s2/favicons?domain=tiktok.com&sz=64" },
  { id: "twitch", name: "Twitch", url: "https://www.google.com/s2/favicons?domain=twitch.tv&sz=64" },
  { id: "twitter", name: "X (Twitter)", url: "https://www.google.com/s2/favicons?domain=x.com&sz=64" },
  { id: "whatsapp", name: "WhatsApp", url: "https://www.google.com/s2/favicons?domain=whatsapp.com&sz=64" },
  { id: "youtube", name: "YouTube", url: "https://www.google.com/s2/favicons?domain=youtube.com&sz=64" },
  { id: "zoom", name: "Zoom", url: "https://www.google.com/s2/favicons?domain=zoom.us&sz=64" },

  //serviços extras
  { id: "mercadolivre", name: "Mercado Livre", url: "https://www.google.com/s2/favicons?domain=mercadolivre.com.br&sz=64" },
  { id: "nubank", name: "Nubank", url: "https://www.google.com/s2/favicons?domain=nubank.com.br&sz=64" },
  { id: "ifood", name: "iFood", url: "https://www.google.com/s2/favicons?domain=ifood.com.br&sz=64" },
  { id: "shopee", name: "Shopee", url: "https://www.google.com/s2/favicons?domain=shopee.com.br&sz=64" },
  { id: "steam", name: "Steam", url: "https://www.google.com/s2/favicons?domain=steampowered.com&sz=64" },
  { id: "epicgames", name: "Epic Games", url: "https://www.google.com/s2/favicons?domain=epicgames.com&sz=64" },
  { id: "wjinternet", name: "WJ Internet", url: "https://www.google.com/s2/favicons?domain=wjinternet.com&sz=64" },
  { id: "openai", name: "OpenAI", url: "https://www.google.com/s2/favicons?domain=openai.com&sz=64" }
]


const grid = document.getElementById("grid")
const sound = document.getElementById("alertSound")
const cards = {}

function createCards() {
  services.forEach(s => {
    const card = document.createElement("div")
    card.className = "card";
    card.innerHTML = `
      <h3>${s.name}</h3>
     <div class="status-row">
                <span class="badge">CHECKING</span>
                <i class="bi bi-bar-chart-line-fill icone"></i>
                <span class="ms"><strong class="ms-style"><i class="bi bi-bar-chart-line-fill"></i></strong></span>
            </div>
      <div class="meta">
      </div>
    `

    grid.appendChild(card)

    cards[s.id] = {
      el: card,
      badge: card.querySelector(".badge"),
      ms: card.querySelector(".ms"),
      last: card.querySelector(".last"),
      history: [],
      status: "unknown"
    }
  })
}

function checkService(service) {
    
  return new Promise((resolve) => {
    
    const start = performance.now()
    const img = new Image()
    let finished = false

    const timeout = setTimeout(() => {
      if (!finished) {
        finished = true
        resolve({ status: "offline", time: null })
      }
    }, 3000)

    img.onload = () => {
      if (finished) return
      finished = true
      clearTimeout(timeout)

      const time = Math.round(performance.now() - start)
      let status = "online"
      
      if (time > 800) status = "Instavel";


      resolve({ status, time })
    }

    img.onerror = () => {
      if (finished) return
      finished = true
      clearTimeout(timeout)
      resolve({ status: "offline", time: null })
    }

    img.src = service.url + "?t=" + Date.now()
  })
}

async function updateService(service) {
  const result = await checkService(service)
  const card = cards[service.id]


  card.status = result.status
  card.el.className = `card ${result.status}`
  card.badge.textContent = result.status.toUpperCase()

  if (result.time) {
    card.ms.textContent = `${result.time} ms`
    card.last.textContent = "now"
    card.history.push(result.time)
  } else {
    card.ms.textContent = "timeout"
    card.last.textContent = "failed"
    card.history.push(5000)
  }

  if (card.history.length > 20) card.history.shift()
}

function loop() {
  services.forEach(updateService)
}

createCards()
loop()
setInterval(loop, 5000)



function logar()
{
    const userInput = document.getElementById("user").value;
    const passInput = document.getElementById("pass").value;
    const users = {user: "admin", pass: "admin", nome: "Admin"}
    if(userInput === users.user && passInput === users.pass)
    {
        window.location.href = "index.html";
    }
    else{
        alert("Usuario não existe.")
    }
}

 fetch("https://api.ipify.org?format=json")
      .then(res => res.json())
      .then(data => {
        document.getElementById("ip").innerText = 'IP: ' +data.ip;
      })
      .catch(() => {
        document.getElementById("ip").innerText = "Não foi possivel localizar seu ip!";
      })
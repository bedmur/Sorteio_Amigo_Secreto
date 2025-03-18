let jaVerificou = false;


function adicionarAmigo() {
    let nome = document.getElementById("name").value;
    if (nome.trim() !== "") {
        let li = document.createElement("li");
        li.textContent = nome;
        document.getElementById("lista").appendChild(li);
        document.getElementById("name").value = "";

        let contador = document.getElementById("contador");
        contador.textContent = document.querySelectorAll("#lista li").length;
        document.querySelector(".erro-mensagem").style.display = "none";
    }
}

function sortearAmigo() {
    let array = document.querySelectorAll("#lista li");
    if (!jaVerificou && array.length < 3) {
        let erroMensagem = document.querySelector(".erro-mensagem");
        erroMensagem.textContent = "Digite ao menos 3 participantes!";
        erroMensagem.style.display = "block";
        return;
    }

    jaVerificou = true;


    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i].textContent, array[j].textContent] = [array[j].textContent, array[i].textContent];
    }

    let nomeSorteado = array[0].textContent;
    let sorteadoElement = document.querySelector(".sorteado");
    sorteadoElement.innerHTML = `Você tirou: `;

    let nomePessoa = document.createElement("span");
    nomePessoa.textContent = nomeSorteado;
    nomePessoa.classList.add("nome-sorteado");

    nomePessoa.style.color = "#ffffff";
    nomePessoa.style.fontFamily = "'Playfair Display', serif";
    nomePessoa.style.fontSize = "2rem";

    sorteadoElement.appendChild(nomePessoa);

    setTimeout(() => {
        sorteadoElement.querySelector('.nome-sorteado').classList.add('mostrar-nome');
        sorteadoElement.querySelector('.texto-fixo').classList.add('mostrar-mensagem');
    }, 100);


    array[0].remove();
}

function resetarTudo() {
    let confirmar = confirm("Você tem certeza que deseja resetar tudo?");
    if (confirmar) {
        document.getElementById("lista").innerHTML = "";
        document.getElementById("name").value = "";
        document.querySelector(".erro-mensagem").style.display = "none";
        document.querySelector(".sorteado").textContent = "";
        document.getElementById("contador").textContent = "0";
        jaVerificou = false;
    }
}

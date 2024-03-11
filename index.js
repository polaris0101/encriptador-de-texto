function encriptar() {
    let texto = document.getElementById("texto").value;
    let titulomensagem = document.getElementById("titulomensagem");
    let paragrafo = document.getElementById("paragrafo");
    let guaxi = document.getElementById("guaxi");
  
    let textoCifrado = texto
      .replace(/e/gi, "enter")
      .replace(/i/gi, "imes")
      .replace(/a/gi, "ai")
      .replace(/o/gi, "ober")
      .replace(/u/gi, "ufat");
  
    if (texto.length != 0) {
      document.getElementById("texto").value = textoCifrado;
      titulomensagem.textContent = "Texto encriptado com éxito";
      paragrafo.textContent = "";
      guaxi.src = "img/guaxi.jpg";
    } else {
      guaxi.src = "img/guaxi.jpg";
      titulomensagem.textContent = "Nenhuma mensagem foi encontrada";
      paragrafo.textContent = "Insira o texto que deseja encriptar e desencriptar";
    }
  }
  
  function desencriptar() {
    let texto = document.getElementById("texto").value;
    let titulomensagem = document.getElementById("titulomensagem");
    let paragrafo = document.getElementById("paragrafo");
    let guaxi = document.getElementById("guaxi");
  
    let textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    
      if (texto.length != 0) {
        document.getElementById("texto").value = textoCifrado;
        titulomensagem.textContent = "Texto desencriptado com éxito";
        paragrafo.textContent = "";
        guaxi.src = "img/guaxi.jpg";
      } else {
        guaxi.src = "img/guaxi.jpg";
        titulomensagem.textContent = "Nenhuma mensagem foi encontrada";
        paragrafo.textContent = "Insira o texto que deseja encriptar e desencriptar";
      }
  }
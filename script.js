var arraysemnada=[]
copiar=""
var ffsa=""
musico=0
var audio = new Audio("./audio.mp3");
tempo=0

audio.pause()
var tempoini=0
  setInterval(function(){
    if(tempoini == 1 ){
      tempo++
      console.log("segundos: "+tempo)
    }
    if(tempo>=170){
      tempo=0
      audio.play()
    }
  },1000)
function vibrar(){
  window.navigator.vibrate(100)
}
function tirar(texto){
  
  var com=texto.split(" ")
  console.log(com)
  tam=com.length
  tempa=-1
  final=[]
  repe=0
  palava=""
  
  for(let cont=0;cont<tam;cont ++){
    //for para legar as palavras repitidas e tirar, ela guardar tudo em uma nova array, se ten repitida tira
    
    tempa=final.indexOf(com[cont])
    if(tempa==-1){
      final.push(com[cont])
    }else{
      repe ++
    }
  }
  console.log(final)
  document.getElementById("pala-repe").innerText="número de palavra repitidas"+repe
  ffsa=final.join(" ")
  arraysemnada=String(ffsa)
  copiar=String(ffsa)
}
// codigo a baixo feito pela chat.openai.com
function encodeMessage(message) {
  //função para substituir o espaço por %20
        return message.replace(/ /g, "%20");
      }

      function sendWhatsAppMessage() {
        vibrar()
        setTimeout(function(){
          var number = prompt("Por favor, digite o número de telefone do destinatário:");
        var message = ffsa
        var encodedMessage = encodeMessage(message);
        window.open("https://wa.me/" + number + "?text=" + encodedMessage);
        },500)
        
      }

//
function rodarscript(){
  //essa função sever como gatilho, tipo, para desencadear as outras
  final76=document.getElementById("texto").value.replace(/\n/g, " ")
tirar(final76)
vibrar()
}
function mostratexto_or_alertar(qual){
  //essa função pega um valoŕ(opcao, e se for 1 mostra no html, e 2 dar um alert
  obj=document.getElementById("texto-tira")
  vibrar()
  if(qual==1){
    obj.innerText=ffsa
  }else if(qual==2){
    setTimeout(function(){
      alert(ffsa)
    },500)
    
  }
}

function music(){
  vibrar()
  if(musico==1){
    musico=0
    tempoini=0
    document.getElementById("music").innerText="Music Play"
    audio.pause()
  }else{
    musico=1
    document.getElementById("music").innerText="Music Pause"
    audio.play()
    tempoini=1
  }
}
function downloadFile(text) {
  // Cria um elemento <a> para download
  const downloadLink = document.createElement("a");

  // Define o conteúdo do arquivo
  const fileContent = encodeURIComponent(text);

  // Define o nome do arquivo
  const fileName = "meu-arquivo.txt";

  // Define a URL do arquivo
  downloadLink.setAttribute("href", `data:text/plain;charset=utf-8,${fileContent}`);


  // Define o nome do arquivo para download
  downloadLink.setAttribute("download", fileName);

  // Clica no link para iniciar o download
  downloadLink.click();
}

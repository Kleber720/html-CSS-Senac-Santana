const cenario=document.querySelector("#cenario");
const personagem=document.querySelector("#personagem");

//pegar eventos do teclado

let local=0;
document.addEventListener("keypress",(btn)=>{

    if(btn.key==="d"){
        local+=10;
        personagem.style=`transform: translate(${local}px,0px);`
    }else if(btn.key==="a"){
        local-=10;
        personagem.style=`transform: translate(${local}px,0px);`
    };
    console.log("botao: ",btn.key);
})

//pegar eventos da rolagem do mouse

window.document.addEventListener("wheel",(tela)=>{
    console.log("posicao",tela.deltaY)
})
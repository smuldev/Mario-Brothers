const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")
const fechar = document.querySelector(".fechar")

function abrirForm(){
  form.style.left = "50%"
  form.style.transform = "translateX(-50%)"
  mascara.style.visibility = "visible"
}

function esconderForm(){
  form.style.left = "-144px"
  form.style.transform = "translateX(-50%)"
  mascara.style.visibility = "hidden"
}
  











/* 
   Variaveis
     Um espaco de memoria que voce
     reserva e pode guardar o que quiser la dentro

     3 Jeitos de criar uma variavel
         - var / jeito antigo - NAO USAR
         - let -> Voce pode alterar o valor depois
         - const -> constante
*/

/*
    Funcoes
       Um trecho de codigo que so e executado 
       quando e chamado
*/
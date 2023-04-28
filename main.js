var pesquisar = document.querySelector(".botao__pesquisar");
var input = document.querySelector(".campo__escrita");
var resposta = document.querySelector(".response");

pesquisar.addEventListener("click",()=>{
    buscaEndereco(input.value);
   
})


async function buscaEndereco(cep){
    var endereco = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var enderecoConvertido = await endereco.json();
    resposta.innerHTML = `
    <h2 class="subtitulo">Resultado</h2>
            <p>CEP: ${enderecoConvertido.cep}</p>
            <p>Bairro: ${enderecoConvertido.bairro} </p>
            <p>Localidade: ${enderecoConvertido.localidade}</p>
            <p>UF: ${enderecoConvertido.uf}</p>
    
    `
    resposta.classList.add("response--ativo");
}
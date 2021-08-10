console.log("testando javascript");



function validarFormPesquisa () {
    var nome = formPesquisa.nome.value;
    var email = formPesquisa.email.value;
    var idade = formPesquisa.idade.value;
    var ocupacao = formPesquisa.ocupacao.value;

    if(nome == ""){
        alert("Campo nome é obrigatorio");
        formPesquisa.nome.focus();
        return false;
    };

    if(email == ""){
        alert("Campo email é obrigatorio");
        formPesquisa.email.focus();
        return false;
    };
    if(idade == ""){
        alert("Campo idade é obrigatorio");
        formPesquisa.idade.focus();
        return false;
    };
    if(ocupacao == ""){
        alert("Campo ocupacao é obrigatorio");
        formPesquisa.ocupacao.focus();
        return false;
    };
};
// Get info tags in HTML and transform in const
const tagField = document.querySelector(".info-placa");
const brandField = document.querySelector(".info-brand");
const modelField = document.querySelector(".info-model");
const yearField = document.querySelector(".info-year");
const chassisField = document.querySelector(".info-chassis");

// Get buttons in HTML and transform in const
const btnSearch = document.querySelector(".button-search");
const btnSend = document.querySelector(".button-send");

var tags = [
    {placa: 'ABC0001',equipamento: 'Veículo',marca: 'FORD',modelo: 'CARGO 1617',ano: 1990,chassis: 'ASDASDASD'},
    {placa: 'ABC0002',equipamento: 'Maquinário',marca: 'FIAT',modelo: 'FR-10B',ano: 1993,chassis: 'ASDASDASD'},
    {placa: 'ABC0003',equipamento: 'Maquinário',marca: 'MASSEY FERGUSON',modelo: '610',ano: 1994,chassis: 'S/N'},
]


function loadTags(){
    var tagInput = document.querySelector(".tags")
    for (let i in tags){
        var opt = document.createElement("option");
        opt.value = tags[i].placa;
        opt.text = tags[i].placa;
        tagInput.add(opt)
    }
}


function search(){
    let selectField = document.querySelector(".tags").value
    for (var c in tags){
        if(selectField === tags[c].placa){
            tagField.innerText = tags[c].placa;
            brandField.innerText = tags[c].marca ;
            modelField.innerText = tags[c].modelo;
            yearField.innerText = tags[c].ano;
            chassisField.innerText = tags[c].chassis;
            placa = tags[c].placa;
            marca = tags[c].marca;
            modelo = tags[c].modelo;
            ano = tags[c].ano;
            chassis = tags[c].chassis;
            return placa, marca, modelo, ano, chassis
        };
    };
};
function send(){
    let mechanic = document.querySelector(".mechanic").value.toUpperCase()
    let addressee = ['', '', '']
    let descriptionField = document.querySelector(".itens-description").value.toUpperCase();
    let itensList = []
    console.log(descriptionField)
    if(descriptionField !== ''){
        for(item in descriptionField.split('\n')){ //corrigir essa parte
            itensList.push(`%0D%0A ${descriptionField.split('\n')[item]}`)
        }
        if(marca === 'FORD'){
            console.log('Ok')
            addressee.push()
        }
        if(marca === 'FIAT'){
            addressee.push()
        }
        if(marca === 'MASSEY FERGUSON'){
            addressee.push()
        }
        if(marca === 'Hyster'){
            addressee.push()
        }
        if(marca === 'CATERPILLAR'){
            addressee.push()
        }
        if(marca === 'VOLVO'){
            addressee.push()
        }
        if(marca === 'RANDON'){
            addressee.push()
        }
        if(marca === 'FACCHINI'){
            addressee.push()
        }
        if(marca === 'CLARK'){
            addressee.push()
        }
        if(marca === 'HYUNDAI'){
            addressee.push()
        }
        if(marca === 'NEW HOLLAND'){
            addressee.push()
        }
        if(marca === 'SN'){
            addressee.push()
        }
        if(marca === 'MERCEDES'){
            addressee.push()
        }
        if(marca === 'TOYOTA'){
            addressee.push()
        }
        if(marca === 'YALE'){
            addressee.push()
        }
        if(marca === 'VOLKSWAGEN'){
            addressee.push()
        }
        if(marca === 'IMPLEMENTOS '){
            addressee.push()
        }
        if(marca === 'TANQUE'){
            addressee.push()
        }
        if(marca === 'DAF'){
            addressee.push()
        }
        if(marca === 'TANQUE COMBUSTIV.DIESEL 5.000L'){
            addressee.push()
        }
        if(marca === 'PALETRANS'){
            addressee.push()
        }
        window.open(
        `mailto:?bcc=${addressee}&subject=Solicitação de Cotação | ${placa} | ${marca} ${modelo} | ${ano} &body=Bom-dia!%0D%0A Solicitamos o envio de uma cotação/orçamento referente ao equipamento e peças descritos logo abaixo: %0D%0A Placa: "${placa}"%0D%0A Modelo: "${marca} ${modelo}"%0D%0A Ano: "${ano}"%0D%0A Chassis: "${chassis}"%0D%0A Solicitante: "${mechanic}"%0D%0A%0D%0ALista de itens para a cotação :${itensList} %0D%0A%0D%0A Observação: Favor descrever no orçamento a marca das peças, assim como, valores e condições de pagamento.%0D%0AQualquer dúvida, estamos à disposição.%0D%0AMuito obrigado.`
        )
    }
    else{
        alert(`Erro 404! Placa não encontrada ou lista de peças não preenchida.`)
    }
}

loadTags();
btnSearch.addEventListener('click', search);
btnSend.addEventListener('click', send);

const form = document.getElementById('agendamento');
let rows = '';
const nomes = []
const telefones = []

form.addEventListener('submit', function(e){
    e.preventDefault();  
    adicionarRow();
})

function adicionarRow(){
    const inputNome = document.getElementById('nome-cliente');
    const inputTel = document.getElementById('telefone-cliente');

    if (telefones.includes(inputTel.value)) {
        alert(`O numero: ${inputTel.value} já foi inserido.`)
    } else {

        telefones.push(inputTel.value);

    let row = '<tr>';
    row += `<td>${inputNome.value}</td>`;
    row += `<td>${inputTel.value}</td>`;
    row += `</tr>`;

    rows += row;

    const bodyTabela = document.querySelector('tbody');
    bodyTabela.innerHTML = rows;
}
    inputNome.value = '';
    inputTel.value = '';
}



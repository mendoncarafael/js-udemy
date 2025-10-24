let verify = document.getElementById('verify');

function calcularIMC() {
  return peso / (alt * alt);
}

verify.addEventListener('click', function () {
  let peso = Number(document.getElementById('peso').value);
  let alt = Number(document.getElementById('alt').value);
  const imc = peso / (alt * alt);

  let container = document.createElement('p');
  document.getElementById('res').innerHTML = '';
  document.getElementById('res').appendChild(container);

  if (!peso || !alt || peso <= 0 || peso > 350 || alt <= 0 || alt > 3) {
    container.innerHTML = `Informe valores validos`;
    container.style.color = 'red';
    return;
  } else {
    if (imc < 18.5) {
      container.innerHTML = `Seu IMC é ${imc.toFixed(2)} (abaixo do peso)`;
    } else if (imc < 25) {
      container.innerHTML = `Seu IMC é ${imc.toFixed(2)} (peso normal)`;
    } else if (imc > 30) {
      container.innerHTML = `Seu IMC é ${imc.toFixed(2)} (sobrepeso)`;
    } else if (imc > 35) {
      container.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau I)`;
    } else if (imc > 40) {
      container.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau II)`;
    } else {
      container.innerHTML = `Seu IMC é ${imc.toFixed(2)} (Obesidade grau III)`;
    }
  }
});

function calcular(){
  var txtv = document.querySelector('input#txtvel')
  var res = document.querySelector('div#res')
  res.style.textAlign = 'center'
  res.style.marginBlock = '3rem'
  res.style.font = '400 0.8rem arial'
  var vel = Number(txtv.value)
  res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel} Km/h</strong></p>`

  if (vel > 60){
    res.innerHTML += `<p>Você foi <strong>MULTADO</strong> por excesso de velocidade</p>`
  }else{
    res.innerHTML += `<p>Tenha uma ótima viagem!</p>`
  }
  res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
}
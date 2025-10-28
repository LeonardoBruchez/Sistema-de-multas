function calcular(){
  var txtv = document.querySelector('input#txtvel')
  var res = document.querySelector('div#res')
  var main = document.querySelector('main#main')
  var submit = document.querySelector('input#buttonVerify')
  var velLimit = document.querySelector('h3#velLimit')
  res.style.textAlign = 'center'
  res.style.marginBlock = '3rem'
  res.style.font = '400 0.8rem arial'
  var vel = Number(txtv.value)
  res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel} Km/h</strong></p>`

  if (vel > 60){
    res.innerHTML += `<p>Você foi <strong>MULTADO</strong> por excesso de velocidade</p>`
    res.style.font = '500 1.3rem arial'
    txtv.style.outline = '2px solid red'
    main.style.background = 'rgb(192, 89, 89)'
    document.body.style.background = 'rgba(214, 169, 169, 1)'
    main.style.border = 'none'
    submit.style.outline = '2px solid red'
    velLimit.classList.remove('displayNone')
    

  }else{
    res.innerHTML += `<p>Tenha uma ótima viagem!</p>`
    res.style.font = '500 1.3rem arial'
    txtv.style.outline = '2px solid green'
    main.style.background = 'rgba(191, 197, 190, 1)'
    document.body.style.background = 'rgba(189, 214, 169, 1)'
    main.style.border = 'none'
    submit.style.outline = '2px solid green'
    velLimit.classList.remove('displayNone')

  }
  res.innerHTML += `<p>Dirija sempre com cinto de segurança!</p>`
}
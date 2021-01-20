
// campo genero
{
  let btnsGenero = [...document.querySelectorAll('.generoBtn')];
  
  document.querySelector('.formLineGenero').addEventListener('click', el => {
    if(el.target.classList.contains('generoBtn')) {
      btnsGenero.forEach(btn => btn.classList.remove('generoBtnFocus'));
      if(el.target.classList.contains('generoBtnFocus')) {
        return el.target.classList.remove('generoBtnFocus');
      } else {
        return el.target.classList.add('generoBtnFocus');
      }
    };
  });

  document.querySelector('#digitarGenero').addEventListener('focus', el => {
      btnsGenero.forEach(btn => btn.classList.remove('generoBtnFocus'));
  });
}












// botão (+)
{
document.querySelector('.formWrapper').addEventListener('click', el => {
  if(el.target.classList.contains('formLineAddBtn')) {
    console.log(el);
    let inp = document.createElement('input');
    inp.className = 'inputNew';
    inp.setAttribute('type', 'text');
    inp.setAttribute('data-input', null);
    el.target.parentElement.firstElementChild.nextElementSibling.appendChild(inp);
  }


  if(el.target.classList.contains('assuntoUnit')) { // destaca botão assunto escolhido

    el.target.classList.toggle('assuntoEscolhido');

    let li = document.createElement('li');

    li.textContent = el.target.textContent;

    let klass = el.target.textContent.split(' ').join('');

    function especialCharMask(especialChar) {
      let nome = especialChar.normalize("NFD")
        especialChar1 = nome.replace(/[^a-zA-Zs]/g, "");
        return especialChar1;
    }

    let klassSemAcento = especialCharMask(klass);

    let listas = el.target.parentElement.parentElement.parentElement.parentElement.lastElementChild.lastElementChild;


    console.log(klassSemAcento)

    li.className = klassSemAcento;

    if(listas.children.length > 6) {
      listas.style.columns = 2;
    } else {
      listas.style.columns = 1;
    }
    
    if (el.target.classList.contains('assuntoEscolhido')) {
      listas.appendChild(li);
      console.log(1);

    } else {
      listas.querySelector('.' + klassSemAcento).remove();
      console.log(2)
    }

  }
});


}








{



  //lista ano de nascimento

  let anoContainer = document.querySelector('#anoNascimento');

  let year = new Date();

  // let idade18Anos = year.getFullYear() - 18;
  let anoAtual = year.getFullYear();
  let cemAnos = year.getFullYear() - 100;

  function createYear(num) {
    if(num === anoAtual) {return `<option value="anoNascimento-0" selected><span class="selectItem"></span></option>`};
    return `<option value="anoNascimento-${num}"><span class="selectItem">${num}</span></option>`;
  }

  console.log(anoAtual)

  let lista = '';

  for(let i = anoAtual; i >= cemAnos; i--) {
    lista += createYear(i);
  }

  anoContainer.innerHTML = lista;



}





{
  // retirar cliente da lista de optOut
  document.querySelector('#listaOptOut').addEventListener('click', el => {
    if(el.target.tagName == 'LI') {
      let text = el.target.textContent;
      let optIns = [...document.querySelector('#listaOptIn').querySelectorAll('li')];
      el.target.remove()
      optIns.find(el => {
        if(el.textContent === text) {
          el.classList.remove('assuntoEscolhido');
        }
      })
    };
  })
}






// botão whats
{
document.querySelector('#myInputAceito4').addEventListener('click', () => {
  document.querySelector('.formWhats').classList.toggle('formWhatsVisible')
})

document.querySelector('#myInputAceito5').addEventListener('click', () => {
  document.querySelector('.formWhats1').classList.toggle('formWhatsVisible')
})
}















{
  document.querySelector('#main').addEventListener('mouseover', el => {
    if(el.target.classList.contains('dropdownBtn')) {
      el.target.lastElementChild.classList.add('dropdownVisible');
    };
  });
  document.querySelector('#main').addEventListener('mouseout', el => {
    if(el.target.classList.contains('dropdownBtn')) {
      el.target.lastElementChild.classList.remove('dropdownVisible');
    };
  });
}
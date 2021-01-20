"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

// campo genero
{
  var btnsGenero = _toConsumableArray(document.querySelectorAll('.generoBtn'));

  document.querySelector('.formLineGenero').addEventListener('click', function (el) {
    if (el.target.classList.contains('generoBtn')) {
      btnsGenero.forEach(function (btn) {
        return btn.classList.remove('generoBtnFocus');
      });

      if (el.target.classList.contains('generoBtnFocus')) {
        return el.target.classList.remove('generoBtnFocus');
      } else {
        return el.target.classList.add('generoBtnFocus');
      }
    }

    ;
  });
  document.querySelector('#digitarGenero').addEventListener('focus', function (el) {
    btnsGenero.forEach(function (btn) {
      return btn.classList.remove('generoBtnFocus');
    });
  });
} // botão (+)

{
  document.querySelector('.formWrapper').addEventListener('click', function (el) {
    if (el.target.classList.contains('formLineAddBtn')) {
      console.log(el);
      var inp = document.createElement('input');
      inp.className = 'inputNew';
      inp.setAttribute('type', 'text');
      inp.setAttribute('data-input', null);
      el.target.parentElement.firstElementChild.nextElementSibling.appendChild(inp);
    }

    if (el.target.classList.contains('assuntoUnit')) {
      var especialCharMask = function especialCharMask(especialChar) {
        var nome = especialChar.normalize("NFD");
        especialChar1 = nome.replace(/[^a-zA-Zs]/g, "");
        return especialChar1;
      };

      // destaca botão assunto escolhido
      el.target.classList.toggle('assuntoEscolhido');
      var li = document.createElement('li');
      li.textContent = el.target.textContent;
      var klass = el.target.textContent.split(' ').join('');
      var klassSemAcento = especialCharMask(klass);
      var listas = el.target.parentElement.parentElement.parentElement.parentElement.lastElementChild.lastElementChild;
      console.log(klassSemAcento);
      li.className = klassSemAcento;

      if (listas.children.length > 6) {
        listas.style.columns = 2;
      } else {
        listas.style.columns = 1;
      }

      if (el.target.classList.contains('assuntoEscolhido')) {
        listas.appendChild(li);
        console.log(1);
      } else {
        listas.querySelector('.' + klassSemAcento).remove();
        console.log(2);
      }
    }
  });
}
{
  var createYear = function createYear(num) {
    if (num === anoAtual) {
      return "<option value=\"anoNascimento-0\" selected><span class=\"selectItem\"></span></option>";
    }

    ;
    return "<option value=\"anoNascimento-".concat(num, "\"><span class=\"selectItem\">").concat(num, "</span></option>");
  };

  //lista ano de nascimento
  var anoContainer = document.querySelector('#anoNascimento');
  var year = new Date(); // let idade18Anos = year.getFullYear() - 18;

  var anoAtual = year.getFullYear();
  var cemAnos = year.getFullYear() - 100;
  console.log(anoAtual);
  var lista = '';

  for (var i = anoAtual; i >= cemAnos; i--) {
    lista += createYear(i);
  }

  anoContainer.innerHTML = lista;
}
{
  // tirar cliente da lista de optOut
  document.querySelector('#listaOptOut').addEventListener('click', function (el) {
    if (el.target.tagName == 'LI') {
      var text = el.target.textContent;

      var optIns = _toConsumableArray(document.querySelector('#listaOptIn').querySelectorAll('li'));

      el.target.remove();
      optIns.find(function (el) {
        if (el.textContent === text) {
          el.classList.remove('assuntoEscolhido');
        }
      });
    }

    ;
  });
} // botão whats

{
  document.querySelector('#myInputAceito4').addEventListener('click', function () {
    document.querySelector('.formWhats').classList.toggle('formWhatsVisible');
  });
  document.querySelector('#myInputAceito5').addEventListener('click', function () {
    document.querySelector('.formWhats1').classList.toggle('formWhatsVisible');
  });
}
function criaCaluladora(){
  return {

    display: document.querySelector('.display'),




    //  --> métodos
    
    inicia(){
      console.log('calculadora iniciada');
      this.clickBotoes();
      this.pressionaEnter();
    },

    pressionaEnter(){
      this.display.addEventListener('keyup', e => {
        if (e.keyCode === 13){
          this.realizaConta();
        };
      });
    },

    clearDisplay(){
      this.display.value = '';
    },

    apagaUm(){
      this.display.value = this.display.value.slice(0, -1);
      // .slice(pos, índice).
    },

    realizaConta(){
      let conta = this.display.value;

      try{
        conta = eval(conta);

        if(!conta){
          alert('Conta Inválida');
          this.clearDisplay();
          return;
        }
        this.display.value = conta;
      } catch(e) {
        alert('Conta Inválida');
        this.clearDisplay();
        return;
      }
    },

    clickBotoes(){
      // this -> calculadora
      /* --> arrow function nao perde o this
      document.addEventListener('click', (e) =>{} */
      document.addEventListener('click', function(e){
        const el = e.target;
        
        if(el.classList.contains('btn-num')){
          this.btnParaDisplay(el.innerText); // this -> document
        }

        if(el.classList.contains('btn-clear')){
          this.clearDisplay();
        }

        if(el.classList.contains('btn-del')){
          this.apagaUm();
        }

        if(el.classList.contains('btn-eq')){
          this.realizaConta();
        }
        
      }.bind(this)); // this -> calculadora
    },

    btnParaDisplay(valor){
      this.display.value += valor;
    },
  };
}

const calculadora = criaCaluladora();
calculadora.inicia();

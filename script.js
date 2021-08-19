

// cadastro
function iniciarModal(modalSelector){
    document.getElementById('menu__ocultoid').classList.remove('mostrarLista');
    const modal = document.getElementById(modalSelector)
    modal.classList.add('mostrar')
    modal.addEventListener('click', (evento) =>{
        if(evento.target.id == modalSelector){
            modal.classList.remove('mostrar');

        }else if(evento.target.classList == 'fechar'){
            modal.classList.remove('mostrar');
        
        }

    })
}

const cadastrar = document.querySelector('.cadastro');
    cadastrar.addEventListener('click', () => {
    iniciarModal('iniciamodal');
})



// lista de menu
function clickLista(){
    document.getElementById('menu__ocultoid').classList.toggle('mostrarLista');
}


// login
function loginModal(loginId){
    document.getElementById('menu__ocultoid').classList.remove('mostrarLista');
    const loginAdicionar = document.getElementById(loginId)
    loginAdicionar.classList.add('mostrar__login');
    loginAdicionar.addEventListener('click', (evento)=>{
        if(evento.target.id == loginId){
            loginAdicionar.classList.remove('mostrar__login');

        }else if(evento.target.classList == 'login__fechar'){
            loginAdicionar.classList.remove('mostrar__login');
        
        }
    })
    
}

const login = document.querySelector('.abrirLogin');
    login.addEventListener('click', () =>{
        loginModal('iniciaLogin');
    
})

// redirecionando do login pro cadastro
function redirecionar(){
    document.getElementById('iniciaLogin').classList.remove('mostrar__login');
    return iniciarModal('iniciamodal');
    
}

// reserva de veiculos
function iniciaReserva(idReserva){
    document.getElementById('menu__ocultoid').classList.remove('mostrarLista');
    const classeReserva = document.getElementById(idReserva)
        classeReserva.classList.add('reserva__mostrar');
        classeReserva.addEventListener('click',(evento) =>{
            if(evento.target.classList == 'fechar__reserva-veiculos'){
                classeReserva.classList.remove('reserva__mostrar')
            
            }else if(evento.target.id == idReserva){
                classeReserva.classList.remove('reserva__mostrar')
            }

        } )
}

const veiculos = document.querySelector('.abrirReserva');
    veiculos.addEventListener('click', () =>{
        iniciaReserva('container__reservaid')
})

// Cadastro cliente
function iniciarCliente(clienteId){
    document.getElementById('menu__ocultoid').classList.remove('mostrarLista');
    const iniciandoCliente = document.getElementById(clienteId)
     iniciandoCliente.classList.add('cliente__mostrar');
     iniciandoCliente.addEventListener('click', (e) =>{
         if(e.target.id == clienteId){
             iniciandoCliente.classList.remove('cliente__mostrar');
         
        }else if(e.target.classList == 'fechar__cliente'){
            iniciandoCliente.classList.remove('cliente__mostrar')
        }
     })
}




const cliente = document.querySelector('.abrirCliente')
    cliente.addEventListener('click', () => {
        iniciarCliente('iniciar__cliente')
})

// Cadastro de Veiculo
function iniciarVeiculo(veiculoId){
    document.getElementById('menu__ocultoid').classList.remove('mostrarLista');
    const iniciandoVeiculos = document.getElementById(veiculoId)
        iniciandoVeiculos.classList.add('veiculos__mostrar');
        iniciandoVeiculos.addEventListener('click', (e) =>{
            if(e.target.id == veiculoId){
                iniciandoVeiculos.classList.remove('veiculos__mostrar');
            
            }else if(e.target.classList == 'fechar__veiculo'){
                iniciandoVeiculos.classList.remove('veiculos__mostrar');
            }
        })

}


const reservaVeiculos = document.querySelector('.abrirVeiculos');
    reservaVeiculos.addEventListener('click', () =>{
        iniciarVeiculo('iniciar__veiculo')
    })
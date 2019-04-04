import {
    GET_CLIENTES,ADD_CLIENTE,UPDATE_CLIENTE,REMOVE_CLIENTE
} from './types'



const generateId = () => Math.floor(Math.random()*100000+100000)


const getDate = () => new Date().getTime();

const prepararCliente = (cliente) => {
    const id = generateId();
    const criadoEm = getDate();
    const atualizadoEm = getDate();
    return {...cliente,id,criadoEm,atualizadoEm}
}


const data = [
    {
        id:1,
        nome:"Cliente Joao",
        cpf:"111.222.333-45",
        telefone: "111-444",
        email: "joao@gmail.com",
        criadoEm: getDate(),
        atualizadoEm: getDate()
    }
];

export const getClientes = () => ({ type: GET_CLIENTES,data });

export const addCliente = ( cliente ) => ({type: ADD_CLIENTE,cliente:prepararCliente(cliente) })

export const updateCliente = (id, cliente ) => ({type: UPDATE_CLIENTE,cliente:{id,...cliente,atualizadoEm: getDate()}})

export const removeCliente = (id) => ({type: REMOVE_CLIENTE,id })


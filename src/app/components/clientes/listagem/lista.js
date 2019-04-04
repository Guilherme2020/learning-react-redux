import React from 'react'



const Cliente = (cliente) => (
    <div>
        <p>Nome: { cliente.nome }</p>
        <p>Telefone: { cliente.Telefone }</p>
        <p>Email: { cliente.email }</p>
        <p>CPF: { cliente.cpf }</p>
    </div>
)

class ListaClientes extends React.Component {
    render(){
        const {data} = this.props
        return(
            <div className="ListaClientes">
                <table>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Endereco</th>
                            <th>Email</th>
                            <th>CPF</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((cliente,index) => (
                                <Cliente  cliente={cliente} key={index} />
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }

}

export default ListaClientes
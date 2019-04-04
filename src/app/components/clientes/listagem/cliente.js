import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../../../actions';


class  Cliente  extends React.Component {
    state = {
        iniciouExclusao: false
    }
    excluirCliente = () => {
        const {iniciouExclusao} = this.state;
        if(!iniciouExclusao) return this.setState({iniciouExclusao:true})
        this.props.removeCliente(this.props.cliente.id)
    }
    render(){
        const {cliente} = this.props
        return(
            <tr>
                <td>{ cliente.nome }</td>
                <td>{ cliente.telefone }</td>
                <td>{ cliente.email }</td>
                <td>{ cliente.cpf }</td>
                <td 
                    onClick={this.excluirCliente}
                    style={{ curso:'pointer'  }}
                >
                    { this.state.iniciouExclusao ? "certeza?":  "Excluir"}
                </td>
            </tr>
        )
    }
}

export default  connect(null,actions)(Cliente)

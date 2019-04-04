import React from 'react'
import Listagem from './clientes/listagem'
export default class Aplicacao extends React.Component{

    render(){
        // const {valor,adicionarUm} = this.props;
        return(
            <div className="Aplicacao">

               <Listagem />

             {/*
                        <p>{valor}</p>
                    <br/>
                    <button
                        onClick={()=>adicionarUm()}
                    >
                        +
                    </button>   
            */}
             
            </div>
        )
    }

}
// const mapStateToProps = state => ({
//     valor: state.valores.valor
// })

// export default connect(mapStateToProps,actions)(Aplicacao)

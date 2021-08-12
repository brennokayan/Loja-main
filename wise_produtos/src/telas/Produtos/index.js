import React, { useEffect, useState } from "react";
import './style_produto.css'
import {pegarProdutos, apagarProduto, modificarProduto} from '../../services/api'
import {Link, BrowserRouter} from 'react-router-dom'
import {Switch, Route, useParams} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';


import {
  TextField,
  Button
} from '@material-ui/core';


import Editar from './components/Editar'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: "column",
    padding: '12px',
    width: '100%',
  },
}));



export default function App() {
    let { id } = useParams();
    var a = 'editarproduto/'
    a = a+id
    const [open, setOpen] = useState(false)
    const [produtos, setProdutos] = useState([])

    async function Produtos() {
        await pegarProdutos()
        .then(res => {
            console.log(res.data)
            setProdutos(res.data)})
            .catch(err => console.log(err))
    }
    useEffect(() => {
        Produtos()
    }, [])


    async function Excluir(id){
        await apagarProduto(id)
        .then(() => Produtos())
        .catch(err => console.log(err))
    }

    

    return(
        
        <div className="body">
            <div className="container">
                <div className='cardNovo'>
                    <div className='contentNovo'>
                        <Link to="/cadastrarproduto">+ Produto</Link>
                    </div>
                </div>
                {produtos.map(element =>
                    <div className='card'>
                        <div className='content'>
                            <h2>{element.id}</h2>
                            <h3>{element.Nome}</h3>
                            <br/>
                            <h4>Quantidade:  x{element.Quantidade}</h4>
                            <p className='Descrição'>{element.Descricao}</p>

                            <div style={{display: 'flex', flexDirection: 'column'}}>
                                <a href={element.Link_do_Produto}>{element.Valor}</a>
                                <br/> 
                                <Button 
                                    style={{marginTop: '-20px', width: '100%',marginLeft: '50%',marginRight: '50%',alignSelf: 'center'}}
                                    variant="contained" 
                                    color="secondary"
                                    onClick ={() => Excluir(element.id)}
                                >
                                Deletar
                                </Button>
                                <Link to={"editarproduto/"+element.id}>Editar Produto</Link>
                                {/*<Button 
                                    style={{marginTop: '5px', width: '100%',marginLeft: '50%',marginRight: '50%',alignSelf: 'center'}}
                                    variant="contained" 
                                    color="secondary"
                                    onClick ={() => setOpen(true)}
                                >
                                Editar
                                </Button>
                                {open ? <Editar/> : null}*/}
                            </div>
                        </div>
                    </div>
                    
                    
                )}
                
            </div>
        </div>
    )
}




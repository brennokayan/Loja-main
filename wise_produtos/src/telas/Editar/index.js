import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  TextField,
  Button
} from '@material-ui/core';

//import './style.css';

import { pegarIDProdutos, modificarProduto } from '../../services/api'

import { useLocation, useParams } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: "column",
    padding: '12px',
    width: '100%',
  },
})); 

function useQuery(){
  return new URLSearchParams(useLocation().search)
}


export default function Editar() {
  const classes = useStyles();

  // let query = useQuery()

  const {id} = useParams()
    
  // const [id, setID] = useState()
  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [link, setLink] = useState('')
  const [valor, setValor] = useState(0)
  const [quantidade, setQuantidade] = useState(0)

  async function getProduto(){
    await pegarIDProdutos(id)
    .then(res => {
      setNome(res.data.Nome)
      setDescricao(res.data.Descricao)
      setLink(res.data.Link_do_Produto)
      setValor(res.data.Valor)
      setQuantidade(res.data.Quantidade)
    })
    .catch(err => console.log(err))
  }


  useEffect(() => {

    getProduto()

  }, [id])


  async function Modificar(){

    const data = {
      Nome: nome, 
      Descricao: descricao,
      Quantidade: quantidade,
      Link_do_Produto: link,
      Valor: valor
    }
    await modificarProduto(id, data)
    .then(res => console.log(res))
    .catch(err => console.log(err))

  }


  return (


    <div className="fundo">
    <div className={classes.root}>
        <TextField 
        style={{marginTop: '10px', width: '40%', alignSelf: 'center'}}
            label="Nome"
            value ={nome}
            variant="outlined"
            onChange={(e) => setNome(e.target.value)}
        />
        <TextField 
        style={{marginTop: '10px', width: '40%',alignSelf: 'center'}}
            label="Descrição"
            value ={descricao}
            variant="outlined"
            onChange={(e) => setDescricao(e.target.value)}
        />
        <TextField 
        style={{marginTop: '10px', width: '40%',alignSelf: 'center'}}
            label="Link"
            value ={link}
            variant="outlined"
            onChange={(e) => setLink(e.target.value)}
        />
        <TextField 
        style={{marginTop: '10px', width: '40%',alignSelf: 'center'}}
            label="Valor"
            value ={valor}
            variant="outlined"
            onChange={(e) => setValor(e.target.value)}
        />
        <TextField 
        style={{marginTop: '10px', width: '40%',alignSelf: 'center'}}
        
            label="Quantidade"
            value ={quantidade}
            variant="outlined"
            onChange={(e) => setQuantidade(e.target.value)}
        />

        <Button 
        style={{marginTop: '100px', width: '40%', alignSelf: 'center'}}
        variant="contained" 
        color="secondary"
        onClick ={Modificar}
        >
        Editar Produto
        </Button>
        </div>
    </div>
    
  );
}
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  TextField,
  Button
} from '@material-ui/core';

import './style_home.css';

import { colocarProdutos, modificarProduto } from '../../services/api'


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: "column",
    padding: '12px',
    width: '100%',
  },
}));

export default function Home() {
  const classes = useStyles();

  const [nome, setNome] = useState('')
  const [descricao, setDescricao] = useState('')
  const [link, setLink] = useState('')
  const [valor, setValor] = useState(0)
  const [quantidade, setQuantidade] = useState(0)

  async function Cadastrar(){

    const data = {
      Nome: nome, 
      Descricao: descricao,
      Quantidade: quantidade,
      Link_do_Produto: link,
      Valor: valor
    }

    
    await colocarProdutos(data)
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
        onClick ={Cadastrar}
        >
        Cadastrar
        </Button>
        </div>
    </div>
    
  );
}
import React, {useState} from 'react';
import {modificarProduto} from '../../../../services/api'
import {
    Dialog,
    DialogContent,
    TextField,
    TextInput,
    Button,
} from '@material-ui/core'

import { useLocation, useParams } from 'react-router-dom'

function Editar({open},data) {
    const [Open, setOpen] = useState (false)
    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [link, setLink] = useState('')
    const [valor, setValor] = useState(0)
    const [quantidade, setQuantidade] = useState(0)

    const {id} = useParams()

    async function Modificar(){

        const data1 = {
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
      <>
        <Dialog
        open = {true}
      >
          <DialogContent>
          <TextField 
        style={{marginTop: '10px', width: '40%', alignSelf: 'center', display: 'flex', flexDirection: 'co'}}
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
        onClick ={() => Modificar(id,data)}
        >
        Editar Produto
        </Button>

              </DialogContent>
          
        </Dialog>
      </>
  );
}

export default Editar;
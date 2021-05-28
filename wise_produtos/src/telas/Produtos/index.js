import React, { useEffect, useState } from "react";
import './style_produto.css';
import TiltParallax from 'react-parallax-tilt';
import {pegarProdutos} from '../../services/api'

export default function App() {
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


    return(
        <body>

            {produtos.map(element =>
            <div>
            <div className='container'>
            <div>
                <a href={element.Link_do_Produto}>
                <TiltParallax className='card' glareEnable={true} glareMaxOpacity={0.4} glareColor="#d1d1d1" glarePosition="all" className='card' style={{background:'rgba(255,255,255,0.05)'}}>
                    <div className='content'>
                        <h2>
                                {element.id}
                        </h2>
                        <h3>
                            {element.Nome}
                        </h3>
                        <br/>
                        <h4>
                            Quantidade: {element.Quantidade}
                        </h4>
                        <p className='Titulo'>
                                {element.Descricao}
                        </p>
                        <a href='#'>R$ {element.Valor}</a>  
                    </div>
                </TiltParallax>
                </a>
            </div>
            </div>
            </div>
            )}
          </body>

    )
}
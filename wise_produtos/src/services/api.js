import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000'
})

export async function pegarProdutos(){
    const response = await api.get('http://127.0.0.1:8000/produtos/')
    return response
}

export async function pegarIDProdutos(id){
    const response = await api.get(`http://127.0.0.1:8000/produtos/${id}/`)
    return response
}

export async function colocarProdutos(data){
    const response = await api.post('http://127.0.0.1:8000/produtos/', data)
    return response
}

export async function apagarProduto(id){
    const response = await api.delete(`http://127.0.0.1:8000/produtos/${id}/`)
    return response
}
export async function modificarProduto(id,data){
    const response = await api.patch(`http://127.0.0.1:8000/produtos/${id}/`,data)
    return response
}


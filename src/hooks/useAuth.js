import axios from "axios"

export const startLogin = async ({ correo, password }) => {
    try {
        const respuesta = await axios.post('https://gym-backend.vercel.app/usuarios/login', { correo, password })
        console.log(respuesta)
    } catch (error) {
        console.log(error)
    }
}

export const startRegistro = async ({ nombre, correo, password }) => {
    try {
        const respuesta = await axios.post('https://gym-backend.vercel.app/usuarios/registro', { nombre, correo, password })
        console.log(respuesta)
    } catch (error) {
        console.log(error)
    }
}
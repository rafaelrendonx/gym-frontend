import axios from "axios"

export const startRegister = async (userInfo) => {
    try {
        const {
            data: {
                detalles: { token, userId, nombre },
            },
        } = await axios.post('https://gym-backend.vercel.app/auth/register', userInfo)
        localStorage.setItem("token", token)
        localStorage.setItem("userId", userId)
        localStorage.setItem("nombre", nombre)
        return { token, userId, nombre }
    } catch (error) {
        return { error: error.response.data.detalles }
    }
}

export const startLogin = async (userInfo) => {
    try {
        const {
            data: {
                detalles: { token, userId, nombre },
            },
        } = await axios.post('https://gym-backend.vercel.app/auth/login', userInfo)
        localStorage.setItem("token", token)
        localStorage.setItem("userId", userId)
        localStorage.setItem("nombre", nombre)
        return { token, userId, nombre }
    } catch (error) {
        return { error: error.response.data.detalles }
    }
}
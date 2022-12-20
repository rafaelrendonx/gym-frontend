import axios from "axios"

export const startRegister = async (userInfo) => {
    try {
        const {
            data: {
                detalles: { token, userId },
            },
        } = await axios.post('https://gym-ashy.vercel.app/auth/register', userInfo)
        localStorage.setItem("token", token)
        localStorage.setItem("userId", userId)
        return { token, userId }
    } catch (error) {
        return { error: error.response.data.detalles }
    }
}

export const startLogin = async (userInfo) => {
    try {
        const {
            data: {
                detalles: { token, userId },
            },
        } = await axios.post('https://gym-ashy.vercel.app/auth/login', userInfo)
        localStorage.setItem("token", token)
        localStorage.setItem("userId", userId)
        return { token, userId }
    } catch (error) {
        return { error: error.response.data.detalles }
    }
}

export const getUserData = async (correo) => {
    try {
        const { data } = await axios.get(`https://gym-ashy.vercel.app/usuarios/getuserdata?correo=${correo}`, 
        { headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    })
        return data
    } catch (error) {
        return { error: error.response.data.detalles }
    }
}
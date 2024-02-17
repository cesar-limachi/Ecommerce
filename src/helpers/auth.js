import { TOKEN_NAME } from "../constants/env"


// CON ESTE getItem SE OBTIENE EL NOMBRE DESDE NUESTA VARIABLE DE ENTORNO
export const token = () => localStorage.getItem(TOKEN_NAME)
// CON ESTE setItem SE GUARDA EN LOCALSTORAGE EL TOKEN CON LA VARIABLE QUE SE DEFINA EN NUESTRA VARIABLE DE ENTORNO
export const setToken = (token) => localStorage.setItem(TOKEN_NAME, token)
// CON ESTE removeItem SE ELIMINA DEL LOCAL STORAGE EL TOKEN
export const deleteToken = () => localStorage.removeItem(TOKEN_NAME)

export const clearLocal = () => localStorage.clear()
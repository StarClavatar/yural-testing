import axios from "axios";

const serverUrl = 'http://api.favorit-parts.ru/hs/hsprice/?key=00000000-0000-0000-0000-000000000001'

export const getDetails = (number: number) => {
    return axios.get(`${serverUrl}`, {params: {number}})
}

export const getAnalogues = (number: number, brand: string, analogues:string) => {
    return axios.get(`${serverUrl}`, {params: {number, brand, analogues}})
}
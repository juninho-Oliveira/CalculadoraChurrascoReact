import axios, {AxiosResponse} from "axios";
  

const api = axios.create ({
    baseURL: 'http://localhost:3000/ListaChurrascos'
})


export const postApi = (url: string, data: any): Promise<AxiosResponse<ISwapi, any>> => {
    return api.post(url, data)
}

export const getApi = (url: string): Promise<AxiosResponse<ISwapi, any>> => {
    return api.get(url)
}

export const putApi = (url: string): Promise<AxiosResponse<ISwapi, any>> => {
    return api.put(url)
}

export const deleteApi = (url: string): Promise<AxiosResponse<ISwapi, any>> => {
    return api.delete(url)
}


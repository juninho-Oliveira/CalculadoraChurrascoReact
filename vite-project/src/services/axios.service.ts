import axios, {AxiosResponse} from "axios";
  

const api = axios.create ({
    baseURL: 'https://api.render.com/deploy/srv-cnu24gv79t8c73cc1h90?key=rUyr-wnHvQY'
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



import axios from 'axios'

export const get = ({
    url,
    params
}) => {
    return axios({
        method: 'GET',
        url,
        params
    })
    .then((result)=>{
        return result.data
    })
    .catch((err)=>{
        return err.message
    })
}


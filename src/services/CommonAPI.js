import axios from 'axios'


const CommonAPI= async(httpMethod,url,reqBody)=>{
    const reqConfig={
        method:httpMethod,
        url,
        data:reqBody
    }
    //Api calling
    return await axios(reqConfig).then(res=>{
        return res
    })
    .catch(err=>{
        return err
    })
}
export default CommonAPI
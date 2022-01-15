import axios from "axios";
import { useRef ,useState} from "react";

export default function useLoginOrRegister(url,setAuth) {
    const email = useRef("")
    const password = useRef("")
    const confirmPassword = useRef("")
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(null)
    const STORAGE_KEY = "userDetails"
    function getAxios() {
        setIsLoading(true)
        axios.post(url,
            {email:email.current.value,password:password.current.value})
        .then(res=>{
            setAuth(res.data)
            setIsLoading(false)
            localStorage.setItem(STORAGE_KEY,JSON.stringify(res.data))
            console.log(res)
        })
        .catch(err=>{console.log(err.response);setIsError(err)})
    }

    return {confirmPassword,email,password,getAxios,isLoading,isError}
}
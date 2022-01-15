import {useState} from "react";
import axios from "axios"; 
import { Redirect } from "react-router-dom";

export default function LogIn({auth ,setAuth,AUTH_LOCAL_STORAGE}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [disabale,setDisable] = useState(false)
  const API_KEY = "AIzaSyCRjVEgHtpGNM0PNEVSv9-oIYkQRSH60t4";
  const URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`;
  const isValid = ()=>{
    return(email.length && password.length )
  }
  const LogInVerification = () => {
      
    axios
      .post(URL, {
        email,
        password,
      })
      .then((res) => {
          console.log(res),
          setAuth(res),
          localStorage.setItem(AUTH_LOCAL_STORAGE,JSON.stringify(res))
          setError(false)
        })
      .catch((err) => {
          console.log(err.res,
          setError(true),
        )});
  };

  if(auth){
    return <Redirect to="/BooksList"/>
  }

  return (
    <div>
        <h3 id="log">Log In</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if(isValid()){
            LogInVerification();
          }
        }}
      >
        <input
          onChange={(e) => {
            setEmail(e.target.value),
            setDisable(()=>isValid())
          }}
          type="email"
          placeholder="enter email"
        />
        <br />
        <input
          onChange={(e) => {
            setPassword(e.target.value),
            setDisable(()=>isValid())
          }}
          type="password"
          placeholder="enter password"
        />
        <br />
        {error?<h4><iframe style={{backgroundColor: "rgba(255, 255, 255, 0.4)"}} src="https://giphy.com/embed/93LTXywyTGaYUWy9tJ" width="150" height="130" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></h4>:""}
        <input disabled={!disabale} type="submit" value={"sign in"} />
        <h5> already registered? login here</h5>
      </form>
    </div>
  );
}


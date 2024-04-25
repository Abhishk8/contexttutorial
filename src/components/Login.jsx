import React, { useContext } from "react";
import UserContext from "../context/UserContext";

const Login = ()=>{

    const [username,setUsername] = React.useState("");
    const [password,setpassword] = React.useState("");

    const {setUser} = useContext(UserContext);

    const handlesubmit = (e)=>{
        e.preventDefault();
        setUser({username,password})
        setpassword("");
        setUsername("");
    }
return (
    <>
    <h1>log in</h1>
    <input type="text" placeholder="enter username" value={username} onChange={(e)=>setUsername(e.target.value)}></input>
    <input type="password" placeholder="password" value={password} onChange={(e)=>setpassword(e.target.value)} />
    <button onClick={handlesubmit}> submit</button>
    </>
)
}

export default Login;
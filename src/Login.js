import { getDefaultNormalizer } from '@testing-library/dom';
import React ,{useState} from 'react';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';


function Login(){
    const[userId,serUserId]=useState("");
    const[userPassword,setuserPassword]=useState("");
    const[userError,setUserError]=useState(false);
    const[passError,setPassError]=useState(false);
    function submitHandler(e){
        e.preventdefault()
    }
    function userHandler(e){
        let item=e.target.value
        if(item.length<3)
        {
            setUserError(true)
        }
        else{
            setUserError(false)
        }
    }
    function passHandler(e){
        let item=e.target.value
        if(item.length<3)
        {
            setPassError(true)
        }
        else{
            setPassError(false)
        }
    }
    return(
        <div>
            <h1>login</h1>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="user id" onChange={userHandler}/> {userError?<span>invalild</span>:" "}
                <br/><br/>
                <input type="text" placeholder="password" onChange={passHandler}/> {passError?<span>invalild</span>:" "}
                <br/><br/>
                <button >Submit</button>
            </form>
        </div>
    )
}
export default Login;
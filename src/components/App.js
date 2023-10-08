import React,{useState,useEffect,useRef} from 'react'
import '../styles/App.css';
const App = () => {

//code here 
  const emailInputRef = useRef("");
  const passwordInputRef = useRef("");
  const [emailValue, setEmailValue] = useState("")
  const [passwordValue, setPasswordValue] = useState("")
  const [resEmail, setResEmail] = useState("");
  const [resPass, setResPass] = useState("");
  function handleFocus(){
    if(emailValue.trim() == ""){
      emailInputRef.current.focus()
    }
    else if(passwordValue.trim() == ""){
      passwordInputRef.current.focus();
      
    }
    else{
      setResEmail(emailValue)
      setResPass(passwordValue)
      setEmailValue("");
      setPasswordValue("");
    }
    if(passwordValue.trim() == "" || emailValue.trim() == ""){
      setResEmail('')
      setResPass('')
    }
  }
  return (
    <div id="main">
      Email
      <input id="inputEmail" type="text" value={emailValue} ref={emailInputRef} onChange={(e)=>setEmailValue(e.target.value)}/><br/>
      Password
      <input id="inputPassword" type="text" value={passwordValue} ref={passwordInputRef} onChange={(e)=>setPasswordValue(e.target.value)}/><br/>
      <button id="submitButton" onClick={handleFocus}>Submit</button><br/>
      <p id="emailText">Your Email : {resEmail}</p>
      <p id ="passwordText">Your Password : {resPass}</p>
      
    </div>
  )
}


export default App;

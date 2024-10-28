import React, { useState } from 'react'

function Form() {
  const [form,setForm]=useState({email:"",password:"",role:"Writer",gender:"female",rules:false})
  const changeHandler=(event)=>{
    const name=event.target.name
      const value=event.target.value
    if (event.target.name==="rules"){
      
      setForm(form=>({...form,rules:!form.rules}))
    }
    else{
    setForm(form=>({...form,[name]:value}))}
    console.log(form)
  }
  const loginHandler=(event)=>{
    event.preventDefault();
    console.log(form)

  }
  
  
  
  return (
   
    <div>
      <form onSubmit={loginHandler}>
      <input type="text" name="email" value={form.email}  placeholder='email'   onChange={changeHandler} />
      <br />
      <input type="password" name="password"value={form.password}  placeholder='password' onChange={changeHandler} />
      <br />
      <select name="role" value={form.role}  onChange={changeHandler}>
        <option value="Admin">Admin</option>
        <option value="User">User</option>
        <option value="Writer">Writer</option>
      </select>
      <br />
      <label htmlFor="female"  >Female<input type="radio" value="female" name="gender"checked={form.gender==="female"} onChange={changeHandler} /></label>
      <label htmlFor="male" >Male<input type="radio" value="male" name="gender" checked={form.gender==="male"} onChange={changeHandler} /></label>
      <label htmlFor="other" >Other<input type="radio" value="other" name="gender"  checked={form.gender==="other"} onChange={changeHandler} /></label>
      <br />
      <input type="checkbox" name="rules"  value="rules" checked={form.rules} onChange={changeHandler} />

      
      <button type="submit" >Login</button>
      </form>
    </div>
   
    
   
      
  )
       
       
        
          
      
     
        
}

export default Form
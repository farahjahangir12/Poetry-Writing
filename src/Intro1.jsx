import { useState } from "react";

function Form(){
   const [status,setStatus]=useState('empty');
   const [session,setSession]=useState('');
   const [user,setUser]=useState('');

   if (status === 'submit')
   {
    return<><h1>Thanks For The Response!</h1></>
   }

   function handleClick(){
    setStatus('submit')
   }
   
    return (
        <div>
           <form action="">
            <h1>Personal Information</h1>.
            <label htmlFor="name">Name</label>
            <input type="text" name="name" id="name" disabled={status==='submit'} onChange={(e)=>setUser(e.target.value)}/>
            <label htmlFor="sessionState">Session</label>
            <input type="radio" value="21-25" disabled={status ==='submit'} onChange={(e)=>setSession(e.target.value)}/><label>21-25</label>
            <input type="radio" value="22-26" disabled={status ==='submit'} onChange={(e)=>setSession(e.target.value)}/><label>22-26</label>
            <input type="radio" value="23-27" disabled={status ==='submit'} onChange={(e)=>setSession(e.target.value)}/><label>23-27</label>
            <label htmlFor="submit"></label>
           <button  onclick={handleClick} disabled={status==='submit' || status==='empty'}>Submit</button>
           </form>
        </div>
    );
}

export default Form
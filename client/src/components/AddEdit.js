import './style.css'
import {useEffect,  useState} from "react"
import {useDispatch, useSelector} from "react-redux"
import {useHistory} from "react-router-dom"
import {addNewContact, editContact} from "../redux/actions/ContactActions"


function AddEdit(){
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [age,setAge]=useState("")
  const dispatch=useDispatch();
  const history=useHistory();
  const contact =useSelector(state=>state.ContactReducer.contact)
  const edit =useSelector(state=>state.ContactReducer.edit)
  

  useEffect(()=>{
    if (contact&&edit)  { return setName(contact.name); setEmail(contact.email); setAge(contact.age)}
     else {setName("");setEmail("");setAge("")}

  },[contact])


return (
  <>
 
    <div className="body1">

<div class="form">

      <div className="title">Welcome</div>
      <div className="subtitle">  {edit ? "Let's update contact!":"Let's create new contact!"}</div>
      <div className="input-container ic1">
        <input id="firstname" className="input" type="text" placeholder=" " value={name} onChange={(e)=>setName(e.target.value)} />
        <div className="cut"></div>
        <label for="firstname" className="placeholder">Name</label>
      </div>
    
      <div className="input-container ic2">
        <input id="email" className="input" type="text" placeholder=" " value={email} onChange={(e)=>setEmail(e.target.value)} />
        <div className="cut cut-short"></div>
        <label for="email" className="placeholder">Email</label>
      </div>
      <div className="input-container ic2">
        <input id="age" className="input" type="text" placeholder=" " value={age} onChange={(e)=>setAge(e.target.value)} />
        <div className="cut cut-short"></div>
        <label for="age" className="placeholder">Age</label>
      </div>
     
     
      {edit ? <button onClick={()=>{dispatch(editContact(contact._id,{name,email,age}));history.push('/contacts')}} className="button">edit</button>:
      (name!=""& email!="" & age !="")? <button type="text" className="submit" onClick={()=>{dispatch(addNewContact({name,email,age}));history.push('/contacts')}} className="button" >Add</button>:""
    }  
     </div> 

</div>
</>)
}
export default AddEdit

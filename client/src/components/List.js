import Card from './Card'
import { useSelector } from 'react-redux'
import './style.css'
function List(){
    const contacts=useSelector(state=>state.ContactReducer.contacts)
    return (<>
    
    <div className="list" style={{ marginTop:"300px"}}>
   {contacts.map(el=> <Card el ={el} key={el._id}/>)}
   </div>
    </>)
}

export default List
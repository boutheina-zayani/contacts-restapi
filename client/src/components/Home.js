import './style.css'
import {Link} from 'react-router-dom' 
import {useDispatch} from 'react-redux'
import {getContacts, tooglefalse} from '../redux/actions/ContactActions'
function Home (){
   const dispatch=useDispatch();
    return(
       <>
        <div className="body">
            <nav className="navMenu">
            <Link to='/' >  <h6 >Home</h6>  </Link>
            <Link to ='/contacts' onClick={()=>dispatch(getContacts())}> <h6>Contacts</h6> </Link> 
            <Link to='/AddContact' onClick={()=>dispatch(tooglefalse())}>  <h6>Add</h6>  </Link> 
             
               
            <div className="dot"></div>
            </nav>



         





         </div>
   </>
    )

}
export default Home
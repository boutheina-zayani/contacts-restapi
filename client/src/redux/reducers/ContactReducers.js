import {GET_CONTACT, GET_CONTACTS, TOOGLEFALSE, TOOGLETRUE} from '../types/ContactTypes'

const initalState={
contacts:[],
contact:{},
edit:false

}
const ContactReducer=(state=initalState,action)=>{
   
    switch (action.type) {
        case GET_CONTACTS:return {...state,contacts:action.payload}
        case GET_CONTACT: return {...state,contact:action.payload}  
        case TOOGLEFALSE :return {...state,edit:false} 
        case TOOGLETRUE : return {...state,edit:true}
        default:
            return state;
    }
}
export default ContactReducer
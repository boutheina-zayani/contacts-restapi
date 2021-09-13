import axios from 'axios'
import {GET_CONTACTS, GET_CONTACT,TOOGLETRUE, TOOGLEFALSE} from '../types/ContactTypes'


export const getContacts=()=>async (dispatch)=>{
    try {
        const res = await axios.get("/api/contactLists")
        console.log(res.data.ShowAllContact)
        dispatch({type:GET_CONTACTS ,payload: res.data.ShowAllContact})
    } catch (error) {
        
    }
}
//Add new contact 
export const addNewContact=(newContact)=>async (dispatch)=>{
    try {
        const res= await axios.post('/api/contactLists',newContact)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
        
    }
}

//delete contact 
export const deleteContact=(id)=> async (dispatch)=>{
    try {
         const res= await axios.delete(`/api/contactlists/${id}`)
         dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }

}
//edit contact

export const getOneContact=(id)=> async (dispatch)=> {
    try {
        const res=await axios.get(`/api/contactlists/${id}`)
        dispatch({type:GET_CONTACT,payload : res.data.getOne})
    } catch (error) {
        console.log(error)
        
    }
}



export const toogletrue=()=>{
    return {type :TOOGLETRUE}
}
export const tooglefalse=()=>{
    return {type :TOOGLEFALSE}
}


export const editContact= (id,newContact)=>async (dispatch)=>{
    try {
        const res = await axios.put(`/api/contactlists/${id}`,newContact)
        dispatch(getContacts())
    } catch (error) {
        console.log(error)
    }

}
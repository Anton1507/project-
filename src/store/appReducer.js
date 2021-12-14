

const initialState = {
    modal:false,
    reg:false,
    pageReg:false,
}
console.log(initialState.pageReg)

const MODAL="MODAL";
const REGISTRATION = "REGISTRATION";
const PAGEREG = "PAGEREG"

export const appReducer=(state=initialState,action)=>{
    switch (action.type){
        case "MODAL" :
            return{...state, modal:!state.modal,pageReg:false}
        case "REGISTRATION":
            return {...state,reg:!state.reg, modal:!state.modal,pageReg:false}
        case "PAGEREG":
            return{...state,pageReg:!state.pageReg}
        default:return state
    }

};

export const tookModal =()=>({type:MODAL});

export const regfunc = (pay)=>({type:REGISTRATION});

export const pageReg = ()=>({type:PAGEREG});


const initialState = {
    work:[],
    work_like:[],
    show_work:[],
   
};




const GET_WORK ="GET_WORK";
const WORK_LIKE="WORK_LIKE";
const SHOW_WORK = "SHOW_WORK";






export const workReducer=(state=initialState,action)=>{
    switch (action.type){


        case "GET_WORK":
            return{...state,work:[...action.payload]}
        case "WORK_LIKE":
            return{...state,work_like:[...state.work.filter(item=>item._id==action.payload)]}
        case "SHOW_WORK":
            return{...state,show_work:[...action.payload]}

        default:return state
    }
    
};

export const getWork =(payload)=>({type:GET_WORK,payload});
export const workLike = (payload)=>({type:WORK_LIKE,payload});
export const showWork = (payload)=>({type:SHOW_WORK, payload});


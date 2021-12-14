import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { workLike } from "../../store/workReducer";
import { fetchShowWork } from "../../store/async_action/work";

const PageCart =(props)=>{
    const dispatch = useDispatch();
    const id = props.match.params.id;
    dispatch(workLike(id))
    console.log(props.match.params.id);
    const item = useSelector(state=>state.work.work_like[0]);
   

    dispatch(fetchShowWork({id:item._id}));
    

    return ( 
        <div>
            <div>

               <p> Информация о работе {id} </p>
               <p>Предмет:{item.subject_name}</p>
                <p>Название работы:{item.name_work}</p>
                <p>Количество страниц:{item.numbOfPage}</p>
                <p>Когда была сделана:{item.wasDone}</p>
                <p>Количество источников:{item.numbOfSources}</p>
                <p>План:{item.plan}</p>
            </div>
            <div>вставка работы </div>
        </div>
    )
}
export default PageCart;
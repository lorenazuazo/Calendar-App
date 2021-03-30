
import Swal from "sweetalert2";
import { fetchConToken } from "../helpers/fetch";
import { types } from "../types/types";


export const  eventAddNew= (event) =>({
    type: types.eventAddNew,
    payload: event
});

export const  eventSetActive= (event) =>({
    type: types.eventSetActive,
    payload: event
});

export const eventClearActiveEvent = () =>({
    type: types.eventClearActiveEvent,
});

export const eventUpdated = (event) =>({
    type: types.eventUpdated,
    payload: event
});

export const eventDeleted = () =>({
    type: types.eventDeleted,
});

/*busca los datos de los eventos en BBDD*/
export const eventStartLoading = () =>{
    return async(dispatch) =>{
        try {
            const resp = await fetchConToken('events');
            const body = await resp.json();
    
            if(body.ok){
                dispatch(eventLoaded(body.eventos));
            }else {
                Swal.fire('Error',body.msg,'error');
            }
        } catch (error) {
            console.log(error);
        }
    }
}

const eventLoaded = (events) =>({
    type: types.eventLoaded,
    payload: events
});
import React from 'react';
import { useDispatch } from 'react-redux';
import { eventClearActiveEvent } from '../../actions/events';
import { uiOpenModal } from '../../actions/ui';


export const AddNewFab = () => {

    const dispatch = useDispatch();
    
    const handleClickNew = () =>{
        dispatch(eventClearActiveEvent());//lo agregue porque cuando toco una cita queda cargado cuando pongo new
        dispatch(uiOpenModal());
    }

    return (
        <button
            className="btn btn-primary fab"
            onClick={ handleClickNew }
        >
            <i className="fas fa-plus"></i>
            
        </button>
    )
}

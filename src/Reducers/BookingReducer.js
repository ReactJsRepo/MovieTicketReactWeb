import {ADD} from '../Actions/BookingActions';

const variable = (state = [], action) => {
    switch(action.type)
        {
            case ADD : 
              return [...state, 
                action.time, 
                action.tickets];

            default : 
              return state;
        }
}

export default variable
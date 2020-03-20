import { MOUSE_OVER, MOUSE_OUT } from '../actions/types';

const INITIAL_STATE = {
    hover: false
};

export default (state = INITIAL_STATE, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case MOUSE_OVER:
            return { ...state, hover: action.payload };
        case MOUSE_OUT:
            return { ...state, hover: action.payload };
        default:
            return state;
    }
};

import { SELECT_PAGE } from '../actions/types';

const INITIAL_STATE = {
    activeItem: 'home'
};

export default (state = INITIAL_STATE, action) => {
    // eslint-disable-next-line default-case
    switch (action.type) {
        case SELECT_PAGE:
            return { ...state, activeItem: action.payload };
        default:
            return state;
    }
};

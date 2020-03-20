import { SELECT_PAGE, MOUSE_OVER, MOUSE_OUT } from './types';

export const selectPage = dest => {
    return { type: SELECT_PAGE, payload: dest };
};

export const mouseOver = () => {
    return { type: MOUSE_OVER, payload: true };
};

export const mouseOut = () => {
    return { type: MOUSE_OUT, payload: false };
};

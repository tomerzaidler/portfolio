import { SELECT_PAGE } from './types';

export const selectPage = dest => {
    return { type: SELECT_PAGE, payload: dest };
};

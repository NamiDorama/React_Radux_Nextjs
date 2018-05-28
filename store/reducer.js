import { SET_META } from './actions';

export const meta = (state = null, { type, data = {} }) => {
    switch (type) {
        case SET_META: {
            return data;
        }
    }

    return state;
};
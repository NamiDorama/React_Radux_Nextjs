export const address = (state = null, { type, data = '' }) => {
    switch (type) {
        case SET_ADDRESS: {
            return data;
        }
    }

    return state;
};
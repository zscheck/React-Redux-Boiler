const defaultState = {
    header: 'Hello'
};

export default function reducer(state = defaultState, { type, payload }){
    switch(type){
        case 'CHANGE_HEADER':
            return {
                ...state,
                header: payload
            };

        default:
            return state;
    }
}
export const changeHeader = (text) => {
    const message = text === 'Hello' ? 'World' : 'Hello';
    return {
        type: 'CHANGE_HEADER',
        payload: message
    };
}
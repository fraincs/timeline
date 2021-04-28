const getStorage = (property) => {
    return localStorage.getItem(property);
}

const setStorage = function (property, value) {
    localStorage.setItem(property, value);
}

export {getStorage, setStorage};
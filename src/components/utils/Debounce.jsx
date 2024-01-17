export const debounce = (fn, delay) => {
    let timeOutId;
    return (data) => {
        clearTimeout(timeOutId);
        timeOutId = setTimeout(() => {
            fn(data)
        }, delay)
    }
}

const forward = (count) => {
    return {
        type: "FORWARD",
        counter: count
    }
}

const backward = (count) => {
    return {
        type: "BACKWARD",
        counter: count
    }
}


export {
    forward,
    backward,
}
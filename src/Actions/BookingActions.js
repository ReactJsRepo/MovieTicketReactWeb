export const ADD = "ADD";

export const add = (date,time,tickets) => ({
    type : ADD,
    date: date,
    time : time,
    tickets : tickets
})


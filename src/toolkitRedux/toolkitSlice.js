import {createSlice} from "@reduxjs/toolkit";




const toolKitSlice = createSlice({
    name: "toolkit",
    initialState: {
        count: 0,
        todos:['code', 'eat', 'workout', 'code', 'sleep', 'repeat']
    },
    reducers: {
        increment(state) {
            state.count ++
        },
        decrement(state) {
            state.count --
        },
        addToDo(state, action) {
            state.todos.push(action.payload)
        },
        removeLastToDo(state, action) {
            state.todos.pop()
        }
    }

})

export default toolKitSlice.reducer
export const {increment, decrement, addToDo, removeLastToDo} = toolKitSlice.actions

// function createIncrementAction(data){
//     return {type:'increment', data}
// }
// function createDecrementAction(data){
//     return {type:'decrement', data}
// }
import { INCREMENT, DECREMENT } from '../constant'

export const increment = data => ({ type: INCREMENT, data })
export const decrement = data => ({ type: DECREMENT, data })
export const incrementAsync = (data, time) => {
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment(data))
        }, time);
    }
}

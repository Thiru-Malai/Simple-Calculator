import {ACTIONS} from './App.js'
function DigitButton({dispatch, digit}){
    return (
        <button 
            onClick={ () => dispatch({type: ACTIONS.ADD, payload: {digit}})}>{digit}
        </button>
    )
}

export default DigitButton;
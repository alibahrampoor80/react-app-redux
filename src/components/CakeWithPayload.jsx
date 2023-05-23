import {useDispatch, useSelector} from "react-redux";
import {buyCake, plusCake} from "../redux/cake/cakeActions.js";
import {useState} from "react";

const CakeWithPayload = () => {
    const [numbers, setNumbers] = useState(0)
    const cakes = useSelector(state => state.cakes.cakes)
    const dispatch = useDispatch()
    return <>
        <h2>number of cakes: {cakes}</h2>
        <input type="text" onChange={(event) => setNumbers(event.target.value)}/>

        <button onClick={() => dispatch(buyCake(numbers))}>buy {numbers}</button>
        <button onClick={() => dispatch(plusCake())}>plus</button>

    </>
}

export default CakeWithPayload
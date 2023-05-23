import {useDispatch, useSelector} from "react-redux";
import {buyCake, plusCake} from "../redux/cake/cakeActions.js";

const HooksCakeContainer = () => {

    const cakes = useSelector(state => state.cakes.cakes)
    const dispatch = useDispatch()
    return <>
        <h2>number of cakes: {cakes}</h2>
        <button onClick={() => dispatch(buyCake())}>buy</button>
        <button onClick={() => dispatch(plusCake())}>plus</button>

    </>
}

export default HooksCakeContainer
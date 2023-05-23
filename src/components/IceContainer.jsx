import {useSelector, useDispatch} from "react-redux";
import {buy_ice, plus_ice} from "../redux/icecream/iceAction.js";

const IceContainer = () => {
    const ices = useSelector(state => state.ices.ices)
    const dispatch = useDispatch()

    return <>
        <h1>ices:{ices}</h1>
        <button onClick={() => dispatch(buy_ice())}>buy</button>
        <button onClick={() => dispatch(plus_ice())}>plus</button>
    </>
}
export default IceContainer
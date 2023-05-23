import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchUsers} from "../redux/user/userActions.js";

const UserContainer = () => {
    const dispatch = useDispatch()
    const userData = useSelector(state => state.user)
    const {loading, users, error} = userData


    useEffect(() => {
        dispatch(fetchUsers())
    console.log(userData)
    }, [])
    return <>
        <h1>users</h1>
        <ul>
            {loading ? <p>loading</p> : error ?
                <p>{error}</p> : userData && users && users.length && users.map(user => (
                <li key={user.id}>{user.name}</li>

            ))}

        </ul>

    </>
}
export default UserContainer
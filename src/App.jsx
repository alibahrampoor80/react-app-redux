import {Provider} from 'react-redux'
import store from "./redux/store.js";
import HooksCakeContainer from "./components/HooksCakeContainer.jsx";
import IceContainer from "./components/IceContainer.jsx";
import CakeWithPayload from "./components/CakeWithPayload.jsx";
import UserContainer from "./components/UserContainer.jsx";

const App = () => {

    return <>
        <Provider store={store}>
            <h1>ali bahrampoor</h1>
            <h2> web developer</h2>
             {/*<CakeContainer/>*/}
            <HooksCakeContainer/>
            <IceContainer/>
            <CakeWithPayload/>
            <UserContainer/>
        </Provider>
    </>
}
export default App

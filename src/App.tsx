import {SignIn} from "./pages/SignIn";
import {Route} from 'react-router-dom'
import {Home} from "./pages/Home";
import {Switch} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <Switch>
                <Route path='/signin' component={SignIn}/>
                <Route path='/' component={Home} />
            </Switch>
        </div>
    );
}

export default App;

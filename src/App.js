import './App.css';
import Header from './Header';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';


function App() {
    const [{},dispath]=useStateValue();
    useEffect(() => {
        //solo se corre una vez
        auth.onAuthStateChanged(authUser =>{
            console.log('THE USER IS >>>', authUser);
            if (authUser) {
                //El usuario esta logged
                dispath({
                    type: 'SET_USER',
                    user: authUser
                })
            }else{
                //El usuario esta logged out
                dispath({
                    type: 'SET_USER',
                    user: null
                })
            }
        })}, [])

    return (
    //BEM
    <Router>
        <div className = "app" >
            <Switch>
                <Route path="/login">
                <Login/>
                </Route>
                <Route path="/checkout">
                <Header />
                <Checkout/>
                </Route>
                <Route path="/">
                <Header />
                <Home/>
                </Route>
            </Switch>
            </div >
        </Router>
    );
}

export default App;
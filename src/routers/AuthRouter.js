import React from 'react';
import { LoginScreen } from '../components/auth/LoginScreen';
import { RegisterScreen } from '../components/auth/RegisterScreen';
import {
    BrowserRouter as Router,
    Switch,
    Route,  
    Redirect
} from "react-router-dom";  


export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth_box-container" >
                <Switch>
                    <Route exact path="/auth/login" component={LoginScreen}/>
                    <Route exact path="/auth/register" component={RegisterScreen}/>
                    <Redirect to="/auth/login"/>
                </Switch>
            </div>
            {/* <Redirec to="/auth/login"></Redirec> */}
        </div>
    )
}

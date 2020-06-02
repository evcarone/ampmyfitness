import React from 'react';
import Auth from '../utils/Auth';
//import Workouts from "./Workouts"
import BackExercises from "./exerciseGroup/backExercises";
import API from '../utils/API';
import LoggedInButtonAppBar from "../components/LoggedInButtonAppBar/index"

class AuthVideos extends React.Component {
    state = {
        secretData: '',
        user: {}
    }

    /**
     * This method will be executed after initial rendering.
     */
    componentDidMount() {
        API.dashboard(Auth.getToken())
            .then(res => {
                this.setState({
                    secretData: res.data.message,
                    user: res.data.user
                });
            })
    }

    /**
     * Render the component.
     */
    render() {
        return (
            <div>
                <LoggedInButtonAppBar></LoggedInButtonAppBar>
                    <BackExercises></BackExercises>
                </div>
                );
            }
        
        }
        
export default AuthVideos;
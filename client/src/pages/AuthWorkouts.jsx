import React from 'react';
import Auth from '../utils/Auth';
import Workouts from "./Workouts"
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
                <div style={{ height: 'calc(100vh - 64px)', backgroundImage: `url(/images/Background_Image.jpg)`, backgroundSize: 'cover', }}>
                    <br></br>
                    <Workouts></Workouts>
                </div>
                </div>

                );
            }
        
        }
        
export default AuthVideos;
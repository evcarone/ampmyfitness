import React from 'react';
import Auth from '../utils/Auth';
import API from '../utils/API';
import EnterButton from '../components/EnterButton';

class Landing extends React.Component {
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
            <div style={{ height: 'calc(100vh)', backgroundImage: `url(/images/Enter.jpg)`, backgroundSize: 'cover', display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <div style={{ opacity: ".85" }}>
                <img src="images/logo.png" style={{ padding: "70px", width: "350px", height: "auto", margin: "0", position: "absolute", top: "35%", left: "50%", transform: "translate(-50%, -50%)" }}/>
                    <EnterButton />
                </div>
            </div>);
    }

}

export default Landing;
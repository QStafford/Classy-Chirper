import React from 'react';
import { v4 as uuid4 } from 'uuid';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ' ',
            message: ' ',
            chirps: []
        }
        this.handleChirp = this.handleChirp.bind(this)
    }
    
    handleChirp(e) {
        e.preventDefault();
        console.log(this.state.chirps)
        this.setState({ username: '', 
                        message: '', 
                        chirps: [...this.state.chirps, {id: uuid4() , username: this.state.username, message: this.state.message }]});
        
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
            chirps: [...this.state.chirps, {id: uuid4(), username: 'Josheroni', message: 'Herro little plebian'},
                                            {id: uuid4(), username: 'Jakipie', message: 'I am calm......WHAT SORCERY IS THIS!?!?!'},
                                            {id: uuid4(), username: 'Garreticus', message: "No i'm Dirty Dan"}]
            })
        }, 2000);
    }
    
    render() {
        return (
            <>
            <h1>Classy Chirper</h1>
            <form>
                <label>Username:</label>
                <input type="text" value={this.state.username} onChange={e => this.setState({username: e.target.value})} />
                <label>Message:</label>
                <textarea name="" id="" cols="30" rows="10" value = {this.state.message} onChange = {e => this.setState({message: e.target.value})}></textarea>
                <button onClick = {this.handleChirp}>Chirp it!</button>
            </form>
            {this.state.chirps.map(chirp =>(
                <div id = 'postedChirp' key = {`Posted-Chirp-${chirp.id}`}>
                    <h4>{chirp.username}</h4>
                    <p>{chirp.message}</p>
                </div>
            ))}
            </>
        )
    }
}

export default App;
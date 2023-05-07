import ReactDOM from 'react-dom';
import React from 'react';
import NavBar from './components/NavBar';
import Body from './components/Body';

const rootElement = document.querySelector('.root');


function App() {
    return (
        <React.Fragment>
            <NavBar />
            <Body />
        </React.Fragment>
        
    )
}



ReactDOM.render(<App />, rootElement);
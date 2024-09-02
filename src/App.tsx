import { useState } from 'react';
import './App.css';
import Title from './components/Title';
import NavBar from './components/NavBar/NavBar';
import Contents from './components/Contents/Contents'

function App() {
    const sectionNames = ['About', 'Projects', 'Awards', 'Contact'];
    const [sectionName, setSectionName] = useState('About');

    return (
        <div className="App">
            <div className="header">
                <Title />
                <NavBar sectionNames={sectionNames} setSectionName={setSectionName} />
            </div>
            <Contents sectionName={sectionName} />
        </div>
    );
}

export default App;

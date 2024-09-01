import { useState } from 'react';
import './NavBar.css';
import NavButton from './NavButton';

const NavBar = () => {
    const names = ['About', 'Projects', 'Awards', 'Contact'];
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className="NavBar">
            {names.map((name, index) => (
                <NavButton name={name} onClick={() => setSelectedIndex(index)} selected={selectedIndex == index} />
            ))}
        </div>
    );
}

export default NavBar;

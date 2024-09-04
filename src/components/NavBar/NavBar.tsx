import { useState } from 'react';
import './NavBar.css';
import NavButton from './NavButton';

interface NavBarProps {
    sectionNames: string[];
    setSectionName: (name: string) => void;
}

const NavBar = ({ sectionNames, setSectionName } : NavBarProps) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className="NavBar">
            {sectionNames.map((name, index) => (
                <NavButton name={name} key={name} onClick={() => {
                        setSectionName(name);
                        setSelectedIndex(index);
                    }} selected={selectedIndex === index} />
            ))}
        </div>
    );
}

export default NavBar;

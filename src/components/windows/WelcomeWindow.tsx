import React from 'react';
import Window from '../Window';

interface WelcomeWindowProps {
    onClose: () => void;
    onClick: () => void;
    zIndex: number;
    onProjectsClick: () => void;
    onContactClick: () => void;
}

const WelcomeWindow: React.FC<WelcomeWindowProps> = ({ onClose, onClick, zIndex, onProjectsClick, onContactClick }) => {
    const birthDate = new Date(2006, 11, 15, 10, 0, 0);
    const currentDate = new Date();
    const diffTime = Math.abs(currentDate.getTime() - birthDate.getTime());
    const diffDays = diffTime / (1000 * 60 * 60 * 24);
    const gregorianYears = (diffDays / 365.2425).toFixed(3);
    const tropicalYears = (diffDays / 365.2422).toFixed(3);

    return (
        <Window title="Welcome!" windowWidth={600} windowHeight={400} onClose={onClose} onClick={onClick} zIndex={zIndex}>
            <p>
                Hello! I am Simon Ashton, a {gregorianYears}-year-old
                {tropicalYears !== gregorianYears && ` (${tropicalYears} in tropical years)`} programmer living in Canada.
                Please feel free to look around my website and check out some of my projects!
            </p>
            <ul className="nav-list">
                <li>
                    <span className="nav-item link" onClick={onProjectsClick}>Projects</span>
                </li>
                <li>
                    <span className="nav-item link" onClick={onContactClick}>Contact</span>
                </li>
            </ul>
        </Window>
    );
}

export default WelcomeWindow;

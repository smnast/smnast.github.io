import React from 'react';
import './Icon.css';

interface IconProps {
    src: string;
    alt: string;
    name: string;
    selected: boolean;
    onClick: () => void;
}

const Icon: React.FC<IconProps> = ({ src, alt, name, selected, onClick }) => {
    return (
        <div className={"window-icon" + (selected ? " selected" : "")} onClick={onClick}>
            <img className="window-icon-image" src={src} alt={alt} />
            <div className="window-icon-text">{name}</div>
        </div>
    );
};

export default Icon;
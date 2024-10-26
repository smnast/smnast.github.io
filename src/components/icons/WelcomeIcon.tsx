import React from 'react';
import IconImage from '../../assets/icons/welcome.png'
import Icon from '../Icon';

interface WelcomeIconProps {
    selected: boolean;
    onClick: () => void;
}

const WelcomeIcon: React.FC<WelcomeIconProps> = ({ selected, onClick }) => {
    return (
        <Icon src={IconImage} alt="Welcome icon" name="Welcome" selected={selected} onClick={onClick} />
    );
};

export default WelcomeIcon;
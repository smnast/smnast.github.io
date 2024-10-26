import React from 'react';
import IconImage from '../../assets/icons/minesweeper.webp'
import Icon from '../Icon';

interface MinesweeperIconProps {
    selected: boolean;
    onClick: () => void;
}

const MinesweeperIcon: React.FC<MinesweeperIconProps> = ({ selected, onClick }) => {
    return (
        <Icon src={IconImage} alt="Minesweeper icon" name="Minesweeper" selected={selected} onClick={onClick} />
    );
};

export default MinesweeperIcon;
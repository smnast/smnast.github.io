import React from 'react';
import Window from '../../Window';
import MinesweeperGame from './MinesweeperGame';

interface MinesweeperWindowProps {
    onClose: () => void;
    onClick: () => void;
    zIndex: number;
    focused: boolean;
}

const MinesweeperWindow: React.FC<MinesweeperWindowProps> = ({ onClose, onClick, zIndex, focused }) => {
    return (
        <Window title="Minesweeper" windowWidth={246} windowHeight={306} onClose={onClose} onClick={onClick} zIndex={zIndex} focused={focused} padding="0" maxSize="none">
            <MinesweeperGame />
        </Window>
    );
}

export default MinesweeperWindow;

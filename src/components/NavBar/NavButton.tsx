import './NavButton.css';

interface NavButtonProps {
    name: string;
    onClick: () => void;
    selected: boolean;
}

const NavButton = ({ name, onClick, selected }: NavButtonProps) => {
    return (
        <div className={'NavButton' + (selected ? ' selected' : '')} onClick={onClick}>{name}</div>
    );
}

export default NavButton;

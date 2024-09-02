import { ReactNode } from 'react';
import './Section.css'

interface SectionProps {
    children: ReactNode;
    visible: boolean;
}

const Section = ({ children, visible }: SectionProps) => {
    return (
        <div className={'Section' + (visible ? ' visible' : '')}>
            {children}
        </div>
    );
}

export default Section;

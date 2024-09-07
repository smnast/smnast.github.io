import { ReactNode, useState } from 'react'
import './Collapsible.css'

interface CollapsibleProps {
    description: ReactNode,
    content: ReactNode
}

const Collapsible = ({ description, content }: CollapsibleProps) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="Collapsible panel">
            <div className="header">
                <div className="description">
                    {description}
                </div>
                <div className="icon" onClick={() => setExpanded(!expanded)}>
                    <i className={'bi bi-chevron-' + (expanded ? 'up' : 'down')}></i>
                </div>
            </div>
            <div className={expanded ? 'expanded' : 'collapsed'}>
                {content}
            </div>
        </div>
    );
}

export default Collapsible;

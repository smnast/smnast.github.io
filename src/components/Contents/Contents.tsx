import Section from './Sections/Section'
import AboutSection from './Sections/AboutSection'
import ProjectsSection from './Sections/ProjectsSection'
import AwardsSection from './Sections/AwardsSection'
import ContactSection from './Sections/ContactSection'
import './Contents.css'

interface ContentsProps {
    sectionName: string;
}

const Contents = ({ sectionName }: ContentsProps) => {
    return (
        <div className="Contents">
            <Section visible={sectionName == 'About'}><AboutSection /></Section>
            <Section visible={sectionName == 'Projects'}><ProjectsSection /></Section>
            <Section visible={sectionName == 'Awards'}><AwardsSection /></Section>
            <Section visible={sectionName == 'Contact'}><ContactSection /></Section>
        </div>
    );
}

export default Contents;

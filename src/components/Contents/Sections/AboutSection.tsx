import React, { useState, useEffect, useMemo } from 'react';

const AboutSection = () => {
    const [years, setYears] = useState(calculateAge());
    const article = useMemo(() => chooseArticle(years), [years]);

    useEffect(() => {
        const interval = setInterval(() => {
            setYears(calculateAge());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    function calculateAge() {
        const date = new Date().valueOf();
        const birthdate = new Date(2006, 11, 15).valueOf();
        const seconds = (date - birthdate) / 1000;
        return (seconds / 60 / 60 / 24 / 365.25).toFixed(3);
    }

    function chooseArticle(years: string) {
        const full_years = Math.floor(parseFloat(years));
        if (full_years === 8 || full_years === 11 || full_years === 18) {
            return 'an';
        } else if (80 <= full_years && full_years <= 89) {
            return 'an';
        } else {
            return 'a';
        }
    }

    const languages = ['Python', 'C/C++', 'HTML/Typescript/CSS', 'Java', 'C#'];

    return (
        <>
            <div>
                <p><b>Hello! I am Simon Ashton, {article} {years}-year-old programmer living in Canada.</b></p>
            </div>
            <div className="panel">
            <h1>Languages</h1>
                <div>
                    <p>
                        Sorted by my familiarity with the language (in descending order), here are the top {languages.length} programming
                        languages that I have used:
                    </p>
                    <ol>
                        {languages.map((language) => (
                            <li key={language}>{language}</li>
                        ))}
                    </ol>
                    <p>
                        However, I love learning and creating new languages, and can usually feel familiar with a new programming
                        language within a few hours.
                    </p>
                </div>
            </div>
            <div className="panel">
                <h1>Frameworks and Tools</h1>
                <div>
                    <p>I have used <b>Git</b> and <b>Github</b> extensively for my own projects and for contributing to other open source software.</p>
                    <p>For building in C++, I use often <b>CMake</b>, and know how to work with CMakeLists files.</p>
                    <p>
                        I have unit testing experience
                        with <b>doctest</b>, <b>GoogleTest</b>, <b>PyUnit</b>, <b>pytest</b> and <b>Jest</b>.
                    </p>
                    <p>For web development, I have experience using <b>React</b> (for instance, this website).</p>
                    <p>
                        In Python, I enjoy using <b>PyTorch</b> for machine learning, and <b>NumPy</b> for general data science.
                        I am familiar with other libraries, including <b>Pandas</b>, <b>Scikit-learn</b> and <b>OpenCV</b>.
                    </p>
                    <p>I have used <b>OpenGL</b> for many 3D rendering projects, and can write <b>GLSL</b> shaders.</p>
                    <p>
                        I run <b>Linux</b> (currently using Void; have used Ubuntu, OpenSUSE and Arch in the past) on my daily driver laptop, giving me plenty of experience using the terminal for problem-solving,
                        customization and automation. Thus, I can do some <b>Bash</b>/<b>ZSH</b> scripting.
                    </p>
                    <p>
                        And, of course, I am always looking for new technologies to learn and experiment with.
                        I will happily learn whatever I need in order to seamlessly integrate into new projects.
                    </p>
                </div>
            </div>
        </>
    );
};

export default AboutSection;


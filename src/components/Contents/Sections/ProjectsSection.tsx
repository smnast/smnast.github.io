import HueMasterResult from '../../../assets/images/projects/huemaster_result.png'
import Robot34300A from '../../../assets/images/projects/34300A.jpg'
import Robotica from '../../../assets/images/projects/robotica.png'
import { CodeBlock } from 'react-code-blocks'

const ProjectsSection = () => {
    const synthScriptSample = `function count_words_in_file(file_path) {
    file_text <- read(file_path)
    current_word <- ""
    word_count <- 0
    for ch in file_text {
        if ch = " " {
            if len(current_word) > 0 {
                word_count <- word_count + 1
                current_word <- ""
            }
        } else {
            current_word <- current_word + ch
        }
    }
    if len(current_word) > 0 {
        word_count <- word_count + 1
    }

    return word_count
}

output(count_words_in_file("example_file.txt"))`;

    return (
        <>
            <b>I have worked on countless projects throughout my life. Here are some of my favourites.
                Feel free to check out the code by clicking on the titles.</b>
            <a href="https://github.com/smnast/SynthScript/"><h1>SynthScript</h1></a>
            <div>
                <p>
                    SynthScript is a dynamically-typed, interpreted scripting language designed from the ground up to use intuitive syntax
                    and accessible built-in functions, including for reading and writing to files.
                </p>
                <p>
                    I researched every step in crafting a programming language from scratch. I analyzed other languages,
                    like C++ and even Raku (Perl 6), determining what makes a good language, and why others fail to gain traction.
                </p>
                <p>
                    The language is written in C++, without the use of libraries like Yacc or Bison. It uses polymorphism for the dynamic typing,
                    along with design patterns including <a href="https://refactoring.guru/design-patterns/visitor">Visitor</a>,
                    and <a href="https://refactoring.guru/design-patterns/composite">Composite</a> for
                    the <a href="https://en.wikipedia.org/wiki/Abstract_syntax_tree">Abstract Syntax Tree</a>.
                </p>
                <p>
                    Here is an example of a program written in SynthScript, to count the number of words in a file:
                </p>
                <CodeBlock text={synthScriptSample} />
                <p>
                    This was, however, before I discovered testing, so I am not certain that the language is "safe" to use.
                </p>
            </div>
            <a href="https://github.com/smnast/HueMaster/"><h1>HueMaster</h1></a>
            <div>
                <p>
                    HueMaster was one of my favourite types of projects: one where I find a gap in my life and
                    fill it with software. I was setting up my laptop with an aesthetic colour scheme and
                    quickly realized that I had absolutely no idea how to create one. Instead, I chose to create
                    Huemaster, which determines a pleasing colour scheme based on my wallpaper.
                </p>
                <p>
                    I used OpenCV and a <i>lot</i> of heuristics to compute a set of colours based on the given wallpaper,
                    making sure to separate the code into concise classes using the Single Responsibility Principle.
                    For instance, the part of the program that actually writes the config files is distributed
                    into <code>configurator.cpp</code>, <code>parser.cpp</code>, and <code>writer.cpp</code> for
                    reading the HueMaster config, reading the individual programs's config files and writing the final
                    config files, respectively.
                </p>
                <p>
                    This is my <a href="https://github.com/smnast/void-nullptr">current i3 setup</a> as of writing this, using HueMaster for the colour scheme:
                </p>
                <img src={HueMasterResult} alt="Linux i3 setup using HueMaster" />
            </div>
            <a href="https://github.com/smnast/Robot10/"><h1>Robot10</h1></a>
            <div>
                <p>
                    A group of my high school friends and I decided to create a VEX robotics superteam
                    out of essentially the greatest members of the club at the time. My role on our
                    team was to program the robot, both for driver control and the 15-second autonomous period
                    at the beginning of every match.
                </p>
                <img src={Robot34300A} alt="34300A VEX robot" />
                <p>
                    I was able to create a smooth driver control and complex autonomous program using the third-party library, <a href="https://github.com/LemLib/LemLib">LemLib</a>.
                    The code is written in C++, and could have used more separation and documentation to improve the readability.
                </p>
                <p>
                    While the autonomous was "accurate", it certainly was not "reliable". Many times during our last competition, the robot would turn around and
                    try to escape the field! It turned out that the upload was corrupted, and reuploading it fixed the problem, but my team never trusted my autonomous
                    after that. This taught me the importance of <a href="https://en.wikipedia.org/wiki/2024_CrowdStrike_incident">testing the software before going to the competition</a>, even
                    if everything seems like it should work fine.
                </p>
            </div>
            <a href="https://github.com/smnast/Robotica"><h1>Robotica</h1></a>
            <div>
                <p>
                    Ah, Robotica. One of the most complex projects I have ever created. And yet, my least favourite.
                    I will never touch that project ever again. Robotica is written in C# using the <a href="https://godotengine.org">Godot game engine</a>,
                    with all the parts being modified and textured in Blender.
                </p>
                <img src={Robotica} alt="Interface of Robotica" />
                <p>
                    It started off as a clone of <a href="https://protobot.web.app/">Protobot</a>, a Unity application
                    designed for rapid prototyping of VEX robots. Really, that's all it is: just a clone of Protobot.
                </p>
                <p>
                    The reason it exists was because my classmates and I (even my robotics teacher) had numerous comments
                    about how Protobot should be different, including bugfixes or new features. Robotica had the potential
                    to be a solution to this problem.
                </p>
                <p>
                    Unfortunately, the project was "rushed". The code is poorly documented
                    and smells of every possible code smell. I wrote this project before I learned basic design patterns, so it is poorly
                    thought-out in general. Instead of being motivated to write clean, concise code, I used the number of lines of code as an
                    indicator of my progress, so the <code>Control.cs</code> file totals 1490 lines of code (including 2 lines of comments).
                </p>
                <p>
                    I enjoy thinking back to this project and how I could have written it differently. I have thought about rewriting the program
                    from scratch before, but I have more important things to do now.
                </p>
            </div>
            <a href="https://github.com/smnast/cp-tool"><h1>cp-tool</h1></a>
            <div>
                <p>
                    Like HueMaster, cp-tool exists to solve a problem that I experienced in my daily life. I was setting up an environment
                    to practice competitive programming in NeoVim, but lacked a simple interface to create a folder with a
                    single <code>.cpp</code> file for my solution.
                </p>
                <p>
                    To solve the problem, I wrote a simple Python script with shallow functions each designed to do one task. To shorten the command to
                    just <code>cpt</code> instead of <code>python cp-tool.py</code>, I wrote a separate shell script, with the added benefit of
                    being able to automatically <code>cd</code> into the new directory by sourcing the script (or <code>alias cpt='source cpt'</code>).
                </p>
                <p>
                    (I have since learned how to install a program using Make, while this project required a sequence of clones and symlinks)
                </p>
            </div>
        </>
    )
}

export default ProjectsSection

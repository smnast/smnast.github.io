import Collapsible from '../../Collapsible'
import HueMasterResult from '../../../assets/images/projects/huemaster_result.png'
import Robot34300A from '../../../assets/images/projects/34300A.jpg'
import RoboticaSnap from '../../../assets/images/projects/robotica_snap.png'
import RoboticaGroup from '../../../assets/images/projects/robotica_group.png'
import { CodeBlock } from 'react-code-blocks'

const ProjectsSection = () => {
    const equalsSynthScriptSample = `a <- 2
output(a = 2) # true`;

    const loopSynthScriptSample = `for i in 1..5 {
    output(i)
}`;

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

    const hueMasterSample = `cursor: capitaine-cursors-$$LIGHT?light:dark$$
background: $$BACKGROUND.alpha(-20)$$`;

    return (
        <>
            <b>I have worked on countless projects throughout my life. Here are some of my favourites.
                Feel free to check out the code by clicking on the titles.</b>
            <Collapsible description={
                <>
                    <a href="https://github.com/smnast/SynthScript/"><h1>SynthScript</h1></a>
                    <p>The human-centric scripting language</p>
                    <p><span className="Cpp">C++</span></p>
                </>
            } content={
                <>
                    <p>
                        SynthScript is a dynamically-typed, interpreted scripting language designed from the ground up to use intuitive syntax
                        and accessible built-in functions, including for reading and writing to files.
                    </p>
                    <p>
                        The language is written in C++, without the use of external libraries like Yacc or Bison. It uses a polymorphism approach
                        to dynamic typing, along with an <code>std::map</code> for the symbol table and storing variables/functions. The abstract syntax tree
                        is built recursively, with polymorphism used for defining classes for the tree nodes.
                    </p>
                    <p>
                        Many design decisions were made to create a more intuitive language. For instance, the assignment operator is set to an arrow, rather than an equals sign.
                        Thus, the comparison operator can be a singular equals sign, instead of two:
                    </p>
                    <CodeBlock text={equalsSynthScriptSample} />
                    <p>
                        No more complex for-loop syntax; SynthScript chooses a Python approach, with a more intuitive <code>range</code> operator:
                    </p>
                    <CodeBlock text={loopSynthScriptSample} />
                    <p>
                        Here is an example of a program written in SynthScript, to count the number of words in a file:
                    </p>
                    <CodeBlock text={synthScriptSample} />
                    <p>
                        One major improvement to consider for this language is adding a testing framework, like doctest. This would help to ensure
                        that the language functions correctly and can be used for larger projects. For instance, tests with small features of SynthScript, like a function returning
                        a value, could be added to verify that the program works correctly.
                    </p>
                </>
            } />
            <Collapsible
                description={
                    <>
                        <a href="https://github.com/smnast/HueMaster/"><h1>HueMaster</h1></a>
                        <p>A powerful colour scheme generator</p>
                        <p><span className="Cpp">C++</span></p>
                    </>
                }
                content={
                    <>
                        <p>
                            HueMaster is a colour scheme generator based on the idea of extracting a useable colour scheme from an image (a wallpaper, for instance).
                            It is written in C++, using the OpenCV and toml11 libraries.
                        </p>
                        <p>
                            It uses OpenCV's K-Means clustering (<code>cv::kmeans</code>) and several heuristics to compute a set of colours based on the given wallpaper.
                            The heuristics involve calculating a score for a given colour based on factors including distance to other colours in the colour scheme, contrast with the
                            background colour and proportion of the colour in the original image. The colour with the best score is chosen.
                        </p>
                        <p>
                            I made sure to separate the code into concise classes using the Single Responsibility Principle.
                            For instance, the part of the program that actually writes the config files is distributed
                            into <code>configurator.cpp</code>, <code>parser.cpp</code>, and <code>writer.cpp</code> for
                            reading the HueMaster config, reading the individual program's config files, and writing the final
                            config files, respectively.
                        </p>
                        <p>
                            HueMaster also includes a domain-specific language for specifying colours in config files. The language is formed by a chain of commands,
                            including <code>lighten</code> and <code>alpha</code>. It also includes a ternary operator in the form <code>LIGHT?STRING_1:STRING_2</code> to
                            select a string based on if the colour scheme will be light or dark.
                        </p>
                        <CodeBlock text={hueMasterSample} />
                        <p>
                            This is my <a href="https://github.com/smnast/void-nullptr">current i3 setup</a> as of writing this, using HueMaster for the colour scheme:
                        </p>
                        <img src={HueMasterResult} alt="Linux i3 setup using HueMaster" />
                        <p>
                            I plan to incorporate machine learning into the project in the future (in place of the current heuristics) to assist in producing more reliable, aesthetic colour schemes.
                        </p>
                    </>
                }
            />

            <Collapsible
                description={
                    <>
                        <a href="https://github.com/smnast/Robot10/"><h1>Robot10</h1></a>
                        <p>2023-2024 VEX Robotics code</p>
                        <p><span className="Cpp">C++</span></p>
                    </>
                }
                content={
                    <>
                        <p>
                            Robot10 is the final version of my 2023-2024 VEX Robotics robot code. It is written in C++, using the third-party library <a href="https://github.com/LemLib/LemLib">LemLib</a>.
                        </p>
                        <p>
                            LemLib abstracts a lot of the complex features of creating autonomous programs, including <a href="https://en.wikipedia.org/wiki/Proportional%E2%80%93integral%E2%80%93derivative_controller">PID</a> control and <a href="https://wiki.purduesigbots.com/software/odometry">odometry</a>.
                        </p>
                        <p>
                            The robot's path was found using a combination of online map programs, field measurements, and trial-and-error. Other than driving, the robot needed to control other functions both autonomously and with driver input. These included: "wings" (essentially snow plows, a vital part of that season's meta) and a catapult that doubled as a climbing mechanism.
                        </p>
                        <img src={Robot34300A} alt="34300A VEX robot" />
                        <p>
                            There were many times during our last competition where the robot would turn around and try to escape the field. It turned out that the upload was corrupted, and reuploading it fixed the problem. This taught me the importance of testing the software before the matches began, even if everything <i>seems</i> like it should work.
                        </p>
                    </>
                }
            />
            <Collapsible
                description={
                    <>
                        <a href="https://github.com/smnast/Robotica"><h1>Robotica</h1></a>
                        <p>Intuitive robotics prototyping tool</p>
                        <p><span className="Cs">C#</span>, <span className="GDScript">GDScript</span></p>
                    </>
                }
                content={
                    <>
                        <p>
                            Robotica is a VEX prototyping/CAD software designed using the <a href="https://godotengine.org">Godot</a> game engine with C#, and Blender for the 3D models.
                        </p>
                        <p>
                            It was designed as an improvement of another VEX prototyping software, <a href="https://protobot.web.app/">Protobot</a>.
                        </p>
                        <p>
                            This was the first time that I worked on a project for more than a couple months. In total, I spent three months working on importing new parts and adding core functionality. However, the project was rushed, creating many problems for me down the line.
                        </p>
                        <p>
                            Some key features of Robotica include a transform tool for moving parts around, along with a move tool which allows the user to quickly snap pieces together:
                        </p>
                        <img src={RoboticaSnap} alt="A nut being snapped onto a screw in Robotica" />
                        <p>
                            Robotica also includes automatic grouping of parts, built upon a system of "fasteners", "inserts", and "holes":
                        </p>
                        <img src={RoboticaGroup} alt="A C-channel automatically grouped with connected parts." />
                        <p>
                            The main improvements of Robotica over Protobot include: significantly better performance (often 10x the framerate), faster load times, more parts, more consistent automatic grouping, manual grouping, consistent saving/loading functionality, and a <i>lot</i> more settings.
                        </p>
                        <p>
                            Several improvements could be made to the code design. For instance, separating the long <code>Control.cs</code> class would help keep the control logic cleaner and maintainable. The part system could also be more abstracted to allow for easily adding new parts, without the need to edit multiple files to introduce one part. Without these improvements, the project is difficult to maintain and continue.
                        </p>
                    </>
                }
            />
            <Collapsible
                description={
                    <>
                        <a href="https://github.com/smnast/cp-tool"><h1>cp-tool</h1></a>
                        <p>CLI for competitive programming</p>
                        <p><span className="Python">Python</span>, <span className="Shell">Shell</span></p>
                    </>
                }
                content={
                    <>
                        <p>
                            cp-tool is a simple Python script designed to create folders for competitive programming solution files. It supports creating files for an individual problem or for an entire contest.
                        </p>
                        <p>
                            Since many competitive programmers prefer to start their solution with a "template", cp-tool allows users to specify a template and copies the desired code to their solution file.
                        </p>
                        <p>
                            To shorten the command to just <code>cpt</code> instead of <code>python cp-tool.py</code>, I wrote a separate shell script, with the added benefit of being able to automatically <code>cd</code> into the new directory by sourcing the script (or <code>alias cpt='source cpt'</code>).
                        </p>
                        <p>
                            One improvement to this program would be a proper means of installing it (CMake or similar), rather than instructing prospective users to symlink the files to their <code>bin</code> directory.
                        </p>
                    </>
                }
            />
        </>
    )
}

export default ProjectsSection

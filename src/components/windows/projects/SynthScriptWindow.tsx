import React from 'react';
import Window from '../../Window';
import { CodeBlock, zenburn } from 'react-code-blocks'

interface SynthScriptWindowProps {
    onClose: () => void;
    onClick: () => void;
    zIndex: number;
}

const SynthScriptWindow: React.FC<SynthScriptWindowProps> = (props) => {
    const wordsInFileSample = `count_words_in_file <- function(file_path) {
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

output(count_words_in_file("example_file.txt"))`
    const equalsSample = `a <- 2
output(a = 2) # true`;
    const loopSample = `for i in 1..5 {
    output(i)
}`;

    return (
        <Window title="SynthScript" windowWidth={1000} windowHeight={700} {...props}>
            <div>
                <h1>SynthScript</h1>
                <h3>The Human-Centric Scripting Language</h3>
                <h4>
                    <a className="link" href="https://github.com/smnast/SynthScript">GitHub Repository</a>
                </h4>
                <p>
                    <strong>SynthScript</strong> is a dynamically-typed, interpreted scripting language designed from the ground up to utilize intuitive syntax and accessible built-in functions, including capabilities for reading from and writing to files.
                </p>
                <p>
                    The language is implemented in C++ without relying on external libraries like Yacc or Bison. It employs a polymorphic approach to dynamic typing, utilizing an <code>std::map</code> for the symbol table to store variables and functions. The abstract syntax tree is constructed recursively, leveraging polymorphism to define classes for the tree nodes.
                </p>
                <p>
                    Various design decisions were made to enhance intuitiveness. For example, the assignment operator is represented by an arrow (←), allowing the comparison operator to use a single equals sign (=):
                </p>
                <CodeBlock text={equalsSample} language="R" theme={zenburn} />
                <p>
                    Additionally, SynthScript simplifies loop syntax by adopting a Python-like approach with a more intuitive <code>range</code> operator:
                </p>
                <CodeBlock text={loopSample} language="R" theme={zenburn} />
                <p>
                    Below is an example of a program written in SynthScript that counts the number of words in a file:
                </p>
                <CodeBlock text={wordsInFileSample} language="R" theme={zenburn} />
                <p>
                    A significant improvement to consider for this language is the incorporation of a testing framework, such as <strong>doctest</strong>. This addition would help ensure that the language functions correctly and can be effectively utilized for larger projects. For instance, tests for small features of SynthScript, such as functions returning values, could be added to verify that the program behaves as expected.
                </p>
            </div>
        </Window>
    );
}

export default SynthScriptWindow;
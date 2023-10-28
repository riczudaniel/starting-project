import { useState } from "react"
import { EXAMPLES } from "../data.js"
import TabButton from "./TabButton";
import Section from "./Section.jsx"

export default function Examples() {

  const [ selectedTopic, setSelectedTopic ] = useState()



  let tabContent = "Please click a button"
  function handleSelect(selectedButton) {
    // selectedButton --> "components", "jsx", "props", "state"

    // setSelectedTopic will automatically update selectedTopic depending on
    // what the user clicks. It re-executes everytime we click the buttons.
    setSelectedTopic(selectedButton)
}

    return(
        <Section title="Examples" id="examples">
          <menu>
            <TabButton isSelected={selectedTopic === "components"} onClick={() => handleSelect ("components")}>Components</TabButton>
            <TabButton isSelected={selectedTopic === "jsx"} onClick={() => handleSelect ("jsx") }>JSX</TabButton>
            <TabButton isSelected={selectedTopic === "props"} onClick={() => handleSelect ("props") }>Props</TabButton>
            <TabButton isSelected={selectedTopic === "state"} onClick={() => handleSelect ("state") }>State</TabButton>
          </menu>

          {/* This content will be updated, depending on what we click. */}
          {!selectedTopic ? <p>Please select a topic</p> :
          <div id="tab-content">         
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
               {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div>}
        </Section>
    )
}
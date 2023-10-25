import { useState } from "react"

import { CORE_CONCEPTS } from "./data"
import Header from "./components/Header/Header.jsx"
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";



function App() {
  const [ selectedTopic, setSelectedTopic ] = useState("Please click a button")



  let tabContent = "Please click a button"
  function handleSelect(selectedButton) {
    // selectedButton --> "components", "jsx", "props", "state"

    // setSelectedTopic will automatically update selectedTopic depending on
    // what the user clicks. It re-executes everytime we click the buttons.
    setSelectedTopic(selectedButton)
}

  return (
    <div>
      <Header/>
      <main>
        <section id="core-concepts">
        <h2>Core Concepts</h2>
        <ul>
        <CoreConcept {...CORE_CONCEPTS[0]}/>
        <CoreConcept {...CORE_CONCEPTS[1]}/>
        <CoreConcept {...CORE_CONCEPTS[2]}/>
        <CoreConcept {...CORE_CONCEPTS[3]}/>
         
        </ul>
        </section>
        <h2>Time to get started!</h2>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect ("Component")}>Components</TabButton>
            <TabButton onSelect={() => handleSelect ("JSX") }>JSX</TabButton>
            <TabButton onSelect={() => handleSelect ("Props") }>Props</TabButton>
            <TabButton onSelect={() => handleSelect ("State") }>State</TabButton>
          </menu>

          {/* This content will be updated, depending on what we click. */}
          <h2>{selectedTopic}</h2>
        </section>

      </main>
    </div>
  );
}

export default App;

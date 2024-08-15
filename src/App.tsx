import { Header } from "./components/Header/Header.tsx";
import { CoreConcept } from "./components/CoreConcept/CoreConcept.tsx";
import {CORE_CONCEPTS, ExampleKey, EXAMPLES} from "./data.ts";
import TabButton from "./components/TabButton/TabButton.tsx";
import { useState } from "react";

const concepts = CORE_CONCEPTS.map(
    (coreConcept: { image: string, description: string, title: string }, index: number) => {
        return <CoreConcept
            image={coreConcept.image}
            title={coreConcept.title}
            description={coreConcept.description}
            key={index}
        />
    }
);

function App() {
    const [selectedTopic, setSelectedTopic] = useState<ExampleKey>();

    let tabContent = <p>Please select a topic.</p>;

    if(selectedTopic) {
        tabContent =
            <div className="p-4 rounded-lg bg-medium-purple drop-shadow-md">
                <h3 className="m-0">{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                    <code className="text-sm">
                        {EXAMPLES[selectedTopic].code}
                    </code>
                </pre>
            </div>
    }

    function handleSelect(selectedButton: ExampleKey) {
        setSelectedTopic(selectedButton);
        console.log("Select something", selectedTopic);
    }

    return (
        <>
            <Header dynamicText="some text"/>
            <main className="w-10/12 max-w-7xl m-auto mb-96">
                <section className="p-12 text-center bg-darker-purple flex flex-col justify-center items-center">
                    <h2 className="text-3xl text-lighter-purple">Core Concepts</h2>
                    <ul className="flex justify-between items-center w-full">
                        { concepts }
                    </ul>
                </section>
                <section className="mx-12">
                    <h2 className="text-xl my-10 text-left text-lighter-purple">Examples</h2>
                    <menu className="mx-4 p-0 flex gap-2 list-none">
                        <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
                        <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                        <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
                        <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
                    </menu>
                    { tabContent }
                </section>
            </main>
        </>
    );
}

export default App;

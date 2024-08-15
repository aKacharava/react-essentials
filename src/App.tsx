import { Header } from "./components/Header/Header.tsx";
import { CoreConcept } from "./components/CoreConcept/CoreConcept.tsx";
import { CORE_CONCEPTS } from "./data.ts";
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
)

function App() {
    const [selectedTopic, setSelectedTopic] = useState('Please click a button')

    function handleSelect(selectedButton: string) {
        setSelectedTopic(selectedButton);
        console.log("Select something" , selectedTopic);
    }

    return (
        <>
            <Header dynamicText="some text" />
            <main className="w-10/12 max-w-7xl m-auto">
                <section className="p-12 text-center bg-darker-purple flex flex-col justify-center items-center">
                    <h2 className="text-3xl text-lighter-purple">Core Concepts</h2>
                    <ul className="flex justify-between items-center w-full">
                        { concepts }
                    </ul>
                </section>
                <section className="mx-12">
                    <h2 className="text-xl my-10 text-left text-lighter-purple">Examples</h2>
                    <menu className="mx-4 p-0 flex gap-2 list-none">
                        <TabButton onSelect={() => handleSelect('components')}>Some Example</TabButton>
                        <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
                        <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
                        <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
                    </menu>
                    { selectedTopic }
                </section>
            </main>
        </>
    )
}

export default App

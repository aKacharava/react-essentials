import TabButton from "../TabButton/TabButton.tsx";
import { useState } from "react";
import { ExampleKey, EXAMPLES } from "../../data.ts";
import Section from "../Section/Section.tsx";
import Tabs from "../Tabs/Tabs.tsx";

export default function Examples() {
    const [selectedTopic, setSelectedTopic] = useState<ExampleKey>();

    const buttons = <>
        <TabButton
            onSelect={() => handleSelect('components')}
            isSelected={selectedTopic === 'components'}
        >
            Components
        </TabButton>
        <TabButton
            onSelect={() => handleSelect('jsx')}
            isSelected={selectedTopic === 'jsx'}
        >
            JSX
        </TabButton>
        <TabButton
            onSelect={() => handleSelect('props')}
            isSelected={selectedTopic === 'props'}
        >
            Props
        </TabButton>
        <TabButton
            onSelect={() => handleSelect('state')}
            isSelected={selectedTopic === 'state'}
        >
            State
        </TabButton>
    </>

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
        <Section title="Examples" className="mx-12">
            <Tabs buttons={buttons}>
                {tabContent}
            </Tabs>
        </Section>
    );
}

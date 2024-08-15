import { CORE_CONCEPTS } from "../../data.ts";
import { CoreConceptData } from "../../interfaces.ts";
import { CoreConcept } from "../CoreConcept/CoreConcept.tsx";
import Section from "../Section/Section.tsx";

export default function CoreConcepts() {
    return (
        <Section title="Core Concepts" className="p-12 text-center bg-darker-purple flex flex-col justify-center items-center">
            <ul className="flex justify-between items-center w-full">
                {
                    CORE_CONCEPTS.map(
                        (coreConcept: CoreConceptData, index: number) => {
                            return <CoreConcept
                                image={coreConcept.image}
                                title={coreConcept.title}
                                description={coreConcept.description}
                                key={index}
                            />
                        })
                }
            </ul>
        </Section>
    );
}

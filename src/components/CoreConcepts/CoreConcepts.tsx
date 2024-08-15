import { CORE_CONCEPTS } from "../../data.ts";
import { CoreConceptData } from "../../interfaces.ts";
import { CoreConcept } from "../CoreConcept/CoreConcept.tsx";

export default function CoreConcepts() {
    return (
        <section className="p-12 text-center bg-darker-purple flex flex-col justify-center items-center">
            <h2 className="text-3xl text-lighter-purple">Core Concepts</h2>
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
        </section>
    );
}

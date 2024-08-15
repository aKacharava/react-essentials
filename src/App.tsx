import { Header } from "./components/Header/Header.tsx";
import { CoreConcept } from "./components/CoreConcept/CoreConcept.tsx";
import { CORE_CONCEPTS } from "./data.ts";

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
    return (
        <>
            <Header dynamicText="some text" />
            <main className="w-10/12 max-w-7xl m-auto">
                <section className="p-12 text-center bg-dark-purple flex flex-col justify-center items-center">
                    <h2 className="text-3xl">Core Concepts</h2>
                    <ul className="flex justify-between items-center w-full">
                        { concepts }
                    </ul>
                </section>
            </main>
        </>
    )
}

export default App

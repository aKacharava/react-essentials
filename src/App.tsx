import { Header } from "./components/Header.tsx";

function App() {
    return (
        <>
            <Header dynamicText="some text" />
            <main className="w-10/12 max-w-4xl m-auto">
                <h2 className="text-center text-2xl">
                    Lets get started!
                </h2>
            </main>
        </>
    )
}

export default App

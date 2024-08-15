import { Header } from "./components/Header/Header.tsx";
import CoreConcepts from "./components/CoreConcepts/CoreConcepts.tsx";
import Examples from "./components/Examples/Examples.tsx";

function App() {
    return (
        <>
            <Header dynamicText="some text"/>
            <main className="w-10/12 max-w-7xl m-auto mb-96">
                <CoreConcepts />
                <Examples />
            </main>
        </>
    );
}

export default App;

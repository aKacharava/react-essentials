function Header(
    {
        dynamicText
    }: {
        dynamicText: string
    }
) {
    const reactDescriptions: string[] = ['Fundemental', 'Core', 'Crucial'];

    function genRandomInt(max: number): number {
        return Math.floor(Math.random() * (max + 1));
    }

    const description = reactDescriptions[genRandomInt(2)];

    return (
        <header className="flex flex-col items-center text-center mx-12 mb-10">
            <img
                src="https://images.pexels.com/photos/27054232/pexels-photo-27054232/free-photo-of-licht-fel-luchtig-zee.jpeg"
                alt="Pexels Photo"
                className="w-1/3 object-cover"
            />
            <h1 className="m-0 text-7xl">
                React Essentials
            </h1>
            <p>
                { description } React concepts you will need to learn!
            </p>
            <p className="m-0 text-lg">
                { dynamicText } ipsum dolor sit amet, consectetur adipiscing elit. Cras ac quam vehicula ipsum vulputate ultrices.
                Morbi ullamcorper faucibus lobortis. Sed.
            </p>
        </header>
    );
}

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

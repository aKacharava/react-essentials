import './Header.css';
import reactConcepts from '../../assets/react-core-concepts.png';

export function Header(
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
                src={ reactConcepts }
                alt="Pexels Photo"
                className="w-1/5 object-cover"
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

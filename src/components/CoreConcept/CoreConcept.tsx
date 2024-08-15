export function CoreConcept(
    {
        image,
        title,
        description,
    }: {
        image: string;
        title: string;
        description: string;
    }
) {
    return (
        <li className="p-8 bg-darker-purple rounded-3xl shadow-md flex flex-col flex-wrap gap-2 items-center">
            <img src={ image } alt="core concept image" className="w-28 object-cover" />
            <h3 className="mx-2 text-lg">{ title }</h3>
            <p className="text-sm">{ description }</p>
        </li>
    );
}

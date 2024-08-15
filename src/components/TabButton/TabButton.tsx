import './TabButton.css';

export default function TabButton(
    props: {
        children: string | number,
        onSelect?: () => void,
    }
) {
    return(
        <li>
            <button className="tab-button" onClick={ props.onSelect }>
                { props.children }
            </button>
        </li>
    );
}

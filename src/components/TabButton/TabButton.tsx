import './TabButton.css';

export default function TabButton(
    props: {
        children: string | number,
        onSelect?: () => void,
        isSelected?: boolean,
    }
) {
    return(
        <li>
            <button className={"tab-button " + (props.isSelected ? "active" : "")} onClick={ props.onSelect }>
                { props.children }
            </button>
        </li>
    );
}

import './TabButton.css';

export default function TabButton(
    props: {
        children: string | number
    }
) {
    return(
        <li>
            <button className="tab-button">
                { props.children }
            </button>
        </li>
    );
}

import React, {ElementType} from "react";

export default function Tabs(
    props:{
        children: React.ReactNode,
        buttons: React.ReactNode,
        buttonsContainer?: ElementType,
    }
) {
    const ButtonContainer: ElementType = props.buttonsContainer ?? 'menu';

    return(
        <>
            <ButtonContainer className="mb-2 p-0 flex gap-2 list-none">
                { props.buttons }
            </ButtonContainer>
            { props.children }
        </>
    )
}

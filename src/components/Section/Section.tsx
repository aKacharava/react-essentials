import { SectionGroupProps } from "../../interfaces.ts";

export default function Section(
    {
        children,
        ...props
    }: SectionGroupProps
) {
    return(
        <section {...props}>
            <h2 className="text-xl my-10 text-left text-lighter-purple">{ props.title }</h2>
            { children }
        </section>
    )
}

import { ComponentPropsWithoutRef, ReactNode } from "react";

interface ExampleData {
    title: string;
    description: string;
    code: string;
}

export interface CoreConceptData {
    image: string;
    description: string;
    title: string
}

export interface ExamplesData {
    components: ExampleData;
    jsx: ExampleData;
    props: ExampleData;
    state: ExampleData;
}

export interface SectionGroupProps extends ComponentPropsWithoutRef<"section"> {
    children: ReactNode;
}

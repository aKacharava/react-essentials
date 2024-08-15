interface Example {
    title: string;
    description: string;
    code: string;
}

export interface CoreConcept {
    image: string;
    description: string;
    title: string
}

export interface Examples {
    components: Example;
    jsx: Example;
    props: Example;
    state: Example;
}

import components from './assets/components.png';
import config from './assets/config.png';
import jsxUi from './assets/jsx-ui.png';

export const CORE_CONCEPTS:({ image: string; description: string; title: string })[] = [
    {
        image: components,
        title: 'Concept 1',
        description: 'The first type of concept.',
    },
    {
        image: config,
        title: 'Concept 2',
        description: 'The second most type of concept.',
    },
    {
        image: jsxUi,
        title: 'Concept 3',
        description: 'The third least type of concept.',
    }
];

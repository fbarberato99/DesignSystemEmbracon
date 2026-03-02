import type { Preview } from '@storybook/vue3-vite'
import '../src/styles/colors.css'
import '../src/styles/typography.css'
import '../src/styles/spacing.css'
import '../src/styles/border-radius.css'
import '../src/styles/shadows.css'
import '../src/styles/transitions.css'
import '../src/styles/z-index.css'
import '../src/styles/accessibility.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    docs: {
      toc: true
    },
    a11y: {
      test: 'todo'
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'gray',
          value: '#f5f5f5',
        },
      ],
    },
  },
  decorators: [
    (story) => ({
      components: { story },
      template: `
        <div style="
          font-family: var(--typography-font-family);
          color: var(--colors-secondary-gray-graphite);
          padding: 24px;
        ">
          <story />
        </div>
      `,
    }),
  ],
};

export default preview;

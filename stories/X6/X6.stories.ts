import type { Meta, StoryObj } from '@storybook/vue3';

import X6 from './X6.vue';

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Example/X6',
  component: X6,
} satisfies Meta<typeof X6>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  // args: {
  //   primary: true,
  //   label: 'X6',
  // },
};

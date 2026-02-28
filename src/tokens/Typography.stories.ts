import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Tokens/Typography',
  tags: ['autodocs']
}

export default meta

export const Headings: StoryObj = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h1 style="font-size: var(--typography-heading-h1-size); font-weight: var(--typography-heading-h1-weight); line-height: var(--typography-heading-h1-line-height); margin: 0;">
            Heading 1 - 48px Bold
          </h1>
          <code style="font-size: 12px; color: #666;">--typography-heading-h1-*</code>
        </div>
        <div>
          <h2 style="font-size: var(--typography-heading-h2-size); font-weight: var(--typography-heading-h2-weight); line-height: var(--typography-heading-h2-line-height); margin: 0;">
            Heading 2 - 40px Bold
          </h2>
          <code style="font-size: 12px; color: #666;">--typography-heading-h2-*</code>
        </div>
        <div>
          <h3 style="font-size: var(--typography-heading-h3-size); font-weight: var(--typography-heading-h3-weight); line-height: var(--typography-heading-h3-line-height); margin: 0;">
            Heading 3 - 32px Bold
          </h3>
          <code style="font-size: 12px; color: #666;">--typography-heading-h3-*</code>
        </div>
        <div>
          <h4 style="font-size: var(--typography-heading-h4-size); font-weight: var(--typography-heading-h4-weight); line-height: var(--typography-heading-h4-line-height); margin: 0;">
            Heading 4 - 28px Bold
          </h4>
          <code style="font-size: 12px; color: #666;">--typography-heading-h4-*</code>
        </div>
        <div>
          <h5 style="font-size: var(--typography-heading-h5-size); font-weight: var(--typography-heading-h5-weight); line-height: var(--typography-heading-h5-line-height); margin: 0;">
            Heading 5 - 24px Bold
          </h5>
          <code style="font-size: 12px; color: #666;">--typography-heading-h5-*</code>
        </div>
        <div>
          <h6 style="font-size: var(--typography-heading-h6-size); font-weight: var(--typography-heading-h6-weight); line-height: var(--typography-heading-h6-line-height); margin: 0;">
            Heading 6 - 20px Bold
          </h6>
          <code style="font-size: 12px; color: #666;">--typography-heading-h6-*</code>
        </div>
      </div>
    `
  })
}

export const SubHeadings: StoryObj = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <div style="font-size: var(--typography-h7-size); font-weight: var(--typography-h7-weight); line-height: var(--typography-h7-line-height);">
            H7 - 18px Semi Bold
          </div>
          <code style="font-size: 12px; color: #666;">--typography-h7-*</code>
        </div>
        <div>
          <div style="font-size: var(--typography-h8-size); font-weight: var(--typography-h8-weight); line-height: var(--typography-h8-line-height);">
            H8 - 16px Semi Bold
          </div>
          <code style="font-size: 12px; color: #666;">--typography-h8-*</code>
        </div>
      </div>
    `
  })
}

export const Text: StoryObj = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <p style="font-size: var(--typography-text-large-size); font-weight: var(--typography-text-large-weight); line-height: var(--typography-text-large-line-height); margin: 0;">
            Text Large - 18px Regular
          </p>
          <code style="font-size: 12px; color: #666;">--typography-text-large-*</code>
        </div>
        <div>
          <p style="font-size: var(--typography-text-medium-size); font-weight: var(--typography-text-medium-weight); line-height: var(--typography-text-medium-line-height); margin: 0;">
            Text Medium - 16px Regular
          </p>
          <code style="font-size: 12px; color: #666;">--typography-text-medium-*</code>
        </div>
        <div>
          <p style="font-size: var(--typography-text-small-size); font-weight: var(--typography-text-small-weight); line-height: var(--typography-text-small-line-height); margin: 0;">
            Text Small - 14px Regular
          </p>
          <code style="font-size: 12px; color: #666;">--typography-text-small-*</code>
        </div>
        <div>
          <p style="font-size: var(--typography-caption-size); font-weight: var(--typography-caption-weight); line-height: var(--typography-caption-line-height); margin: 0;">
            Caption - 12px Regular
          </p>
          <code style="font-size: 12px; color: #666;">--typography-caption-*</code>
        </div>
      </div>
    `
  })
}

export const FontWeights: StoryObj = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <p style="font-weight: var(--typography-font-weight-regular); margin: 0;">
            Regular (400) - Texto padrão
          </p>
          <code style="font-size: 12px; color: #666;">--typography-font-weight-regular</code>
        </div>
        <div>
          <p style="font-weight: var(--typography-font-weight-medium); margin: 0;">
            Medium (500) - Texto com ênfase média
          </p>
          <code style="font-size: 12px; color: #666;">--typography-font-weight-medium</code>
        </div>
        <div>
          <p style="font-weight: var(--typography-font-weight-semi-bold); margin: 0;">
            Semi Bold (600) - Texto com ênfase forte
          </p>
          <code style="font-size: 12px; color: #666;">--typography-font-weight-semi-bold</code>
        </div>
        <div>
          <p style="font-weight: var(--typography-font-weight-bold); margin: 0;">
            Bold (700) - Títulos e destaques
          </p>
          <code style="font-size: 12px; color: #666;">--typography-font-weight-bold</code>
        </div>
      </div>
    `
  })
}

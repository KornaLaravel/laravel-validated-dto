import { defineConfig } from 'vitepress'

const configuredBase = process.env.VITEPRESS_BASE ?? '/'
const base = configuredBase.endsWith('/') ? configuredBase : `${configuredBase}/`

export default defineConfig({
  title: 'Validated DTO',
  description: 'Data Transfer Objects with validation for Laravel applications',
  base,
  themeConfig: {
    sidebar: [
      { text: 'Overview', link: '/' },
      {
        text: 'Getting Started',
        items: [
          { text: 'Installation', link: '/getting-started/installation' },
          { text: 'Configuration', link: '/getting-started/configuration' },
          { text: 'Upgrade Guide', link: '/getting-started/upgrade-guide' },
          { text: 'Changelog', link: '/getting-started/changelog' },
        ],
      },
      {
        text: 'The Basics',
        items: [
          { text: 'Generating DTOs', link: '/basics/generating-dtos' },
          { text: 'Defining DTO Properties', link: '/basics/defining-dto-properties' },
          { text: 'Defining Validation Rules', link: '/basics/defining-validation-rules' },
          { text: 'Creating DTO Instances', link: '/basics/creating-dto-instances' },
          { text: 'Accessing DTO Data', link: '/basics/accessing-dto-data' },
          { text: 'Defining Default Values', link: '/basics/defining-default-values' },
          { text: 'Transforming DTO Data', link: '/basics/transforming-dto-data' },
          { text: 'Mapping DTO Properties', link: '/basics/mapping-dto-properties' },
          { text: 'Simple DTOs', link: '/basics/simple-dtos' },
          { text: 'Resource DTOs', link: '/basics/resource-dtos' },
          { text: 'Wireable DTOs', link: '/basics/wireable-dtos' },
          { text: 'Lazy Validation', link: '/basics/lazy-validation' },
          { text: 'Generating TypeScript Definitions', link: '/basics/generating-typescript-definitions' },
        ],
      },
      {
        text: 'Customize',
        items: [
          { text: 'Custom Error Messages and Attributes', link: '/customize/custom-error-messages-and-attributes' },
          { text: 'Custom Exceptions', link: '/customize/custom-exceptions' },
        ],
      },
      {
        text: 'Type Casting',
        items: [
          { text: 'Introduction', link: '/type-casting/introduction' },
          { text: 'Available Types', link: '/type-casting/available-types' },
          { text: 'Create Your Own Type Cast', link: '/type-casting/create-your-own-type-cast' },
          { text: 'Casting Eloquent Model Properties to DTOs', link: '/type-casting/casting-eloquent-model-properties-to-dtos' },
        ],
      },
    ],
    search: {
      provider: 'local',
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wendelladriel/laravel-validated-dto' },
    ],
    editLink: {
      pattern: 'https://github.com/wendelladriel/laravel-validated-dto/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
  },
})

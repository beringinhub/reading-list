import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Daftar Buku',
      items: [
        'intro',
        {
          type: 'category',
          label: 'Produktivitas',
          items: [
            'revolusi-produktivitas/intro',
            'mengoptimalkan-ai-assitant/intro',
          ],
        },
        {
          type: 'category',
          label: 'Bisnis',
          items: [
            'membangun-usaha-modern/intro',
            'personal-branding-business-leaders/intro',
            'sustainability-business-practices/intro',
          ],
        },
        {
          type: 'category',
          label: 'Marketing',
          items: ['belajar-copywriting/intro'],
        },
      ],
    },
    // Resource Center (Coming Soon)
    /*
    {
      type: 'category',
      label: 'Resource Center',
      items: [
        'resources/templates',
        'resources/worksheets',
        'resources/case-studies',
        'resources/videos',
      ],
    },
    */
  ],
};

export default sidebars;
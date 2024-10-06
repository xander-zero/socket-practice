export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Next.js + NextUI',
  description: 'Make beautiful websites regardless of your design experience.',
  navItems: [
    {
      label: 'Progress Scenario',
      href: '/progress',
    },
    {
      label: 'Location Scenario',
      href: '/map',
    },
  ],
};

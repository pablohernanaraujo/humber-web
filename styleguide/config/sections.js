// eslint-disable-next-line func-names
module.exports = function() {
  return [
    {
      name: 'Getting Started',
      content: '../docs/README.md',
    },
    {
      name: 'Documentation',
      sections: [
      ],
    },
    {
      name: 'UI Components',
      pagePerSection: true,
      sections: [
        {
          name: 'Buttons',
          components: [
            '../src/UI/buttons/button-regular.tsx',
          ],
          exampleMode: 'expand',
          usageMode: 'collapse',
        },
      ],
      exampleMode: 'expand',
      usageMode: 'collapse',
    },
  ];
};

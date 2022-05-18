module.exports = {
  stories: ["../src"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  core: {
    builder: "@storybook/builder-webpack5",
  },
};

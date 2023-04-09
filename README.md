# Lighthouse Performance Plugin

## Setup

Please install the dependencies first:

```sh
npm install --save-dev lighthouse lighthouse-plugin-performance
```

Then, please create a configuration file for Lighthouse, such as `lighthouse.sample.js`.
The important part is to add `lighthouse-plugin-performance` to the `plugins` array.

```js
// lighthouse.sample.js
module.exports = {
  extends: "lighthouse:default",
  plugins: [
    "lighthouse-plugin-performance",
  ],
};
```

## Use

To see a report, simply run the following command:

```sh
npx lighthouse --config-path lighthouse.sample.js https://jobsort.com --view
```

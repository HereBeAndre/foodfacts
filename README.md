### Missing features

1. Add Simulation Step should create new simulation step (currently, it just logs to console).
2. Step block is missing.

### Potential improvements

1. Implement a speed dial like component to add simulation steps (cons: cluttered UI, limited number of actions?).
2. Being able to create multiple simulation steps - while leaving the previous ones blank - isn't great. Maybe the "Add series" button should be disabled until the current simulation step is filled out?
3. Aggregation should occur by one field, not by multiple fields (based on DS in PDF doc). I didn't notice that, thus I used a `multi` select and then ran out of time.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

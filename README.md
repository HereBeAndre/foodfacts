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

### Room for improvement

1. Simulation steps should display when "Add Simulation Step" is clicked.
2. Or, implement a speed dial like component to add simulation steps (cons: cluttered UI?).

Being able to create multiple simulation steps - without having completed the most recently added one - isn't great.
Ideally, the "Add series" button should be disabled until the current simulation step is completed.

Aggregation should be by one field, not by multiple fields (based on DS). I didn't notice that, thus I used a `multi` select and then ran out of time.

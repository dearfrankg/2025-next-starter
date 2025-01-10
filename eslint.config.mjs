import { FlatCompat } from "@eslint/eslintrc";
import typescriptEslintPlugin from "@typescript-eslint/eslint-plugin";
import typescriptEslintParser from "@typescript-eslint/parser";
import eslintPluginImport from "eslint-plugin-import";
import eslintPluginTailwindcss from "eslint-plugin-tailwindcss";

const compat = new FlatCompat();

const eslintConfig = [
  {
    ignores: [".next/", "node_modules/"],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.mjs"],

    languageOptions: {
      parser: typescriptEslintParser,
      parserOptions: {
        project: "./tsconfig.json", // Ensure TypeScript is aware of the project configuration
      },
    },
    plugins: {
      "@typescript-eslint": typescriptEslintPlugin,
      import: eslintPluginImport,
      tailwindcss: eslintPluginTailwindcss,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
      "import/order": [
        "error",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index"],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "tailwindcss/classnames-order": "warn",
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          disallowTypeAnnotations: true,
        },
      ],
    },
  },
];

export default eslintConfig;

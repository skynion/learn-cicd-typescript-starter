import eslint from "@eslint/js";
import { defineConfig } from "eslint/config";
import pluginSecurity from "eslint-plugin-security";
import globals from "globals";
import tseslint from "typescript-eslint";

export default defineConfig(
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  pluginSecurity.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      globals: globals.node,
    },
  },
  {
    ignores: ["dist/**", "coverage/**"],
  },
);

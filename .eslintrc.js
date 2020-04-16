console.log("eslint file found")

module.exports = {
	"parser": "@typescript-eslint/parser",
    "parserOptions": {
      "project": "./tsconfig.error.json"
    },
    "plugins": [
      "@typescript-eslint/eslint-plugin"
    ],
    "rules": {
    }
}
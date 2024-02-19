module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
        "react/react-in-jsx-scope" : "off",
        "react/prop-types" : "off",
        "no-mixed-spaces-and-tabs": "off",
        "no-undef": "off",
        "no-unused-vars": "off",
        "prettier/prettier": [ "error", {
            "semi": false
        }],
        "prettier/prettier": "off",
        "react/jsx-key": "off"

    }
}

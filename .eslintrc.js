module.exports = {
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "extends": "airbnb",
    "rules": {
        "comma-dangle": ["error", "never"],
        "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }]
    }
}
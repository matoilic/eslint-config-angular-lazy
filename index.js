module.exports = {
    "plugins": [
        "eslint-config-angular-lazy/rules"
    ],
    'extends': [
        'eslint-config-airbnb/base'
    ],
    "env": {
        "browser": true,
        "node": true,
        "jasmine": true,
        "protractor": true
    },
    "rules": {
        "indent": [2, 4],
        "comma-dangle": [2, "never"],
        "func-names": 0,
        "space-before-keywords": 0,
        "space-before-keywords-no-paren": 1
    }
};
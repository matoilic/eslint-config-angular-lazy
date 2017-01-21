module.exports = {
    extends: [
        'eslint-config-airbnb-base'
    ],
    env: {
        browser: true,
        node: true,
        jasmine: true,
        protractor: true
    },
    rules: {
        indent: [2, 4],
        'class-methods-use-this': 'off',
        'comma-dangle': [2, 'never'],
        'func-names': 0,
        'import/first': 'off',
        'import/no-extraneous-dependencies': 'off',
        'no-underscore-dangle': 'off',
        'max-len': [2, 120, 2, {
            ignoreUrls: true,
            ignoreComments: true
        }]
    }
};
const { override, addBabelPlugins, addPostcssPlugins } = require('customize-cra')

module.exports = override(
    addBabelPlugins(
        'babel-plugin-transform-typescript-metadata',
    ),
    addPostcssPlugins([
        require('tailwindcss'),
        require('autoprefixer'),
    ]),
)
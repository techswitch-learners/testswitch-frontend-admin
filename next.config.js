const withSass = require('@zeit/next-sass');
module.exports = withSass({
    cssModules: true,
    env: {
        REACT_APP_API_URL: 'https://testswitch-api-staging.herokuapp.com',
    }
});
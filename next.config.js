const withSass = require('@zeit/next-sass');
module.exports = withSass({
    cssModules: true,
    publicRuntimeConfig: {
        API_URL: process.env.API_URL,
        GUID_URL: (process.env.NODE_ENV==='staging'||'development')?(`https://testswitch-candidate-staging.herokuapp.com`):(`https://testswitch-candidate.herokuapp.com`),
    },
});



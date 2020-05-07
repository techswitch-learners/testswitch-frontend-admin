const withSass = require('@zeit/next-sass');
module.exports = withSass({
    cssModules: true,
    publicRuntimeConfig: {
        API_URL: process.env.API_URL,
        GUID_URL: process.env.CANDIDATE_SITE_URL,
    },
    
    env: {
        CANDIDATE_SITE_URL: "https://testswitch-candidate-staging.herokuapp.com",
    },
    build: {
        env: {
            CANDIDATE_SITE_URL: "https://testswitch-candidate.herokuapp.com",
        }
    }
});



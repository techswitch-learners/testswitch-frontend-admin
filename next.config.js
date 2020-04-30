const withSass = require('@zeit/next-sass');
module.exports = withSass({
    cssModules: true
});

module.exports = {
    publicRuntimeConfig: {
        API_URL: process.env.API_URL, 
    }
};



const withSass = require('@zeit/next-sass');
module.exports = withSass({
    cssModules: true
});

module.exports = () => {
    const env = {
        APIURL: process.env.SETAPIURL,
    };
    return {
        env,
    }
};



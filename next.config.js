const withSass = require('@zeit/next-sass');
module.exports = withSass({
    cssModules: true,
   });
module.exports = () => {
    const env = {
        API_URL: process.env.API_URL,
    };
    return {
        env,
    }
};

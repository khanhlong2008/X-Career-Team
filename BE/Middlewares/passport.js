const GooglePlusTokenStrategy = require('passport-google-plus-token')
const passport = require('passport')


passport.use(new GooglePlusTokenStrategy({
    clientID: '307645347527-omvmiot4rhhr1klbt93mebgskdllhd23.apps.googleusercontent.com',
    clientSecret: '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'
}, async (accessToken, refreshToken, profile, done) => {
    try {
        console.log('accessToken', accessToken)
        console.log('refreshToken', refreshToken)
        console.log('profile', profile)
    } catch (error) {
        done(error, false)
    }
}))
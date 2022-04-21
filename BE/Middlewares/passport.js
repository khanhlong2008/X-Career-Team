const GooglePlusTokenStrategy = require('passport-google-plus-token')
const passport = require('passport')
const User = require('../models/user')

passport.use(new GooglePlusTokenStrategy({
    clientID: '307645347527-omvmiot4rhhr1klbt93mebgskdllhd23.apps.googleusercontent.com',
    clientSecret: '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'
}, async (accessToken, refreshToken, profile, done) => {
    try {
        //check whether this current profile out database
        const user = await User.findOne({
            auhtGoogleID: profile.id,
            authType: 'google'
        })
        if (user) return done(null, user)
        // if new  account is available
        const newUser = new User({
            authType: 'google',
            auhtGoogleID: profile.id,
            email: profile.emails[0].value
        })
        // console.log(newUser)
        await newUser.save()
        done(null, newUser)
    } catch (error) {
        console.log(error)
        done(error, false)
    }
}))
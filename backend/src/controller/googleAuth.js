// import passport from "passport";
// import { Strategy as GoogleStrategy } from "passport-google-oauth20";
// import customerSchema from "../models/schemas/customer.js";
// import servicemanSchema from "../models/schemas/serviceman.js";

// passport.serializeUser(function (user, done) {
//     done(null, user);
// });

// passport.deserializeUser(function (user, done) {
//     done(null, user);
// });

// passport.use(
//     new GoogleStrategy(
//         {
//             clientID: process.env.CLIENT_ID,
//             clientSecret: process.env.CLIENT_SECRET,
//             callbackURL: "http://localhost:4001/api/google/callback",
//         },
//         async function (accessToken, refreshToken, profile, done) {
//             const userData = {
//                 name: profile.displayName,
//                 email: profile.emails[0].value,
//                 phone: undefined,
//                 password: profile.id,
//             };

//             const user = await customerSchema.find({ email: userData.email });
//             console.log(user);

//             if (user.length) {
//                 console.log("User Found!");
                
//             } else {
//                 console.log("User not Found!");
//             }

//             return done(null, profile);
//         }
//     )
// );

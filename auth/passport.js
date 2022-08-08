const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../database/model");

passport.serializeUser((user, done)=>{
    done(null, user);
});

passport.deserializeUser((user, done)=>{
    done(null, user);
});

passport.use(
  "register",
  new LocalStrategy((username, done) => {
    console.log(username);
    try {
      const [user, created] = User.findOrCreate({
        where: { username },
        default: {},
      });
      if (created) {
        done(null, user);
        console.log(user);
        return console.log("Exists");
      }
      done(null, false);
    } catch (error) {
        done(error, null);
       console.log("Error: ", error);
    }
  })
);

passport.use(
  "login",
  new LocalStrategy((username, password, done) => {
    const user = User.findOne({
        where: { username, password },
    });

    if(user){
        return done(null, user);
    }
    return done(null, false);
  })
);

module.exports = passport;

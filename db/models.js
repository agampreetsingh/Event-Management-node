/**
 * Created by championswimmer on 05/06/17.
 */
const Sequelize = require('sequelize');

const db = new Sequelize('eventman', 'root', 'dream', {
    host: 'localhost',
    dialect: 'mysql'
});

const Event = db.define('event', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    startTime: Sequelize.DATE,
    endTime: Sequelize.DATE,
    hostMessage: Sequelize.STRING,
    venue: Sequelize.STRING
});

const User = db.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: Sequelize.STRING,
    email: Sequelize.STRING
});

const UserLocal = db.define('userlocal', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: Sequelize.STRING,
    password: Sequelize.STRING
});

const AuthToken = db.define('authtoken', {
    token: {
        type: Sequelize.STRING,
        primaryKey: true
    }
});



Event.belongsTo(User);
User.hasMany(Event);

UserLocal.belongsTo(User);
User.hasOne(UserLocal);

AuthToken.belongsTo(User);
User.hasMany(AuthToken);


db.sync({force: false})
    .then(() => {
        console.log("Database Synchronised");
    })
    .catch((err) => {
        console.log("Error setting up Database");
        console.error(err);
    });

module.exports = {
    db,
    models: {
        User,
        Event,
        UserLocal,
        AuthToken
    }
};
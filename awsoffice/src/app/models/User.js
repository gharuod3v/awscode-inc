module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {


        name: {
            type: String,
            require: true
        },

        email: {
            type: String,
            unique: true,
            require: true,
            lowercase: true,
        },
      
        phone: {
            type: Number,
            require: true,
            unique: true,
            len: [8, 12],
        },


    });
  
    return User;
  };
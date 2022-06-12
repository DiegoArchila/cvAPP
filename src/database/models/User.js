const { encrypt, validate } = require("../../lib/get.lib.js");

/**
 * User model representation
 * @param {import("sequelize").Sequelize} sequelize 
 * @param {import("sequelize").DataTypes} DataTypes 
 * @returns Sequelize User model
 */
module.exports = (sequelize, DataTypes) => {

  //Set the Alias
  const alias = "User";

  //Sets the columns
  const cols = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING(128),
      allowNull: false,
    },
    dateBorn: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    genderId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pwd: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false      
    },
    profi: {
        type: DataTypes.TEXT,
        allowNull:false
    },
    imagen: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue:"/img/userDefault.svg"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull:false
    },
    updated_at:  {
      type: DataTypes.DATE,
      allowNull:false
    },
    deleted_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  };

  //Sets configurations the from model or table
  const config = {
    tableName: "users",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
    deletedAt: "deleted_at",
    hooks:{
      beforeCreate: async (user) => {
        user.pwd = await encrypt(user.pwd);
      }
    }
  };

  //------------------------- Asignation
  const User = sequelize.define(alias, cols, config);
  
  /**
 * Function to compare PWD
 * @param {String} pwdString 
 * @returns 
 */
    User.prototype.validPwd= function (pwdString) {
    return validate(pwdString, this.pwd);
  }


  //------------------------- Relationship
  User.associate = function (models) {
    
    // Emails
    User.hasMany(models.Email, {
        as: "emails",
        foreignKey: "userId",
    });

    // Genres
    User.belongsTo(models.Gender, {
      as: "genders",
      foreignKey:"genderId"
    });

    // Phones
    User.hasMany(models.Phone, {
      as: "phones",
      foreignKey: "userId",
    });

    // Locations
    User.hasMany(models.Location, {
      as: "locations",
      foreignKey: "userId",
    });

    // Educations
    User.hasMany(models.Education, {
      as: "educations",
      foreignKey: "userId",
    });

    // Experience
    User.hasMany(models.Experience, {
      as: "experiences",
      foreignKey: "userId",
    });

  };

  //------------------------- Return
  return User;
  
};
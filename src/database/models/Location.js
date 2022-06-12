/**
 * Location model representation
 * @param {import("sequelize").Sequelize} sequelize 
 * @param {import("sequelize").DataTypes} DataTypes 
 * @returns Sequelize Location model
 */
 module.exports = (sequelize, DataTypes) => {
  
    //Set the Alias
    const alias = "Location";
  
    //Sets the columns
    const cols = {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      country: {
        type: DataTypes.STRING(256),
        allowNull: false,
      },
      state_province: {
        type: DataTypes.STRING(256),
        allowNull: false,
      },
      city_town: {
        type: DataTypes.STRING(256),
        allowNull: false,
      },
      addressLine: {
        type: DataTypes.STRING(256),
        allowNull: false,
      },
      descript: {
        type: DataTypes.STRING(256),
        allowNull:true
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
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
      tableName: "locations",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
    };
  
    //------------------------- Asignation
    const Location = sequelize.define(alias, cols, config);
  
    //------------------------- Relationship
    Location.associate = (models) => {
  
        //Locations -> Users
        Location.belongsTo(models.User, {
          as: "user",
          foreignKey: "userId",
        });    

    };
  
    //------------------------- Return
    return Location;
  
  };
/**
 * Phone model representation
 * @param {import("sequelize").Sequelize} sequelize 
 * @param {import("sequelize").DataTypes} DataTypes 
 * @returns Sequelize Phone model
 */
 module.exports = (sequelize, DataTypes) => {
  
    //Set the Alias
    const alias = "Phone";
  
    //Sets the columns
    const cols = {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING(64),
        allowNull: false,
        unique: true,
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
      tableName: "phones",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
    };
  
    //------------------------- Asignation
    const Phone = sequelize.define(alias, cols, config);
  
    //------------------------- Relationship
    Phone.associate = (models) => {
  
        //Phone -> Users
        Phone.belongsTo(models.User, {
          as: "user",
          foreignKey: "userId",
        });    

    };
  
    //------------------------- Return
    return Phone;
  
  };
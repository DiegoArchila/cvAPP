/**
 * Genre model representation
 * @param {import("sequelize").Sequelize} sequelize 
 * @param {import("sequelize").DataTypes} DataTypes 
 * @returns Sequelize Genre model
 */
 module.exports = (sequelize, DataTypes) => {
  
    //Set the Alias
    const alias = "Genre";
  
    //Sets the columns
    const cols = {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      genre: {
        type: DataTypes.STRING(256),
        allowNull: false,
        unique: true,
      },
      descript: {
        type: DataTypes.STRING(256),
        allowNull:true
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull:false
      },
      updated_at: {
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
      tableName: "genres",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
    };
  
    //------------------------- Asignation
    const Genre = sequelize.define(alias, cols, config);
  
    //------------------------- Relationship
    /**
     * Don't have Relations
     */
  
    //------------------------- Return
    return Genre;
  
  };
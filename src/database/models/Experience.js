/**
 * Experience model representation
 * @param {import("sequelize").Sequelize} sequelize 
 * @param {import("sequelize").DataTypes} DataTypes 
 * @returns Sequelize Experience model
 */
 module.exports = (sequelize, DataTypes) => {
  
    //Set the Alias
    const alias = "Experience";
  
    //Sets the columns
    const cols = {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      NameEntity: {
        type: DataTypes.STRING(256),
        allowNull: false,
      },
      _role: {
        type: DataTypes.STRING(256),
        allowNull: false,
      },
      _of: {
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      _to: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      file: {
        type: DataTypes.STRING(256),
        allowNull: true,
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
      tableName: "experiences",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: "deleted_at",
    };
  
    //------------------------- Asignation
    const Experience = sequelize.define(alias, cols, config);
  
    //------------------------- Relationship
    Experience.associate = (models) => {
  
        //Experience -> Users
        Experience.belongsTo(models.User, {
          as: "user",
          foreignKey: "userId",
        });    

    };
  
    //------------------------- Return
    return Experience;
  
  };
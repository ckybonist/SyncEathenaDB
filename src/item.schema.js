const Sequelize = require('sequelize');

module.exports = {
  schema: {
    ItemId: {
      type: Sequelize.INTEGER,
    },
    AegisName: {type: Sequelize.STRING},
    Name: {type: Sequelize.STRING},
    Type: {type: Sequelize.INTEGER},
    BuyPrice: {type: Sequelize.INTEGER},
    SellPrice: {type: Sequelize.INTEGER},
    Weight: {type: Sequelize.INTEGER},
    ATK: {type: Sequelize.INTEGER},
    DEF: {type: Sequelize.INTEGER},
    Range: {type: Sequelize.INTEGER},
    Slots: {type: Sequelize.INTEGER},
  },
};

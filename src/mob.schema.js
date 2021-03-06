const Sequelize = require('sequelize');

module.exports = {
  schema: {
    MobId : {
      type: Sequelize.INTEGER,
    },
    Sprite_Name : {type: Sequelize.STRING},
    kROName : {type: Sequelize.STRING},
    iROName : {type: Sequelize.STRING},
    LV : {type: Sequelize.INTEGER},
    HP : {type: Sequelize.INTEGER},
    SP : {type: Sequelize.INTEGER},
    EXP : {type: Sequelize.INTEGER},
    JEXP : {type: Sequelize.INTEGER},
    Range1 : {type: Sequelize.INTEGER},
    ATK1 : {type: Sequelize.INTEGER},
    ATK2 : {type: Sequelize.INTEGER},
    DEF : {type: Sequelize.INTEGER},
    MDEF : {type: Sequelize.INTEGER},
    STR : {type: Sequelize.INTEGER},
    AGI : {type: Sequelize.INTEGER},
    VIT : {type: Sequelize.INTEGER},
    INT : {type: Sequelize.INTEGER},
    DEX : {type: Sequelize.INTEGER},
    LUK : {type: Sequelize.INTEGER},
    Range2 : {type: Sequelize.INTEGER},
    Range3 : {type: Sequelize.INTEGER},
    Scale : {type: Sequelize.INTEGER},
    Race : {type: Sequelize.INTEGER},
    Element : {type: Sequelize.INTEGER},
    Mode : {type: Sequelize.INTEGER},
    Speed : {type: Sequelize.INTEGER},
    aDelay : {type: Sequelize.INTEGER},
    aMotion : {type: Sequelize.INTEGER},
    dMotion : {type: Sequelize.INTEGER},
    MEXP : {type: Sequelize.INTEGER},
    ExpPer : {type: Sequelize.INTEGER},
    MVP1id : {type: Sequelize.INTEGER},
    MVP1per : {type: Sequelize.INTEGER},
    MVP2id : {type: Sequelize.INTEGER},
    MVP2per : {type: Sequelize.INTEGER},
    MVP3id : {type: Sequelize.INTEGER},
    MVP3per : {type: Sequelize.INTEGER},
    Drop1id : {type: Sequelize.INTEGER},
    Drop1rate : {type: Sequelize.INTEGER},
    Drop2id : {type: Sequelize.INTEGER},
    Drop2rate : {type: Sequelize.INTEGER},
    Drop3id : {type: Sequelize.INTEGER},
    Drop3rate : {type: Sequelize.INTEGER},
    Drop4id : {type: Sequelize.INTEGER},
    Drop4rate : {type: Sequelize.INTEGER},
    Drop5id : {type: Sequelize.INTEGER},
    Drop5rate : {type: Sequelize.INTEGER},
    Drop6id : {type: Sequelize.INTEGER},
    Drop6rate : {type: Sequelize.INTEGER},
    Drop7Id : {type: Sequelize.INTEGER},
    Drop7rate : {type: Sequelize.INTEGER},
    Drop8id : {type: Sequelize.INTEGER},
    Drop8rate : {type: Sequelize.INTEGER},
    Drop9Id : {type: Sequelize.INTEGER},
    Drop9rate : {type: Sequelize.INTEGER},
    DropCardId : {type: Sequelize.INTEGER},
    DropCardRate : {type: Sequelize.INTEGER},
  },

  // This table schmea is not suitble for this DB, due to
  // many missing values in here, then it will mess in errors
  // about foreign keys constraint.
  dropSchema: {
    origItemId: {type: Sequelize.INTEGER},
    rate: {type: Sequelize.INTEGER},
  }
};

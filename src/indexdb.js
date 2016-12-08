const _ = require('lodash');
const path = require('path');
const csvParser = require('babyparse');
const Sequelize = require('sequelize');


const config = require('./config');
const ORM = new Sequelize('Ragnarok',
        config.mysql.user,
        config.mysql.password,
        config.sequelize);

const ItemSchema = require('./item.schema').schema;
const ItemModel = ORM.define('item', ItemSchema);
const MIN_ITEM_ID = 501;
const MAX_ITEM_ID = 18503;

const MobSchema = require('./mob.schema').schema;
const MobModel = ORM.define('mob', MobSchema);
const NUM_DROP_FIELDS = 20;  // include dropId and dropRate

const paths = ['./db/item_db.csv', './db/mob_db.csv'].map(p => path.resolve(p));
const itemRows = csvParser.parseFiles(paths[0]).data;
const mobRows = csvParser.parseFiles(paths[1]).data
                  .map(row => row.map(toInt));


// ==================== MAIN ==================

module.exports = main;

function main () {
  ORM.sync({ force: true })
    .then(() => {
      console.log('😅 Done creating table schema');
      createItemTable();
      createMobTable();
    }, (err) => {
      console.error('😢 An error occurred while creating the table:', err);
    });
}

// ==================== MAIN ==================



function createItemTable() {
  for (const row of itemRows) {
    const fields = Object.keys(ItemSchema);
    const data = row.slice(0, fields.length).map(toInt);
    const item = createObjWithFields(fields, data);
    ItemModel.create(item).catch(err => {
      console.error(err);
    });
  }
}

function createMobTable() {
  for (const row of mobRows) {
    const fields = Object.keys(MobSchema);
    //const data = row.slice(0, row.length - NUM_DROP_FIELDS);
    const mob = createObjWithFields(fields, row);

    MobModel.create(mob).catch(err => {
      console.error(err);
    });
  }
}

function createObjWithFields(fields, data) {
  const obj = {};

  if (fields.length !== data.length) {
    console.error('💩 Legnth of fields not comfort with length of data.');
    process.exit(1);
  }

  for (let i = 0; i < data.length; i++) {
    obj[fields[i]] = data[i];
  }

  return obj;
}

// function createDropItems(dropsInfo) {
//   const dropItems = [];
//   const dropChunks = _.chunk(dropsInfo, 2);
//
//   return dropChunks.map(chk => (
//     { mobId: 1003, itemId: 523, rate: chk[1] }
//   ));
// }

function toInt(s) {
  let num = parseInt(s);

  if (isNaN(num)) {
    if (s.length > 0)
      return s;
    num = dice(80, 1000);
  }

  return num;
}

function dice(min, max) {
  const boundary = (max-min+1) + min;
  return Math.floor(Math.random() * boundary);
}

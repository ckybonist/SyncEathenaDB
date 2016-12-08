// Refine raw TXT-formatted db files to CSV.
const refineRawDB = require('./src/parse');
// Index CSV db files to MySQL.
const indexMyDB = require('./src/indexdb');

refineRawDB();
indexMyDB();

const fs = require('fs');
const path = require('path');
const lineReader = require('line-by-line');
const readline = require('readline');

module.exports = main;

function main() {
  const dbRoot = './rawdb'
  const dbPaths = [
    `${dbRoot}/item_db.txt`,
    `${dbRoot}/mob_db.txt`,
  ].map(p => path.resolve(p));

  for (const mydb of dbPaths) {
    parse(mydb);
  }
};

function parse(mydb) {
  const data = [];
  const filename = mydb.split('/').pop().replace(/\.[^/.]+$/, "");;

  const lr = new lineReader(mydb, {
    encoding: 'utf8',
    skipEmptyLines: true
  });

  lr.on('error', (err) => {
    console.error(err);
  });

  lr.on('line', (line) => {
    const tLine = line.trim();
    if (!tLine.includes('//')) {
      data.push(tLine);
    }
  });

  lr.on('end', () => {
    fs.writeFile(`./db/${filename}.csv`, data.join('\n'), (err) => {
      if(err) console.error(err);
    });
  });
}

const Promise = require('bluebird');
const fs = Promise.promisifyAll(require('fs'));
const path = require('path');

const files = ['./a.txt', './b.txt', './c.txt'];

// Paradigm 1
const readStuff = (filename) => {
  return fs.readFileAsync(path.resolve('./test', filename), 'utf8');
};

const withMiaoStyle = (strs) => strs.map(s => `😸 ${s}`.trim('\n'));

Promise.all(files.map(readStuff)).then(values => {
  const miaoStrings = withMiaoStyle(values);
  console.log(`With Promise.all: ${miaoStrings}`);
})
.catch(err => {
  console.error(err);
});


// Paradigm 2
const willGetCached = asyncLoop();
willGetCached.then(cached => {
  const miaoStrings = withMiaoStyle(cached);
  console.log(miaoStrings);
})

async function asyncLoop() {
  const cached = [];

  for (const filename of files) {
    try {
      const value = await readStuff(filename);
      cached.push(value);
    } catch(err) {
      console.error(err);
    }
  }

  return cached;
}

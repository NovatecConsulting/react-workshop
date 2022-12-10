
const LEVELS = require('../../src/_data/levels').levels;

function sortByLevel(a, b) {
  const aLevel = a.data.level ? LEVELS.indexOf(a.data.level) : -1;
  const bLevel = b.data.level ? LEVELS.indexOf(b.data.level) : -1;
  return aLevel - bLevel;
}

function sortByOrder(a, b) {
  const aOrder = a.data.order ? parseInt(a.data.order, 10) : 0;
  const bOrder = b.data.order ? parseInt(b.data.order, 10) : 0;
  return aOrder - bOrder;
}

function sortCombine(aFunc, bFunc) {
  return (a, b) => {
    return aFunc(a, b) || bFunc(a, b);
  }
}

module.exports = { sortByLevel, sortByOrder, sortCombine };

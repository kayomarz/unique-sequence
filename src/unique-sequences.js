const NUM = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const ALPHA_UPPER = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

const ALPHA_LOWER = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

const ALPHA_NUM_UPPER = [...NUM, ...ALPHA_UPPER];

const ALPHA_NUM_LOWER = [...NUM, ...ALPHA_LOWER];

function generator(list) {
  const MIN_LEN = 2;
  const MAX_LEN = 36;
  const len = list.length;
  if (len < MIN_LEN) {
    throw new Error(`mininum list length is ${MIN_LEN}, got ${len}.`);
  }
  if (len > MAX_LEN) {
    throw new Error(`maximum list length is ${MAX_LEN}, got ${len}.`);
  }
  let count = 0;
  return function* gen() {
    while (true) {
      const strIndices = [...count.toString(len)];
      const indices = strIndices.map(num => parseInt(num, len));
      const val = indices.map(i => list[i]).join('');
      yield val;
      count++;
    }
  };
}

function generatorCustom(list) { return generator(list)(); }
function generatorNum() { return generator(NUM)(); }
function generatorAlphaUpper() { return generator(ALPHA_UPPER)(); }
function generatorAlphaLower() { return generator(ALPHA_LOWER)(); }
function generatorAlphaNumUpper() { return generator(ALPHA_NUM_UPPER)(); }
function generatorAlphaNumLower() { return generator(ALPHA_NUM_LOWER)(); }

module.exports.generatorCustom = generatorCustom;
module.exports.generatorNum = generatorNum;
module.exports.generatorAlphaUpper = generatorAlphaUpper;
module.exports.generatorAlphaLower = generatorAlphaLower;
module.exports.generatorAlphaNumUpper = generatorAlphaNumUpper;
module.exports.generatorAlphaNumLower = generatorAlphaNumLower;

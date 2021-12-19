// To run this example:
// node 01-unique-sequence.js

const {
  generatorCustom,
  generatorNum,
  generatorAlphaUpper,
  generatorAlphaLower,
  generatorAlphaNumUpper,
  generatorAlphaNumLower,
} = require('unique-sequence');

/* Let's generate a sequence using two elements 'a' and 'b' */
const list = ['a', 'b']; // NOTE: length must be 2 to 36.
const gen2 = generatorCustom(list);
console.log(gen2.next().value); // a
console.log(gen2.next().value); // b
console.log(gen2.next().value); // ba
console.log(gen2.next().value); // bb
console.log(gen2.next().value); // baa
console.log(gen2.next().value); // bab
console.log(gen2.next().value); // bba
console.log(gen2.next().value); // bbb
console.log(gen2.next().value); // baaa

/* Let's generate sequence using two elements 'a' and 'b' */
const gen3 = generatorCustom(['x', 'y', 'z']);
console.log(gen3.next().value); // x
console.log(gen3.next().value); // y
console.log(gen3.next().value); // z
console.log(gen3.next().value); // yx
console.log(gen3.next().value); // yy
console.log(gen3.next().value); // yz
console.log(gen3.next().value); // zx
console.log(gen3.next().value); // zy
console.log(gen3.next().value); // zz
console.log(gen3.next().value); // yxx

/* Let's make a helper to iterate over the sequence generator  */
function times(gen, count = 64) {
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(gen.next().value);
  }
  return arr;
}

// Generate 10 sequences, just like our previous example.
console.log(times(generatorCustom(['x', 'y', 'z']), 10));
// [
//   'x',   'y',  'z',
//   'yx',  'yy', 'yz',
//   'zx',  'zy', 'zz',
//   'yxx'
// ]

/* Let's generate 64 sequences using upercase latin alphabets */
console.log(times(generatorAlphaUpper())); // 64 is the default
// [
//   'A',  'B',  'C',  'D',  'E',  'F',  'G',  'H',
//   'I',  'J',  'K',  'L',  'M',  'N',  'O',  'P',
//   'Q',  'R',  'S',  'T',  'U',  'V',  'W',  'X',
//   'Y',  'Z',  'BA', 'BB', 'BC', 'BD', 'BE', 'BF',
//   'BG', 'BH', 'BI', 'BJ', 'BK', 'BL', 'BM', 'BN',
//   'BO', 'BP', 'BQ', 'BR', 'BS', 'BT', 'BU', 'BV',
//   'BW', 'BX', 'BY', 'BZ', 'CA', 'CB', 'CC', 'CD',
//   'CE', 'CF', 'CG', 'CH', 'CI', 'CJ', 'CK', 'CL'
// ]

/* We can generate lower case too */

console.log(times(generatorAlphaLower()));
// [
//   'a',  'b',  'c',  'd',  'e',  'f',  'g',  'h',
//   'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',
//   'q',  'r',  's',  't',  'u',  'v',  'w',  'x',
//   'y',  'z',  'ba', 'bb', 'bc', 'bd', 'be', 'bf',
//   'bg', 'bh', 'bi', 'bj', 'bk', 'bl', 'bm', 'bn',
//   'bo', 'bp', 'bq', 'br', 'bs', 'bt', 'bu', 'bv',
//   'bw', 'bx', 'by', 'bz', 'ca', 'cb', 'cc', 'cd',
//   'ce', 'cf', 'cg', 'ch', 'ci', 'cj', 'ck', 'cl'
// ]

/* There is Alpha Numeric too */
console.log(times(generatorAlphaNumLower()));
// [
//   '0',  '1',  '2',  '3',  '4',  '5',  '6',  '7',
//   '8',  '9',  'a',  'b',  'c',  'd',  'e',  'f',
//   'g',  'h',  'i',  'j',  'k',  'l',  'm',  'n',
//   'o',  'p',  'q',  'r',  's',  't',  'u',  'v',
//   'w',  'x',  'y',  'z',  '10', '11', '12', '13',
//   '14', '15', '16', '17', '18', '19', '1a', '1b',
//   '1c', '1d', '1e', '1f', '1g', '1h', '1i', '1j',
//   '1k', '1l', '1m', '1n', '1o', '1p', '1q', '1r'
// ]

/* Alpha Numeric in upper case */
console.log(times(generatorAlphaNumUpper()));
// [
//   '0',  '1',  '2',  '3',  '4',  '5',  '6',  '7',
//   '8',  '9',  'A',  'B',  'C',  'D',  'E',  'F',
//   'G',  'H',  'I',  'J',  'K',  'L',  'M',  'N',
//   'O',  'P',  'Q',  'R',  'S',  'T',  'U',  'V',
//   'W',  'X',  'Y',  'Z',  '10', '11', '12', '13',
//   '14', '15', '16', '17', '18', '19', '1A', '1B',
//   '1C', '1D', '1E', '1F', '1G', '1H', '1I', '1J',
//   '1K', '1L', '1M', '1N', '1O', '1P', '1Q', '1R'
// ]

/* For the sake of completion too, we can use only numbers */
console.log(times(generatorNum()));
// [
//   '0',  '1',  '2',  '3',  '4',  '5',  '6',  '7',
//   '8',  '9',  '10', '11', '12', '13', '14', '15',
//   '16', '17', '18', '19', '20', '21', '22', '23',
//   '24', '25', '26', '27', '28', '29', '30', '31',
//   '32', '33', '34', '35', '36', '37', '38', '39',
//   '40', '41', '42', '43', '44', '45', '46', '47',
//   '48', '49', '50', '51', '52', '53', '54', '55',
//   '56', '57', '58', '59', '60', '61', '62', '63'
// ]

/* Let's have some fun! */
console.log(times(generatorCustom(['rat,', 'a', 'tat'])));
// [
//   'rat,',            'a',            'tat',
//   'arat,',           'aa',           'atat',
//   'tatrat,',         'tata',         'tattat',
//   'arat,rat,',       'arat,a',       'arat,tat',
//   'aarat,',          'aaa',          'aatat',
//   'atatrat,',        'atata',        'atattat',
//   'tatrat,rat,',     'tatrat,a',     'tatrat,tat',
//   'tatarat,',        'tataa',        'tatatat',
//   'tattatrat,',      'tattata',      'tattattat',
//   'arat,rat,rat,',   'arat,rat,a',   'arat,rat,tat',
//   'arat,arat,',      'arat,aa',      'arat,atat',
//   'arat,tatrat,',    'arat,tata',    'arat,tattat',
//   'aarat,rat,',      'aarat,a',      'aarat,tat',
//   'aaarat,',         'aaaa',         'aaatat',
//   'aatatrat,',       'aatata',       'aatattat',
//   'atatrat,rat,',    'atatrat,a',    'atatrat,tat',
//   'atatarat,',       'atataa',       'atatatat',
//   'atattatrat,',     'atattata',     'atattattat',
//   'tatrat,rat,rat,', 'tatrat,rat,a', 'tatrat,rat,tat',
//   'tatrat,arat,',    'tatrat,aa',    'tatrat,atat',
//   'tatrat,tatrat,',  'tatrat,tata',  'tatrat,tattat',
//   'tatarat,rat,'
// ]

/* Again, lets generate using all latin alphabets */
console.log(times(generatorCustom([
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
  'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
  'y', 'z',
])));
// [
//   'a',  'b',  'c',  'd',  'e',  'f',  'g',  'h',
//   'i',  'j',  'k',  'l',  'm',  'n',  'o',  'p',
//   'q',  'r',  's',  't',  'u',  'v',  'w',  'x',
//   'y',  'z',  'ba', 'bb', 'bc', 'bd', 'be', 'bf',
//   'bg', 'bh', 'bi', 'bj', 'bk', 'bl', 'bm', 'bn',
//   'bo', 'bp', 'bq', 'br', 'bs', 'bt', 'bu', 'bv',
//   'bw', 'bx', 'by', 'bz', 'ca', 'cb', 'cc', 'cd',
//   'ce', 'cf', 'cg', 'ch', 'ci', 'cj', 'ck', 'cl'
// ]

/* Lastly, lets give a shot at using using upper and lower cases */
try {
console.log(times(generatorCustom([
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
  'q', 'r', 's', 't', 'u', 'v', 'w', 'x',
  'y', 'z',
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
  'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
  'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z',
])));
} catch (e) {
  console.error('error:', e.message);
}
// error: maximum list length is 36, got 52.

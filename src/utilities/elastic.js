const insertWildcards = (term) => (term ? `*${term.split(' ')
  .filter(e => e)
  .reduce((a, b) => (/[^a-z_\-0-9]/i.test(a.slice(-1)) ? `${a} ${b}` : `${a}* *${b}`))
  .replace(/\*+/g, '*')}*` : '*');

const prepareQuery = (term) => {
  return term.trim();
};

export default prepareQuery;

const insertWildcards = (term) => {
  // Add fuzziness
  // eslint-disable-next-line no-undef
  if (mw.config.values.WikiSearchFront.config.settings['fuzzy search'] === 'true') {
    return term.split(' ').join('~ ').trim().concat('~');
  }

  return (term ? `*${term.split(' ')
    .filter(e => e)
    .reduce((a, b) => (/[^a-z_\-0-9]/i.test(a.slice(-1)) ? `${a} ${b}` : `${a}* *${b}`))
    .replace(/\*+/g, '*')}*` : '*');
};

const prepareQuery = (term) => {
  let searchTerm = term.trim();
  if (searchTerm.length === 0) {
    return '*';
  }
  searchTerm = searchTerm
    .replace(/(:|\+|=|\/)/g, '\\$1');

  return ['"', "'", 'AND', 'NOT', 'OR', '~', '(', ')', '?', '*', ' -']
    .reduce((a, b) => a || searchTerm.indexOf(b) !== -1, false)
    ? searchTerm
    : insertWildcards(searchTerm);
};

export default prepareQuery;

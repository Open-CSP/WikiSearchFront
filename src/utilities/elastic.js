const insertWildcards = (term) => term.split(/((?<=[a-zA-Z_\-0-9])(?=$|[^a-zA-Z_\-0-9])\s*)/gm)
  .map((t, i) => (i % 2 === 0 && t ? `*{${t}}*` : ''))
  .join('');

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

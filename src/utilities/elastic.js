const insertWildcards = (term) => {
  const terms = term.split(/(?<=[a-zA-Z_\-0-9])(?=$|[^a-zA-Z_\-0-9])\s*)/gm);
  terms.forEach((t,i) => );
};

const prepareQuery = (term) => {
  let searchTerm = term.trim();
  if (searchTerm.length === 0) {
    return '*';
  }
  searchTerm = searchTerm
    .replaceAll('/', '')
    .replaceAll(':', '\\:')
    .replaceAll('+', '\\+')
    .replaceAll('=', '\\=');

  const advancedSearchChars = ['"', "'", 'AND', 'NOT', 'OR', '~', '(', ')', '?', '*', ' -'];
  const isAdvancedQuery = advancedSearchChars
    .reduce((a, b) => a || searchTerm.indexOf(b) !== -1, false);
  if (!isAdvancedQuery) {
    searchTerm = insertWildcards(searchTerm);
  }

  return searchTerm;
};

export default prepareQuery;

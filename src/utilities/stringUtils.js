/**
 * @param {String}
 * @returns {String} striped from special characters
 */
function strip(string) {
  return string.toLowerCase().replace(/[^a-z0-9]/gim, '_');
}
/**
 * @param {String} string
 * @returns {String} escaped from xss danger
 */
function sanitize(string) {
  const lt = /</g;
  const gt = />/g;
  const ap = /'/g;
  const ic = /"/g;
  const preTag = /{@@_HIGHLIGHT_@@/g;
  const postTag = /@@_HIGHLIGHT_@@}/g;
  return string
    .replace(lt, '&lt;')
    .replace(gt, '&gt;')
    .replace(ap, '&#39;')
    .replace(ic, '&#34;')
    .replace(preTag, '<b class="wikisearch-term-highlight">')
    .replace(postTag, '</b>');
}

export { strip, sanitize };

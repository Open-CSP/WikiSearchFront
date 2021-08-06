Vue.prototype.$i18n = function () {
  return mw.message.apply(mw, arguments);
};

Vue.directive("i18n-html", function (el, binding) {
  var message;
  /* eslint-disable mediawiki/msg-doc */
  if (Array.isArray(binding.value)) {
    if (binding.arg === undefined) {
      // v-i18n-html="[ ...params ]" (error)
      throw new Error(
        "v-i18n-html used with parameter array but without message key"
      );
    }
    // v-i18n-html:messageKey="[ ...params ]"
    message = mw.message(binding.arg).params(binding.value);
  } else if (binding.value instanceof mw.Message) {
    // v-i18n-html="mw.message( '...' ).params( [ ... ] )"
    message = binding.value;
  } else {
    // v-i18n-html:foo or v-i18n-html="'foo'"
    message = mw.message(binding.arg || binding.value);
  }
  /* eslint-enable mediawiki/msg-doc */

  el.innerHTML = message.parse();
});

new Vue({
  render: (h) => h(wssearch),
}).$mount("#app");

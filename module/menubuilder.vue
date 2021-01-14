<template>
  <div  :class="dragging">
    <div style="display:none" id="clonetainer">
      <li id="clone">
        <span>clone</span>
      </li>
      <ul id="clone-group">
        <li >
          <span>clone</span>
        </li>
      </ul>
    </div>
    <select @change="getmenu"  class="form-control"  v-if="!selectedmenu"><!-- v-if="!namespace" -->
      <option disabled selected>Select a menu</option>
      <option v-for="menu in menus" :value="menu">{{menu}}</option>
    </select>{{checkmenus}}
    <div v-if="selectedmenu || menus.length < 2" style="display: grid;grid-template-columns: 2fr 1fr;">
      <div style="display: grid;grid-template-columns: 1fr 1fr;">
        <tree v-for="tree in trees" :dragitems="tree.dragitems" :name="tree.name" class="menu-tree">
          <i class="ml-2 fa fa-info-circle btn"  v-if="tree.isfirst"></i>
          <div class="info-box" v-if="tree.isfirst" >
            <div class="text-left">
              To create a new link in your hub's menu tree, drag the new link button to the place you want it. You can also drag existing links up, down or sideways to create your tree.
            </div>
            <br><br><br><br><br><br>
            <div class="text-left">
              Be sure to save any changes to the menu tree by clicking the <strong>Save menu</strong> button! If you don't want to save, just go to another page and your changes will not be saved.<br><br>
              <button @click="savemenu" class="btn btn-primary" >Save menu</button>
            </div>
          </div>
        </tree><!--- menu-items -->
      </div>
      <div class="menu-form" v-show="!$store.getters.selected">
        <i class="ml-2 fa fa-info-circle btn"  ></i>
        <div class="info-box">
          Select a link in your hub's menu tree to show its properties.<br><br>
          You can change its type (either an external link or a page on KnowledgeHub), what it links to, and the icon to use for the link.<br><br>
          You can also delete links you don't want.<br><br><br>
          Use the + and - icons on the tree to expand or collapse the tree.<br>
        </div>
      </div>
      <div class="menu-form" v-show="$store.getters.selected">
          <label>
          Type
          <select @change="inputtype" :value="Type" class="form-control" >
            <option disabled selected>Select a type</option>
            <option value="page">Page</option>
            <option value="external">External</option>
            <option v-if="!space" value="template">Template</option>
          </select>
        </label>
        <label v-show="space ? !isPageType : true">
          Text
          <input id="textmenu" @input="input" type="text" :value="Title"  class="form-control" >
        </label>
        <label v-if="!isPageType" >
          {{Type}}
          <input @input="inputhref" type="text" :value="Href" class="form-control" >
        </label>
        <label v-if="isPageType" >
          Page
          <search-select :namespace="space" :selected="space ? Title : Href"></search-select>
        </label>
        <label @click.prevent="showsearch" >
          Icon
          <input v-show="!$store.getters.ifsearch"  type="text" @change="inputicon"  :value="Icon"  class="form-control"/>
        </label>
        <div v-show="$store.getters.ifsearch" id="fasearch" >
          <input  type="text" v-model="search"   class="form-control"  >
          <div class="icon-list">
            <fav v-for="(result, index) in filterresult" :result="result" :key="index" :index="index"  ></fav>
          </div>
        </div>
        <label v-if="permission">
          Permission
          <select class="form-control" >
            <option disabled selected>Select a permission</option>
            <option >None</option>
            <option value="Admin">Admin</option>
            <option value="Space">Space</option>
          </select>
        </label>
        <button class="btn float-right btn-close mt-3" @click="removeItem" >
          Remove Link
          <i class="fa fa-times ml-3"></i>
        </button>
      </div>
    </div>
  </div>
</template>

<script>

module.exports = {
  components: {
    'tree': require( './tree.vue' ),
    'search-select': require( './search-select.vue' ),
    'fav': require( './fav.vue' )

},
  computed: {
    filterresult(){
      if(this.search && this.search != 'None'){
        var search = this.search.replace('/','\/');
        var favs = this.faicons;
        var regex = new RegExp(search, 'i');
        var filtered = favs.filter(
        function(key, index){
          if(regex.exec(key)){
            return favs[index];
          }
        })
        if( filtered.length){
          return filtered;
        }else{
          return ['no results']
        }
      }else{
        this.search = "";
        return this.faicons;
      }
    },
    selectedmenu(){
        return this.selectedmenu;
    },
    isPageType(){
      if(this.$store.getters.selected && this.$store.getters.selected.dragitem.printouts.Type[0] == "page"){
        return true;
      }
    },
    infodrag(){
      if(this.info){
        return 'info-drag';
      }else{
        return 'info-drag in';
      }
    },
    checkmenus(){
      console.log(this.menus);
      if(this.menus.length < 2){
        this.tasksToDo(this.menus[0]);
        this.selectedmenu = true;
      //  this.getpages();
      }
    },
    Title() {
      if(this.$store.getters.selected){
        return this.$store.getters.selected.dragitem.printouts.Text[0];
      }
    },
    Href() {
      if(this.$store.getters.selected && this.$store.getters.selected.dragitem.printouts.Href){
        return this.$store.getters.selected.dragitem.printouts.Href[0];
      }
    },
    Type() {
      if(this.$store.getters.selected && this.$store.getters.selected.dragitem.printouts.Type){
        return this.$store.getters.selected.dragitem.printouts.Type[0];
      }
    },
    Icon() {
      if(this.$store.getters.selected && this.$store.getters.selected.dragitem.printouts.Icon){
        return this.$store.getters.selected.dragitem.printouts.Icon[0];
      }
    },
    dragging(){
      if(this.$store.getters.dragging){
        return 'dragging';
      }
    }
  },
  data: function(){
    return {
      trees:[{
        isfirst:true,
        name:"Menu items",
        dragitems: [{
          printouts: {
            Id:["page"],
            Type:["page"],
            Text: ["new link"],
            Icon: ["none"],
            Href: ["link"]
          },
          dragchildren: []
        }]
      }],
      selectedmenu:false,
      pages:{},
      nwtree:[],
      search:"",
      space:document.querySelector('#vuedata').dataset.space,
      permission:"",
      menus:document.querySelector('#vuedata').dataset.menus.split(","),
      info:false,
      pause:true,
      help:false,
      faicons:["None", "fa-address-book", "fa-address-book-o", "fa-address-card", "fa-address-card-o", "fa-adjust", "fa-adn", "fa-align-center", "fa-align-justify", "fa-align-left", "fa-align-right", "fa-amazon", "fa-ambulance", "fa-american-sign-language-interpreting", "fa-anchor", "fa-android", "fa-angellist", "fa-angle-double-down", "fa-angle-double-left", "fa-angle-double-right", "fa-angle-double-up", "fa-angle-down", "fa-angle-left", "fa-angle-right", "fa-angle-up", "fa-apple", "fa-archive", "fa-area-chart", "fa-arrow-circle-down", "fa-arrow-circle-left", "fa-arrow-circle-o-down", "fa-arrow-circle-o-left", "fa-arrow-circle-o-right", "fa-arrow-circle-o-up", "fa-arrow-circle-right", "fa-arrow-circle-up", "fa-arrow-down", "fa-arrow-left", "fa-arrow-right", "fa-arrow-up", "fa-arrows", "fa-arrows-alt", "fa-arrows-h", "fa-arrows-v", "fa-asl-interpreting", "fa-assistive-listening-systems", "fa-asterisk", "fa-at", "fa-audio-description", "fa-automobile", "fa-backward", "fa-balance-scale", "fa-ban", "fa-bandcamp", "fa-bank", "fa-bar-chart", "fa-bar-chart-o", "fa-barcode", "fa-bars", "fa-bath", "fa-bathtub", "fa-battery", "fa-battery-0", "fa-battery-1", "fa-battery-2", "fa-battery-3", "fa-battery-4", "fa-battery-empty", "fa-battery-full", "fa-battery-half", "fa-battery-quarter", "fa-battery-three-quarters", "fa-bed", "fa-beer", "fa-behance", "fa-behance-square", "fa-bell", "fa-bell-o", "fa-bell-slash", "fa-bell-slash-o", "fa-bicycle", "fa-binoculars", "fa-birthday-cake", "fa-bitbucket", "fa-bitbucket-square", "fa-bitcoin", "fa-black-tie", "fa-blind", "fa-bluetooth", "fa-bluetooth-b", "fa-bold", "fa-bolt", "fa-bomb", "fa-book", "fa-bookmark", "fa-bookmark-o", "fa-braille", "fa-briefcase", "fa-btc", "fa-bug", "fa-building", "fa-building-o", "fa-bullhorn", "fa-bullseye", "fa-bus", "fa-buysellads", "fa-cab", "fa-calculator", "fa-calendar", "fa-calendar-check-o", "fa-calendar-minus-o", "fa-calendar-o", "fa-calendar-plus-o", "fa-calendar-times-o", "fa-camera", "fa-camera-retro", "fa-car", "fa-caret-down", "fa-caret-left", "fa-caret-right", "fa-caret-square-o-down", "fa-caret-square-o-left", "fa-caret-square-o-right", "fa-caret-square-o-up", "fa-caret-up", "fa-cart-arrow-down", "fa-cart-plus", "fa-cc", "fa-cc-amex", "fa-cc-diners-club", "fa-cc-discover", "fa-cc-jcb", "fa-cc-mastercard", "fa-cc-paypal", "fa-cc-stripe", "fa-cc-visa", "fa-certificate", "fa-chain", "fa-chain-broken", "fa-check", "fa-check-circle", "fa-check-circle-o", "fa-check-square", "fa-check-square-o", "fa-chevron-circle-down", "fa-chevron-circle-left", "fa-chevron-circle-right", "fa-chevron-circle-up", "fa-chevron-down", "fa-chevron-left", "fa-chevron-right", "fa-chevron-up", "fa-child", "fa-chrome", "fa-circle", "fa-circle-o", "fa-circle-o-notch", "fa-circle-thin", "fa-clipboard", "fa-clock-o", "fa-clone", "fa-close", "fa-cloud", "fa-cloud-download", "fa-cloud-upload", "fa-cny", "fa-code", "fa-code-fork", "fa-codepen", "fa-codiepie", "fa-coffee", "fa-cog", "fa-cogs", "fa-columns", "fa-comment", "fa-comment-o", "fa-commenting", "fa-commenting-o", "fa-comments", "fa-comments-o", "fa-compass", "fa-compress", "fa-connectdevelop", "fa-contao", "fa-copy", "fa-copyright", "fa-creative-commons", "fa-credit-card", "fa-credit-card-alt", "fa-crop", "fa-crosshairs", "fa-css3", "fa-cube", "fa-cubes", "fa-cut", "fa-cutlery", "fa-dashboard", "fa-dashcube", "fa-database", "fa-deaf", "fa-deafness", "fa-dedent", "fa-delicious", "fa-desktop", "fa-deviantart", "fa-diamond", "fa-digg", "fa-dollar", "fa-dot-circle-o", "fa-download", "fa-dribbble", "fa-drivers-license", "fa-drivers-license-o", "fa-dropbox", "fa-drupal", "fa-edge", "fa-edit", "fa-eercast", "fa-eject", "fa-ellipsis-h", "fa-ellipsis-v", "fa-empire", "fa-envelope", "fa-envelope-o", "fa-envelope-open", "fa-envelope-open-o", "fa-envelope-square", "fa-envira", "fa-eraser", "fa-etsy", "fa-eur", "fa-euro", "fa-exchange", "fa-exclamation", "fa-exclamation-circle", "fa-exclamation-triangle", "fa-expand", "fa-expeditedssl", "fa-external-link", "fa-external-link-square", "fa-eye", "fa-eye-slash", "fa-eyedropper", "fa-fa", "fa-facebook", "fa-facebook-f", "fa-facebook-official", "fa-facebook-square", "fa-fast-backward", "fa-fast-forward", "fa-fax", "fa-feed", "fa-female", "fa-fighter-jet", "fa-file", "fa-file-archive-o", "fa-file-audio-o", "fa-file-code-o", "fa-file-excel-o", "fa-file-image-o", "fa-file-movie-o", "fa-file-o", "fa-file-pdf-o", "fa-file-photo-o", "fa-file-picture-o", "fa-file-powerpoint-o", "fa-file-sound-o", "fa-file-text", "fa-file-text-o", "fa-file-video-o", "fa-file-word-o", "fa-file-zip-o", "fa-files-o", "fa-film", "fa-filter", "fa-fire", "fa-fire-extinguisher", "fa-firefox", "fa-first-order", "fa-flag", "fa-flag-checkered", "fa-flag-o", "fa-flash", "fa-flask", "fa-flickr", "fa-floppy-o", "fa-folder", "fa-folder-o", "fa-folder-open", "fa-folder-open-o", "fa-font", "fa-font-awesome", "fa-fonticons", "fa-fort-awesome", "fa-forumbee", "fa-forward", "fa-foursquare", "fa-free-code-camp", "fa-frown-o", "fa-futbol-o", "fa-gamepad", "fa-gavel", "fa-gbp", "fa-ge", "fa-gear", "fa-gears", "fa-genderless", "fa-get-pocket", "fa-gg", "fa-gg-circle", "fa-gift", "fa-git", "fa-git-square", "fa-github", "fa-github-alt", "fa-github-square", "fa-gitlab", "fa-gittip", "fa-glass", "fa-glide", "fa-glide-g", "fa-globe", "fa-google", "fa-google-plus", "fa-google-plus-circle", "fa-google-plus-official", "fa-google-plus-square", "fa-google-wallet", "fa-graduation-cap", "fa-gratipay", "fa-grav", "fa-group", "fa-h-square", "fa-hacker-news", "fa-hand-grab-o", "fa-hand-lizard-o", "fa-hand-o-down", "fa-hand-o-left", "fa-hand-o-right", "fa-hand-o-up", "fa-hand-paper-o", "fa-hand-peace-o", "fa-hand-pointer-o", "fa-hand-rock-o", "fa-hand-scissors-o", "fa-hand-spock-o", "fa-hand-stop-o", "fa-handshake-o", "fa-hard-of-hearing", "fa-hashtag", "fa-hdd-o", "fa-header", "fa-headphones", "fa-heart", "fa-heart-o", "fa-heartbeat", "fa-history", "fa-home", "fa-hospital-o", "fa-hotel", "fa-hourglass", "fa-hourglass-1", "fa-hourglass-2", "fa-hourglass-3", "fa-hourglass-end", "fa-hourglass-half", "fa-hourglass-o", "fa-hourglass-start", "fa-houzz", "fa-html5", "fa-i-cursor", "fa-id-badge", "fa-id-card", "fa-id-card-o", "fa-ils", "fa-image", "fa-imdb", "fa-inbox", "fa-indent", "fa-industry", "fa-info", "fa-info-circle", "fa-inr", "fa-instagram", "fa-institution", "fa-internet-explorer", "fa-intersex", "fa-ioxhost", "fa-italic", "fa-joomla", "fa-jpy", "fa-jsfiddle", "fa-key", "fa-keyboard-o", "fa-krw", "fa-language", "fa-laptop", "fa-lastfm", "fa-lastfm-square", "fa-leaf", "fa-leanpub", "fa-legal", "fa-lemon-o", "fa-level-down", "fa-level-up", "fa-life-bouy", "fa-life-buoy", "fa-life-ring", "fa-life-saver", "fa-lightbulb-o", "fa-line-chart", "fa-link", "fa-linkedin", "fa-linkedin-square", "fa-linode", "fa-linux", "fa-list", "fa-list-alt", "fa-list-ol", "fa-list-ul", "fa-location-arrow", "fa-lock", "fa-long-arrow-down", "fa-long-arrow-left", "fa-long-arrow-right", "fa-long-arrow-up", "fa-low-vision", "fa-magic", "fa-magnet", "fa-mail-forward", "fa-mail-reply", "fa-mail-reply-all", "fa-male", "fa-map", "fa-map-marker", "fa-map-o", "fa-map-pin", "fa-map-signs", "fa-mars", "fa-mars-double", "fa-mars-stroke", "fa-mars-stroke-h", "fa-mars-stroke-v", "fa-maxcdn", "fa-meanpath", "fa-medium", "fa-medkit", "fa-meetup", "fa-meh-o", "fa-mercury", "fa-microchip", "fa-microphone", "fa-microphone-slash", "fa-minus", "fa-minus-circle", "fa-minus-square", "fa-minus-square-o", "fa-mixcloud", "fa-mobile", "fa-mobile-phone", "fa-modx", "fa-money", "fa-moon-o", "fa-mortar-board", "fa-motorcycle", "fa-mouse-pointer", "fa-music", "fa-navicon", "fa-neuter", "fa-newspaper-o", "fa-object-group", "fa-object-ungroup", "fa-odnoklassniki", "fa-odnoklassniki-square", "fa-opencart", "fa-openid", "fa-opera", "fa-optin-monster", "fa-outdent", "fa-pagelines", "fa-paint-brush", "fa-paper-plane", "fa-paper-plane-o", "fa-paperclip", "fa-paragraph", "fa-paste", "fa-pause", "fa-pause-circle", "fa-pause-circle-o", "fa-paw", "fa-paypal", "fa-pencil", "fa-pencil-square", "fa-pencil-square-o", "fa-percent", "fa-phone", "fa-phone-square", "fa-photo", "fa-picture-o", "fa-pie-chart", "fa-pied-piper", "fa-pied-piper-alt", "fa-pied-piper-pp", "fa-pinterest", "fa-pinterest-p", "fa-pinterest-square", "fa-plane", "fa-play", "fa-play-circle", "fa-play-circle-o", "fa-plug", "fa-plus", "fa-plus-circle", "fa-plus-square", "fa-plus-square-o", "fa-podcast", "fa-power-off", "fa-print", "fa-product-hunt", "fa-puzzle-piece", "fa-qq", "fa-qrcode", "fa-question", "fa-question-circle", "fa-question-circle-o", "fa-quora", "fa-quote-left", "fa-quote-right", "fa-ra", "fa-random", "fa-ravelry", "fa-rebel", "fa-recycle", "fa-reddit", "fa-reddit-alien", "fa-reddit-square", "fa-refresh", "fa-registered", "fa-remove", "fa-renren", "fa-reorder", "fa-repeat", "fa-reply", "fa-reply-all", "fa-resistance", "fa-retweet", "fa-rmb", "fa-road", "fa-rocket", "fa-rotate-left", "fa-rotate-right", "fa-rouble", "fa-rss", "fa-rss-square", "fa-rub", "fa-ruble", "fa-rupee", "fa-s15", "fa-safari", "fa-save", "fa-scissors", "fa-scribd", "fa-search", "fa-search-minus", "fa-search-plus", "fa-sellsy", "fa-send", "fa-send-o", "fa-server", "fa-share", "fa-share-alt", "fa-share-alt-square", "fa-share-square", "fa-share-square-o", "fa-shekel", "fa-sheqel", "fa-shield", "fa-ship", "fa-shirtsinbulk", "fa-shopping-bag", "fa-shopping-basket", "fa-shopping-cart", "fa-shower", "fa-sign-in", "fa-sign-language", "fa-sign-out", "fa-signal", "fa-signing", "fa-simplybuilt", "fa-sitemap", "fa-skyatlas", "fa-skype", "fa-slack", "fa-sliders", "fa-slideshare", "fa-smile-o", "fa-snapchat", "fa-snapchat-ghost", "fa-snapchat-square", "fa-snowflake-o", "fa-soccer-ball-o", "fa-sort", "fa-sort-alpha-asc", "fa-sort-alpha-desc", "fa-sort-amount-asc", "fa-sort-amount-desc", "fa-sort-asc", "fa-sort-desc", "fa-sort-down", "fa-sort-numeric-asc", "fa-sort-numeric-desc", "fa-sort-up", "fa-soundcloud", "fa-space-shuttle", "fa-spinner", "fa-spoon", "fa-spotify", "fa-square", "fa-square-o", "fa-stack-exchange", "fa-stack-overflow", "fa-star", "fa-star-half", "fa-star-half-empty", "fa-star-half-full", "fa-star-half-o", "fa-star-o", "fa-steam", "fa-steam-square", "fa-step-backward", "fa-step-forward", "fa-stethoscope", "fa-sticky-note", "fa-sticky-note-o", "fa-stop", "fa-stop-circle", "fa-stop-circle-o", "fa-street-view", "fa-strikethrough", "fa-stumbleupon", "fa-stumbleupon-circle", "fa-subscript", "fa-subway", "fa-suitcase", "fa-sun-o", "fa-superpowers", "fa-superscript", "fa-support", "fa-table", "fa-tablet", "fa-tachometer", "fa-tag", "fa-tags", "fa-tasks", "fa-taxi", "fa-telegram", "fa-television", "fa-tencent-weibo", "fa-terminal", "fa-text-height", "fa-text-width", "fa-th", "fa-th-large", "fa-th-list", "fa-themeisle", "fa-thermometer", "fa-thermometer-0", "fa-thermometer-1", "fa-thermometer-2", "fa-thermometer-3", "fa-thermometer-4", "fa-thermometer-empty", "fa-thermometer-full", "fa-thermometer-half", "fa-thermometer-quarter", "fa-thermometer-three-quarters", "fa-thumb-tack", "fa-thumbs-down", "fa-thumbs-o-down", "fa-thumbs-o-up", "fa-thumbs-up", "fa-ticket", "fa-times", "fa-times-circle", "fa-times-circle-o", "fa-times-rectangle", "fa-times-rectangle-o", "fa-tint", "fa-toggle-down", "fa-toggle-left", "fa-toggle-off", "fa-toggle-on", "fa-toggle-right", "fa-toggle-up", "fa-trademark", "fa-train", "fa-transgender", "fa-transgender-alt", "fa-trash", "fa-trash-o", "fa-tree", "fa-trello", "fa-tripadvisor", "fa-trophy", "fa-truck", "fa-try", "fa-tty", "fa-tumblr", "fa-tumblr-square", "fa-turkish-lira", "fa-tv", "fa-twitch", "fa-twitter", "fa-twitter-square", "fa-umbrella", "fa-underline", "fa-undo", "fa-universal-access", "fa-university", "fa-unlink", "fa-unlock", "fa-unlock-alt", "fa-unsorted", "fa-upload", "fa-usb", "fa-usd", "fa-user", "fa-user-circle", "fa-user-circle-o", "fa-user-md", "fa-user-o", "fa-user-plus", "fa-user-secret", "fa-user-times", "fa-users", "fa-vcard", "fa-vcard-o", "fa-venus", "fa-venus-double", "fa-venus-mars", "fa-viacoin", "fa-viadeo", "fa-viadeo-square", "fa-video-camera", "fa-vimeo", "fa-vimeo-square", "fa-vine", "fa-vk", "fa-volume-control-phone", "fa-volume-down", "fa-volume-off", "fa-volume-up", "fa-warning", "fa-wechat", "fa-weibo", "fa-weixin", "fa-whatsapp", "fa-wheelchair", "fa-wheelchair-alt", "fa-wifi", "fa-wikipedia-w", "fa-window-close", "fa-window-close-o", "fa-window-maximize", "fa-window-minimize", "fa-window-rethis.$store", "fa-windows", "fa-won", "fa-wordpress", "fa-wpbeginner", "fa-wpexplorer", "fa-wpforms", "fa-wrench", "fa-xing", "fa-xing-square", "fa-y-combinator", "fa-y-combinator-square", "fa-yahoo", "fa-yc", "fa-yc-square", "fa-yelp", "fa-yen", "fa-yoast", "fa-youtube", "fa-youtube-play", "fa-youtube-square"]
    }
  },
  methods:{
    drtitle(page){
      if(page.printouts.Title[0]){
        return page.printouts.Title[0].fulltext;
      }
    },
    treez(data){
     for (var [key, value] of Object.entries(data)){
       if(!value.printouts.Parent[0]){
         each = value;
         each.dragchildren = this.traverse(data, each.printouts.Id[0]);
         this.nwtree.push(each);
       }
     }
   },
   traverse(data, parentId) {
     var children = [];
     for (var [key, each] of Object.entries(data)){

if(this.space){
  console.log(this.space, this.pages);
       for (var [i, el] of Object.entries(this.pages)) {
         if(el.printouts['Page ID'][0] == each.printouts.Href[0] && el.printouts['Title'][0]){
          each.printouts.Text[0] = el.printouts['Title'][0].fulltext;
         }
       }
     }
       if(each.printouts.Parent[0] == parentId){
        children.push(each);
      }
     }
     var root = this;
     children.forEach(function(child){
       child.dragchildren = root.traverse(data, child.printouts.Id[0]);
     });
     return children;
   },
   tasksToDo(page){
        var dt = this;
        var params = {
          action: 'ask',
          query: `[[Subobject of::${page}]]|?Id|?Parent|?Text|?Icon|?Type|?Href|?order|sort=order|order=asc`,
          format: 'json'
        },
        api = new mw.Api();//need to add fail function
        api.postWithToken( 'csrf', params ).done( function ( data ) {
         console.log(data.query.results)
          if(data.query.results.length == undefined){
            dt.nwtree = [];
            if(dt.space){
                  dt.getpages(data.query.results);
            }else{
              dt.treez(data.query.results);
            }

            var obg = {name:page, dragitems:dt.nwtree};
            dt.trees.push(obg )
          }else{//if result is array create empty object
            var tname = ~~(Date.now() / 1000);
            var obg = {
              name:page,
              dragitems:[{
                printouts: {
                  Id:[tname],
                  Type:["page"],
                  Text: ["page"],
                  Icon: ["fa-link"],
                  Href: ["link"]
                },
                dragchildren: []
              }]
            }
            dt.trees.push(obg )
          }
        });
      },
      showsearch(){
          this.$store.commit('ifsearch', true);
        setTimeout(function(){
          document.querySelector('#fasearch input').focus()
        },100)
      },
      savemenu(){
      var wikitexttosave = "";
       var flat = "";
       var pagetosave ="";
       if(this.trees[1]){
         var ob =  this.trees[1];

         if(ob.name){
           console.log(ob);
           var order = 0;
           var level = 0;
           loopthat(ob.dragitems);
           function loopthat(x){
             x.forEach(function(el){
               var parnt ="";
               if(el.printouts.Parent && el.printouts.Parent.length ){
                 console.log(el.printouts.Parent)
                 parnt = el.printouts.Parent[0];
               }
               level++;
               flat += `{{Menu
                        |text=${el.printouts.Text[0]}
                        |type=${el.printouts.Type[0]}
                        |id=${el.printouts.Id[0]}
                        |icon=${el.printouts.Icon[0]}
                        |href=${el.printouts.Href[0]}
                        |parent=${parnt}
                        |order=${order}
                        |level=${level}
                        }}`;
               order++;
               loopthat(el.dragchildren);
               level--;
             })
           }
           console.log(flat)

           wikitexttosave = ob.name;
           pagetosave = flat;
         }
       }
        this.$nextTick(function() {
          if(wikitexttosave){
            this.saveToWiki(wikitexttosave, pagetosave);
          }
        });
      },
      saveToWiki(page, wikitext){

          var params = {
                action: 'edit',
                title: page,
                text: wikitext,
                format: 'json'
              },
              api = new mw.Api();

              api.postWithToken( 'csrf', params ).done( function ( data ) {
                console.log( data );
                     mw.notify($('<span>Saved</span>'))
              } );

      },
      getmenu(e){
        this.tasksToDo(e.target.value);
        this.selectedmenu = true;

      },
      getpages(pages){
          if(this.space){
            var dt = this;
            var params = {
              action: 'ask',
              query: `[[Class::Page]][[Namespace::${this.space}]]|?Title|?Page ID|limit=5000`,
              format: 'json'
            },
            api = new mw.Api();//need to add fail function

            api.postWithToken( 'csrf', params ).done( function ( data ) {

              dt.pages = data.query.results;
              dt.treez(pages);
            })
          }
      },
      input(e){
        this.$store.commit('title', e.target.value);
      },
      inputtype(e){
        this.$store.commit('type', e.target.value);
      },
      inputhref(e){
        if(this.$store.getters.selected && this.$store.getters.selected.dragitem.printouts.Type[0] == "external"){
          if(!e.target.value.toLowerCase().includes('http')){
            this.$store.commit('href', 'http://'+e.target.value);
          }else{
            this.$store.commit('href', e.target.value);
          }
        }else{
          this.$store.commit('href', e.target.value);
        }
      },
      inputpage(e){
        this.$store.commit('title', e.target.querySelector('[value="'+e.target.value+'"]').innerText);
        this.$store.commit('href', e.target.value);
      },
      inputicon(e){
        this.$store.commit('icon', e.target.value);
      },
      removeItem(e){
        this.$store.getters.selected.$parent.dragitems.splice(this.$store.getters.selected.$attrs.index, 1)
        this.$store.commit('select', "");
      },
    }
  };
</script>

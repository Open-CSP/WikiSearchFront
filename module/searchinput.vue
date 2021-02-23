<template>
    <div
      class="wssearch--search"
      aria-disabled="false"
    >
      <input
        type="text"
        :placeholder="$i18n( 'search' )"
        @change="search"
        class="wssearch--search-input"
        :value="term"
        @input="toggleclear"
        tabindex="0"
        aria-disabled="false"
      />
      <span
        class="wssearch--search-icon"
      >
      </span>
      <span
        v-show="term"
        class="wssearch--search-clear"
        tabindex="-1"
        aria-label="Clear"
        role="button"
        @click="clear"
      >
      </span>
    </div>
</template>

<script>
  module.exports = {
    props:{
      term:String
    },
    methods:{
        search(event){
            this.$emit( 'change', event );
        },
        clear(event){
           this.$emit( 'click', event );
        },
        toggleclear(event){
              this.term = event.target.value;
        }
      
    }
  }
</script>

<style>
.wssearch--search{
    grid-area: search;

    position: relative;
    vertical-align: middle;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    max-width: 50em;
  }
.wssearch--search-input, .wssearch--filter-options-search{
    box-sizing: border-box;
    cursor: text;
    box-shadow: inset 0 0 0 1px transparent;
    -webkit-transition: border-color 250ms,box-shadow 250ms;
    -moz-transition: border-color 250ms,box-shadow 250ms;
    transition: border-color 250ms,box-shadow 250ms;
    background-color: #fff;
    color: #000;
    margin: 0;
    border: 1px solid #a2a9b1;
    border-radius: 2px;
    padding: .4em .6em .4em 2.2em;
    font-size: inherit;
    font-family: inherit;
    line-height: 1.42857143em;
    width: 100%;
  }
  .wssearch--search-icon{
    left:.5em;
    cursor: text;
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    min-width: 20px;
    width: 1.42857143em;
    min-height: 20px;
    height: 100%;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    display: -webkit-inline-box;
    display: -webkit-inline-flex;
    display: inline-flex;
    opacity: 0.87;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    vertical-align: middle;
    background-image: linear-gradient(transparent,transparent),var(--search-icon);
  }
    .wssearch--search-clear{
      cursor: pointer;
      max-height: 2.28571429em;
     margin-right: 0.71428571em;
     opacity: 0.87;
     background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
    position: absolute;
    top: 0;
    right:0;
    min-width: 12px;
    width: 0.85714286em;
    min-height: 12px;
    height: 100%;
    background-image:var(--clear-icon) ;

   }
</style>
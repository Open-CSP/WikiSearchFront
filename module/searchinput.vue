<template>
    <div
      class="wssearch--search"
      aria-disabled="false"
    >
      <input
        type="search"
        :placeholder="$i18n( 'search' )"
        @change="search"
        class="wssearch--search-input"
        v-bind:value="term"
        tabindex="0"
        aria-disabled="false"
      />
      <span
        class="wssearch--search-icon"
      >
      </span>
      <span
        class="wssearch--search-clear"
        tabindex="-1"
        aria-label="Clear"
        role="button"
      >
      </span>
    </div>
</template>

<script>
  module.exports = {
    props:{
      term:String
    },
    data(){
      return {
        hoi:'hoi'
      }
    },
    methods:{
        search(event){
            this.$emit( 'change', event );
        }
    }
  }
</script>

<style>
.wssearch--search{
    position: relative;
    vertical-align: middle;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    width: 100%;
    max-width: 50em;
  }
.wssearch--search-input, .wssearch--filter-options-search{
    cursor: text;
    padding-right: 28px;
    box-shadow: inset 0 0 0 1px transparent;
    -webkit-transition: border-color 250ms, box-shadow 250ms;
    -moz-transition: border-color 250ms, box-shadow 250ms;
    transition: border-color 250ms, box-shadow 250ms;
    padding-left: 2.42857143em;
    background-color: #fff;
    color: #000;
    margin: 0;
    border: 1px solid #a2a9b1;
    border-radius: 2px;
    padding: 5px 8px;
    font-size: inherit;
    font-family: inherit;
    line-height: 1.42857143em;
    width:100%;
  }
  .wssearch--search-icon{
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
    background-image: linear-gradient(transparent,transparent),url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22%3E%3Ctitle%3Esearch%3C/title%3E%3Cpath d=%22M7.5 13c3.04 0 5.5-2.46 5.5-5.5S10.54 2 7.5 2 2 4.46 2 7.5 4.46 13 7.5 13zm4.55.46A7.432 7.432 0 017.5 15C3.36 15 0 11.64 0 7.5S3.36 0 7.5 0C11.64 0 15 3.36 15 7.5c0 1.71-.57 3.29-1.54 4.55l6.49 6.49-1.41 1.41-6.49-6.49z%22/%3E%3C/svg%3E');
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
    min-width: 12px;
    width: 0.85714286em;
    min-height: 12px;
    height: 100%;

   }
</style>
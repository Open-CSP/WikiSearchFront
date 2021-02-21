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

<template>
  <data-table :rows="data"/>
  <h1>Hello Nk</h1>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
// import type { Header, Item } from "vue3-easy-data-table";
import Datatable from '@jobinsjp/vue3-datatable'

@Options({
    components: {
      Datatable
    }
})

export default class tableComp extends Vue {
  
}

</script>

<style>

</style>
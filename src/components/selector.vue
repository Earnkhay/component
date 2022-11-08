<template>
  <div class="container p-5 text-center">
    <div class="row justify-content-center ">
  <div class="col-md-5">
    <VueMultiselect
      v-model="selected"
      :options="options">
    </VueMultiselect>
  </div>
  </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import VueMultiselect from 'vue-multiselect'

@Options({
  components: {
    VueMultiselect
  },
})
export default class nkselector extends Vue {
      selected = null
      options = ['list', 'of', 'options']
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.css"></style>
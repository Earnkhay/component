<template>
    <HelloWorld msg="hello world"/>
    <modal :btnText="text" :modalTitle="title" :modalBody="body"/>
    <nkselector/>
    <table-comp/>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import HelloWorld from '@/components/HelloWorld.vue'; 
import modal from '@/components/modal.vue'
import nkselector from '@/components/selector.vue'
import tableComp from '@/components/tableComp.vue';

@Options({
  components: {
    HelloWorld,
    modal,
    nkselector,
    tableComp
  },
})
export default class HomeView extends Vue {
  text = 'Modal'
  title = 'Modal'
  body = 'This is a bootstrap modal'
  value = ''
  options = ['Select option', 'options', 'selected', 'multiple', 'label', 'searchable']
}
</script>

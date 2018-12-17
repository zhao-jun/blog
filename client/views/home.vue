<template>
  <div>home</div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';
const { mapState, mapMutations, mapActions } = createNamespacedHelpers('home');

export default {
  asyncData({ store, router }) {
    return store.dispatch('home/getHomeList');
  },
  computed: {
    ...mapState(['text', 'list'])
  },
  mounted() {
    // this.getHomeList()
  },
  methods: {
    ...mapMutations(['updateText']),
    ...mapActions(['getHomeList'])
  }
};
</script>

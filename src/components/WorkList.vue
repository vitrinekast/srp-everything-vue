<template lang="html">

    <div class="">
      <ul class=''>
        <WorkListItem  :item='item' v-for='item in items' :key='item.id'/>
      </ul>
    </div>

</template>

<script>
import WorkListItem from '@/components/WorkListItem'

export default {
  props: {
    items: {
      required: true
    }
  },
  components: {
    WorkListItem
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/config';

ul {
    margin: $gutter--lg 0;
}
</style>

<template>
  <div>
    <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <banner></banner>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link active-class="active" to="/home">home</router-link>
          <router-link active-class="active" to="/about">about</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from "@/components/Banner.vue";

export default {
  name: 'App',
  components: {Banner},

}

</script>

<style lang="css">

</style>

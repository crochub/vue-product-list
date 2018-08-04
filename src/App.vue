<template>
  <div id="app">
    <v-app dark>
      <v-content>
        <v-container fluid fill-height style="align-items: stretch;">
          <router-view/>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
html { overflow: auto }
</style>

<template>
  <v-footer :absolute="true" app >
    <span>created by <a href="https://github.com/MohamedHiggy">mohamed higgy</a>&copy; {{ new Date().getFullYear() }}</span>
  </v-footer>
</template>

<style scoped>
span {
  margin: 0 auto;
  font-size: 20px;
  font-weight: bold;
}
</style>
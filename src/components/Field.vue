<template>
  <div class="wrap">
    {{ currentValue || 0 }}
  </div>
</template>

<script>
export default {
  name: "Field",
  props: [ 'currentValue' ]
}
</script>

<style scoped>
.wrap {
  background-color: #3b3b48;
  color: white;
  height: 60px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  /* margin-top: 25px; */
  font-size: 40px;
  margin: 9px 5px;
  border: 1px solid transparent;
  border-radius: 5px;
}
</style>
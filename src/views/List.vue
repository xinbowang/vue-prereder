<template>
  <div class="about">
    <h1>This is an list page</h1>
  </div>
</template>
<script>
export default {
  name: "List",
  metaInfo() {
    return {
      title: "列表页",
      meta: [
        {
          // set meta
          name: "keyWords",
          content: "列表页"
        },
        {
          name: "description",
          content: "这是列表页"
        }
      ]
    };
  }
};
</script>

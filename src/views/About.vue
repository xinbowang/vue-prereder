<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
export default {
  name: "About",
  metaInfo() {
    return {
      title: "关于我们",
      meta: [
        {
          // set meta
          name: "keyWords",
          content: "关于我们"
        },
        {
          name: "description",
          content: "这是关于我们描述"
        }
      ]
    };
  }
};
</script>

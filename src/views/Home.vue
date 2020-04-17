<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Button>Default</Button>
    <Button type="primary">Primary</Button>
    <Button type="dashed">Dashed</Button>
    <Button type="text">Text</Button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  metaInfo() {
    return {
      title: "首页",
      meta: [
        {
          // set meta
          name: "keyWords",
          content: "首页"
        },
        {
          name: "description",
          content: "这是首页描述"
        }
      ]
    };
  },
  components: {
    HelloWorld
  }
};
</script>

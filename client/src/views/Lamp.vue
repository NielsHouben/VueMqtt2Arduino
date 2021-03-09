<template>
  <div id="app">
    <h1>Lamp</h1>
    <div>
      <button @click="connect()" class="button">Connect</button>
      <button @click="toggle()" class="button">Toggle</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      user: { _id: "clientID_" + 42069 }, // parseInt(Math.random() * 100)
    };
  },
  components: {},
  mounted() {},
  methods: {
    connect() {
      //   this.$mqtt.launch(this.user._id, (topic, source) => {
      //     console.log("message: ", JSON.parse(source.toString()));
      //   });
      this.$mqtt.launch(this.user._id, (topic, source) => {
        console.log("message: ", JSON.parse(source.toString()));
      });
      //   this.$mqtt.subscribe("mess");
      //   this.$mqtt.launch(this.user._id);
    },
    toggle() {
      this.$mqtt.publish("json", { name: "WallE", direction: "left" });
    },
  },
};
</script>

<style>
.button {
  height: 100px;
  width: 500px;
  border-radius: 20px;
  font-size: 25px;
  margin: 15px;

  user-select: none;
  -moz-user-select: none;
  -webkit-user-drag: none;
  -webkit-user-select: none;
  -ms-user-select: none;
}
</style>

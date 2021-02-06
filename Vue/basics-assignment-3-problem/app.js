const app = Vue.createApp({
  data() {
    return {
      number: 0,
      msg: "",
    };
  },
  watch: {
    result(value) {
      const that = this;
      setTimeout(function () {
        that.number = "0";
      }, 5000);
    },
  },
  computed: {
    result() {
      if (this.number <= 37) {
        return (this.msg = "Not there yet");
      } else if (this.number === 37) {
        return this.number;
      } else {
        return (this.msg = "Too much");
      }
    },
  },
  methods: {
    add(num) {
      this.number += num;
    },
  },
});
app.mount("#assignment");

const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      confirmName: "",
    };
  },
  methods: {
    confirmInput() {
      this.confirmName = this.name;
    },
    submitForm(event) {
      // event.preventDefault();
      alert("Submitted");
    },
    setName(event, lastNmae) {
      this.name = event.target.value + " " + lastNmae;
    },
    add() {
      this.counter = this.counter + 1;
    },
    reduce() {
      this.counter = this.counter - 1;
    },
  },
});

app.mount("#events");

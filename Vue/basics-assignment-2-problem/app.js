const app = Vue.createApp({
  data() {
    return {
      paragragh: "",
      confirmParagraph: "",
    };
  },
  methods: {
    clickButton() {
      alert("hello world");
    },
    addParagraph(event) {
      this.paragragh = event.target.value;
    },
    keyDown() {
      this.confirmParagraph = this.paragragh;
    },
    keyEnter() {
      this.confirmParagraph = this.paragragh;
    },
  },
});

app.mount("#assignment");

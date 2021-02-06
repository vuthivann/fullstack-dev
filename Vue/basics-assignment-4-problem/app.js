const app = Vue.createApp({
  data() {
    return {
      inputClass: "",
      paragraphIsVisible: true,
      inputBackgroudColor: "",
    };
  },
  computed: {
    paraClass() {
      return {
        user1: this.inputClass === "user1",
        user2: this.inputClass === "user2",
        visible: this.paragraphIsVisible,
        hidden: !this.paragraphIsVisible,
      };
    },
  },
  methods: {
    toggleParagraphIsVisibility() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
  },
});
app.mount("#assignment");

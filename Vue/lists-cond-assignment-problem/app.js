const app = Vue.createApp({
  data() {
    return {
      inputTask: "",
      taskList: [],
      taskListVisible: true,
    };
  },
  computed: {
    btnUpdate() {
      return this.taskListVisible ? "Hide list" : "Show list";
    },
  },
  methods: {
    addTask() {
      this.taskList.push(this.inputTask);
    },
    toggleTaskList() {
      this.taskListVisible = !this.taskListVisible;
    },
  },
});

app.mount("#assignment");

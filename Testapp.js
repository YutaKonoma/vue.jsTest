Vue.createApp({
    data() {
      return {
        date: new Date(),
        error: "",
        lists: [],
        task: "",
        priorities: ["低", "中", "高"],
      };
    },
    methods: {
      addTask() {
        //空文字の場合はエラーとする
        if (this.task == "") {
          return;
        }
        this.lists.push(this.task);
      },
    },
    
      //配列のwatch
      lists: {
        handler(newTask, oldTask) {
          console.log(newTask);
          //sessionStrage データを一時保存する。
          //tasksというお部屋にjson形式でデータを保存する
          
          console.log(newTask[newTask.length - 1] );
          sessionStorage.setItem("tasks", JSON.stringify(newTask));
        },
        deep: true,
      },

  }).mount("#app");
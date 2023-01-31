Vue.createApp({
    data() {
      return {
        lastName: "",
        firstName: "",
        date: new Date(),
        error: "",
        lists: [],
        task: "",
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
    //算出プロパティ：表示形式の加工や計算
    computed: {
      //姓名を繋げて表示する加工
      fullName() {
        //テンプレートリテラル形式でreturnする
        return `${this.lastName} ${this.firstName}`;
      },
      //日付の加工
      dataFormar() {
        const dataArray = ["日", "月", "火", "水", "木", "金", "土"];
        return `${this.date.getFullYear()}年${this.date.getMonth() + 1}月${this.date.getDate()}日
        (${dataArray[this.date.getDay()]})`;
      },
    },
    //変更を感知し処理を行うwatchオプション
    watch: {
      lastName(newName) {
        //三項演算子
        this.error = newName.length > 5 ? "5文字以内でお願いします" : "";
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
    },
  }).mount("#app");
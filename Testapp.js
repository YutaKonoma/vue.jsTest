Vue.createApp({
  data() {
    return {
      title: "タスク管理アプリ",
      priorities: ["低", "中", "高"],
      // 相互バインディング
      task: "",
      deadline: "",
      priority: 1,
      //完了フラグ
      done: false,
      //検索条件の相互バインディング
      sort: "desc",
      filter: "all",
      search: "",
      //タスクの配列
      tasklist: [],
    };
  },
  methods: {
    setTask() {
      
      this.tasklist.push({
        //エポックタイム1970年からどのくらい経過したかを表す
        id: Date.now(),
        done: this.done,
        task: this.task,
        deadline: this.deadline,
        priority: this.priority,
        publish: new Date(),
      });
      //登録内容リセット
      this.resetTask();
    },
    resetTask() {
      (this.task = ""), (this.deadline = ""), (this.priority = 1);
    },
  },
  computed: {
    dataFormat() {
      return (now) => {
        const d = new Date(now);
        const year = d.getFullYear();
        const month = d.getMonth() + 1;
        const date = d.getDate();
        const day = d.getDay();
        const dataArray = ["日", "月", "火", "水", "木", "金", "土"];
        return `${year}年${month}月${date}日(${dataArray[day]})`;
      };
    },
  },

 //検索結果を表示する
 results() {
  //メソッドチェーンで処理をつなげていく
  return this.tasklist.filter((val) => {
    if (this.filter === "all") {
      return true;
    } else {
      //検索条件の優先度と登録されているタスクの優先度が一致したら
      return this.filter == val.priority;
    }
  })
  .filter((val) => {
     return val.title.includes(this.search)
    })
    .sort((a,b,) => {
      const dataA = new Data(a.publish);
      const DatB = new Datam(b.publish);
    })
  .if (this  )
},

  watch: {
    tasklist: {
      handler(newTask) {
        localStorage.setItem("tasks", JSON.stringify(newTask));
      },
      deep: true,
    },
  },
  created() {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    //三項演算子を使って、tasks値があるかないかを判定してtasklistに値を代入
    //判定式　? trueの場合:falseの場合
    this.tasklist = tasks ? tasks : [];
  },
}).mount("#app");
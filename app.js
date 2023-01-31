Vue.createApp({
  data(){
    return{
        isShow: true,
        isMobile: true,
        message: "Hello Vue.js",
        emMsg: "<a>!!!!</a>",
        isExpanded: false,
        bloodType: "A",
        works: ["Game", "Scenario", "Character Design", "Document", "Program"],

        person: {
            name: "yamada",
            age:16,
        },
        count= 20,
        };
    },
    methods: {
        countDown() {
            this.count--;
            this.count = Math.max(0, this.count);
        },
    },
  }).mount("#app");

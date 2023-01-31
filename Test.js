Vue.createApp({
    data() {
        return {
            isShow: true,
            isMobile: true,
            isExpanded: false,
            bloodType: "A",
            nav: ["Game", "Top", "Document", "Program"],
        };
    },
}).mount("#Test");

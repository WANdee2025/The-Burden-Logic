const LifeAnalyzer = {
    burden: ["Body", "Feelings", "Perception", "Mental Habits", "Consciousness"],
    isClinging: true,

    checkStatus() {
        console.log(`\n>>> Current State: ${this.isClinging ? "🚧 CARRYING" : "🍃 RELEASED"}`);
        if (this.isClinging) {
            console.log("Insight: Withholding the Mind and Body is true heavy weights.");
        } else {
            console.log("Insight: Absolute Freedom through letting go.");
        }
    },

    lettingGo() {
        console.log("\n--- Action: Putting down the heavy weights ---");
        this.isClinging = false;
        this.checkStatus();
    }
};

LifeAnalyzer.checkStatus();
LifeAnalyzer.lettingGo();

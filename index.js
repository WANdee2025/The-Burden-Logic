/**
 * Project: Early Buddhism in the Digital Age
 * Title: The Logic of The Burden (Bhāra)
 * Quote: "In Short, withholding the Mind and Body is true heavy weights."
 */

const LifeAnalyzer = {
    // 1. The Burden (Simplified to everyday English)
    burden: ["Body (Form)", "Feelings", "Perception", "Mental Habits", "Consciousness"],
    
    // 2. The Carrier
    carrier: "The Person (Me/You)",
    
    // 3. The Condition
    isClinging: true,

    // 4. Analysis Logic
    checkStatus() {
        console.log(`\n>>> Current State: ${this.isClinging ? "🚧 CARRYING" : "🍃 RELEASED"}`);
        
        if (this.isClinging) {
            console.log("Insight: Withholding the Mind and Body is true heavy weights.");
            console.log("Status: Suffering from holding on too tight.");
        } else {
            console.log("Insight: Absolute Freedom.");
            console.log("Status: Happiness from letting it all go.");
        }
    },

    // 5. The Liberation Method
    lettingGo() {
        console.log("\n--- Action: Putting down the heavy weights ---");
        this.isClinging = false; // System Reset
        this.checkStatus();
    }
};

// RUN
console.log("--- Project: The Burden Sutta Logic ---");
LifeAnalyzer.checkStatus();
LifeAnalyzer.lettingGo();
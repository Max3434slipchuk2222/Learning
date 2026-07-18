type MatchResult = "win" | "loss" | "draw"
function getResultEmoji(result: MatchResult): string {
    switch (result) {
        case "win":
            return "🏆";
        case "loss":
            return "😔";
        case "draw":
            return "🤝";
        default:
            const exhaustiveCheck: never = result;
            return exhaustiveCheck;
    }
}
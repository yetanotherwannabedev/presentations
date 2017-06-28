function countLines(texts?: string[]): number {
    let count: number;
    for (const text of texts) {
        if (text.length !== 0) {
            count++;
        }
    }
    return count;
}

let a = countLines(["hello", "", "wolrd"]);
let b = countLines(["null", "isComing", null]);
let c = countLines();
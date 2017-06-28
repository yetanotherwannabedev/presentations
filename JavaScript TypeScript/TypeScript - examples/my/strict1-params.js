function countLines(texts) {
    var count;
    for (var _i = 0, texts_1 = texts; _i < texts_1.length; _i++) {
        var text = texts_1[_i];
        if (text.length !== 0) {
            count++;
        }
    }
    return count;
}
var a = countLines(["hello", "", "wolrd"]);
var b = countLines(["null", "isComing", null]);
var c = countLines();

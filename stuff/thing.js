clicks = 0;
var clicked = function () {
    clicks++;
    console.log(`clicks ${clicks}`)
    $("#clicksamount").text(`clicks: ${clicks}`);
};
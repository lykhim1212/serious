$(document).ready(function() {
    console.log("Stop!", "font-weight : bold ; font-size : 50px ; color : red ; text-shadow:1px 1px 0px black, 1px -1px 0px black , -1px 1px 0px black , -1px -1px 0px black;"), $("#kh").click(function() {
        $(".KH").show(), $("#kh").removeClass("btn-default"), $("#kh").addClass("btn-primary active"), $("#en").removeClass("btn-primary active"), $("#en").addClass("btn-default"), $("#english").hide(), $("#khmer").show()
    }), $("#en").click(function() {
        $("#english").removeClass("hide"), $("#en").removeClass("btn-default"), $("#en").addClass("btn-primary active"), $("#kh").removeClass("btn-primary active"), $("#kh").addClass("btn-default"), $("#khmer").hide(), $("#english").show()
    })
});
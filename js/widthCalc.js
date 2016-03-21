

function addCSSRule(sheet, selector, rules, index) {

	if("insertRule" in sheet) {
		sheet.insertRule(selector + "{" + rules + "}", index);
	}
	else if("addRule" in sheet) {
		sheet.addRule(selector, rules, index);
	}
};

//box1
var desktopColWidth = 50;
var mobileColWidth = 100;
var breakPoint = 460;

var a = breakPoint * breakPoint;
var b = breakPoint * mobileColWidth;

var webKit = (a + "px" + " - " + b + "%");

console.log(webKit);


//use it
addCSSRule(document.styleSheets[0], ".box1", "float:left");
addCSSRule(document.styleSheets[0], ".box1", "background-color: red");
addCSSRule(document.styleSheets[0], ".box1", "height:190px");
addCSSRule(document.styleSheets[0], ".box1", "width:-webkit-calc(" + webKit + ")");
addCSSRule(document.styleSheets[0], ".box1", "min-width:-webkit-calc(" + desktopColWidth + "%");
addCSSRule(document.styleSheets[0], ".box1", "width:calc(" + webKit + ")");
addCSSRule(document.styleSheets[0], ".box1", "min-width:calc(" + desktopColWidth + "%" + ")");
addCSSRule(document.styleSheets[0], ".box1", "width:" + desktopColWidth + "%");
addCSSRule(document.styleSheets[0], ".box1", "min-width:160px");
addCSSRule(document.styleSheets[0], ".box1", "max-width:" + mobileColWidth + "%");



//box2
var desktopColWidth = 50;
var mobileColWidth = 100;
var breakPoint = 460;

var a = breakPoint * breakPoint;
var b = breakPoint * mobileColWidth;

var webKit = (a + "px" + " - " + b + "%");

console.log(webKit);


//use it
addCSSRule(document.styleSheets[0], ".box2", "float:left");
addCSSRule(document.styleSheets[0], ".box2", "background-color: blue");
addCSSRule(document.styleSheets[0], ".box2", "height:190px");
addCSSRule(document.styleSheets[0], ".box2", "width:-webkit-calc(" + webKit + ")");
addCSSRule(document.styleSheets[0], ".box2", "min-width:-webkit-calc(" + desktopColWidth + "%");
addCSSRule(document.styleSheets[0], ".box2", "width:calc(" + webKit + ")");
addCSSRule(document.styleSheets[0], ".box2", "min-width:calc(" + desktopColWidth + "%" + ")");
addCSSRule(document.styleSheets[0], ".box2", "width:" + desktopColWidth + "%");
addCSSRule(document.styleSheets[0], ".box2", "min-width:160px");
addCSSRule(document.styleSheets[0], ".box2", "max-width:" + mobileColWidth + "%");



//box3
var desktopColWidth = 33;
var mobileColWidth = 100;
var breakPoint = 460;

var a = breakPoint * breakPoint;
var b = breakPoint * mobileColWidth;

var webKit = (a + "px" + " - " + b + "%");

console.log(webKit);


//use it
addCSSRule(document.styleSheets[0], ".box3", "float:left");
addCSSRule(document.styleSheets[0], ".box3", "background-color: orange");
addCSSRule(document.styleSheets[0], ".box3", "height:190px");
addCSSRule(document.styleSheets[0], ".box3", "width:-webkit-calc(" + webKit + ")");
addCSSRule(document.styleSheets[0], ".box3", "min-width:-webkit-calc(" + desktopColWidth + "%");
addCSSRule(document.styleSheets[0], ".box3", "width:calc(" + webKit + ")");
addCSSRule(document.styleSheets[0], ".box3", "min-width:calc(" + desktopColWidth + "%" + ")");
addCSSRule(document.styleSheets[0], ".box3", "width:" + desktopColWidth + "%");
addCSSRule(document.styleSheets[0], ".box3", "min-width:160px");
addCSSRule(document.styleSheets[0], ".box3", "max-width:" + mobileColWidth + "%");


//box4
var desktopColWidth = 34;
var mobileColWidth = 100;
var breakPoint = 460;

var a = breakPoint * breakPoint;
var b = breakPoint * mobileColWidth;

var webKit = (a + "px" + " - " + b + "%");

console.log(webKit);


//use it
addCSSRule(document.styleSheets[0], ".box4", "float:left");
addCSSRule(document.styleSheets[0], ".box4", "background-color: green");
addCSSRule(document.styleSheets[0], ".box4", "height:190px");
addCSSRule(document.styleSheets[0], ".box4", "width:-webkit-calc(" + webKit + ")");
addCSSRule(document.styleSheets[0], ".box4", "min-width:-webkit-calc(" + desktopColWidth + "%");
addCSSRule(document.styleSheets[0], ".box4", "width:calc(" + webKit + ")");
addCSSRule(document.styleSheets[0], ".box4", "min-width:calc(" + desktopColWidth + "%" + ")");
addCSSRule(document.styleSheets[0], ".box4", "width:" + desktopColWidth + "%");
addCSSRule(document.styleSheets[0], ".box4", "min-width:160px");
addCSSRule(document.styleSheets[0], ".box4", "max-width:" + mobileColWidth + "%");


//box5
var desktopColWidth = 33;
var mobileColWidth = 100;
var breakPoint = 460;

var a = breakPoint * breakPoint;
var b = breakPoint * mobileColWidth;

var webKit = (a + "px" + " - " + b + "%");

console.log(webKit);


//use it
addCSSRule(document.styleSheets[0], ".box5", "float:left");
addCSSRule(document.styleSheets[0], ".box5", "background-color: grey");
addCSSRule(document.styleSheets[0], ".box5", "height:190px");
addCSSRule(document.styleSheets[0], ".box5", "width:-webkit-calc(" + webKit + ")");
addCSSRule(document.styleSheets[0], ".box5", "min-width:-webkit-calc(" + desktopColWidth + "%");
addCSSRule(document.styleSheets[0], ".box5", "width:calc(" + webKit + ")");
addCSSRule(document.styleSheets[0], ".box5", "min-width:calc(" + desktopColWidth + "%" + ")");
addCSSRule(document.styleSheets[0], ".box5", "width:" + desktopColWidth + "%");
addCSSRule(document.styleSheets[0], ".box5", "min-width:160px");
addCSSRule(document.styleSheets[0], ".box5", "max-width:" + mobileColWidth + "%");



//box6
var desktopColWidth = 25;
var mobileColWidth = 100;
var breakPoint = 460;

var a = breakPoint * breakPoint;
var b = breakPoint * mobileColWidth;

var webKit = (a + "px" + " - " + b + "%");

console.log(webKit);


//use it
addCSSRule(document.styleSheets[0], ".box6", "float:left");
addCSSRule(document.styleSheets[0], ".box6", "background-color: black");
addCSSRule(document.styleSheets[0], ".box6", "height:190px");
addCSSRule(document.styleSheets[0], ".box6", "width:-webkit-calc(" + webKit + ")");
addCSSRule(document.styleSheets[0], ".box6", "min-width:-webkit-calc(" + desktopColWidth + "%");
addCSSRule(document.styleSheets[0], ".box6", "width:calc(" + webKit + ")");
addCSSRule(document.styleSheets[0], ".box6", "min-width:calc(" + desktopColWidth + "%" + ")");
addCSSRule(document.styleSheets[0], ".box6", "width:" + desktopColWidth + "%");
addCSSRule(document.styleSheets[0], ".box6", "min-width:160px");
addCSSRule(document.styleSheets[0], ".box6", "max-width:" + mobileColWidth + "%");


//box7
var desktopColWidth = 25;
var mobileColWidth = 100;
var breakPoint = 460;

var a = breakPoint * breakPoint;
var b = breakPoint * mobileColWidth;

var webKit = (a + "px" + " - " + b + "%");

console.log(webKit);


//use it
addCSSRule(document.styleSheets[0], ".box7", "float:left");
addCSSRule(document.styleSheets[0], ".box7", "background-color: blue");
addCSSRule(document.styleSheets[0], ".box7", "height:190px");
addCSSRule(document.styleSheets[0], ".box7", "width:-webkit-calc(" + webKit + ")");
addCSSRule(document.styleSheets[0], ".box7", "min-width:-webkit-calc(" + desktopColWidth + "%");
addCSSRule(document.styleSheets[0], ".box7", "width:calc(" + webKit + ")");
addCSSRule(document.styleSheets[0], ".box7", "min-width:calc(" + desktopColWidth + "%" + ")");
addCSSRule(document.styleSheets[0], ".box7", "width:" + desktopColWidth + "%");
addCSSRule(document.styleSheets[0], ".box7", "min-width:160px");
addCSSRule(document.styleSheets[0], ".box7", "max-width:" + mobileColWidth + "%");



//box8
var desktopColWidth = 25;
var mobileColWidth = 100;
var breakPoint = 460;

var a = breakPoint * breakPoint;
var b = breakPoint * mobileColWidth;

var webKit = (a + "px" + " - " + b + "%");

console.log(webKit);


//use it
addCSSRule(document.styleSheets[0], ".box8", "float:left");
addCSSRule(document.styleSheets[0], ".box8", "background-color: yellow");
addCSSRule(document.styleSheets[0], ".box8", "height:190px");
addCSSRule(document.styleSheets[0], ".box8", "width:-webkit-calc(" + webKit + ")");
addCSSRule(document.styleSheets[0], ".box8", "min-width:-webkit-calc(" + desktopColWidth + "%");
addCSSRule(document.styleSheets[0], ".box8", "width:calc(" + webKit + ")");
addCSSRule(document.styleSheets[0], ".box8", "min-width:calc(" + desktopColWidth + "%" + ")");
addCSSRule(document.styleSheets[0], ".box8", "width:" + desktopColWidth + "%");
addCSSRule(document.styleSheets[0], ".box8", "min-width:160px");
addCSSRule(document.styleSheets[0], ".box8", "max-width:" + mobileColWidth + "%");


//box9
var desktopColWidth = 25;
var mobileColWidth = 100;
var breakPoint = 460;

var a = breakPoint * breakPoint;
var b = breakPoint * mobileColWidth;

var webKit = (a + "px" + " - " + b + "%");

console.log(webKit);


//use it
addCSSRule(document.styleSheets[0], ".box9", "float:left");
addCSSRule(document.styleSheets[0], ".box9", "background-color: red");
addCSSRule(document.styleSheets[0], ".box9", "height:190px");
addCSSRule(document.styleSheets[0], ".box9", "width:-webkit-calc(" + webKit + ")");
addCSSRule(document.styleSheets[0], ".box9", "min-width:-webkit-calc(" + desktopColWidth + "%");
addCSSRule(document.styleSheets[0], ".box9", "width:calc(" + webKit + ")");
addCSSRule(document.styleSheets[0], ".box9", "min-width:calc(" + desktopColWidth + "%" + ")");
addCSSRule(document.styleSheets[0], ".box9", "width:" + desktopColWidth + "%");
addCSSRule(document.styleSheets[0], ".box9", "min-width:160px");
addCSSRule(document.styleSheets[0], ".box9", "max-width:" + mobileColWidth + "%");





//  background-color: red;
//  margin: auto;
//  height:190px;
// 	width:50%; 
// 	min-width:160px;
// 	max-width:100%;
// 	width:-webkit-calc(211600px - 46000%);
// 	min-width:-webkit-calc(50%);
// 	width:calc(211600px - 46000%);
// 	min-width:calc(50%);


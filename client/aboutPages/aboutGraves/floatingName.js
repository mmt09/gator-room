class Char {
  constructor(char, x, y, bot) {
    this.x = x;
    this.y = y;
    this.char = char;
    this.bot = bot;
  }

  drawChar() {
    textSize(50)
    smooth()

    this.moveChar()
    fill(random(255), random(255), random(255))
    text(this.char, this.x, this.y);

  }
  moveChar() {
    if (this.y <= this.bot) {
      this.y += 40;

    }
  }


}

var font, chars;

function parseToChars(word, xOrigin, yOrigin) {

  for (let char = 0; char < word.length; char++) {
    var bot;
    if (word == "nico") {
      bot = windowHeight / 2
    }
    if (word == "graves") {
      bot = windowHeight - 80
    }
    let newChar = new Char(word[char], xOrigin, yOrigin, bot);
    chars.push(newChar)
    xOrigin += windowWidth / word.length;

  }

}

function preload() {
  //font = loadFont('assets/orange juice 2.0.ttf')
}




function setup() {


  cnv = createCanvas(windowWidth, windowHeight);
  cnv.style('display', 'block');
  cnv.position(0, 0)

  chars = [];
  firstName = "nico";
  lastName = "graves"
  parseToChars(lastName, (windowWidth / lastName.length) / 2, windowHeight / 2);
  parseToChars(firstName, (windowWidth / firstName.length) / 2, 40)


}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

}

function drawRole() {
  textSize(30)
  text("CSC 648 Team 03 Lead", 320, 300)
}

function draw() {
  frameRate(2)
  for (let i = 0; i < chars.length; i++) {
    //console.log(chars[i].char)
    chars[i].drawChar();
  }

  drawRole();



}
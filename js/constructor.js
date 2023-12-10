const User = function ({ email, password } = {}) {
  this.email = email;
  this.password = password;
};

// const mango = {
//   email: "mango",
//   password: "qweqwe",
// };
User.prototype.changeEmail = function (newEmail) {
  this.email = newEmail;
};
User.prototype.changePassword = function (newPassword) {
  this.password = newPassword;
};

const mango = new User({ email: "mango", password: "qweqwe" });
mango.changePassword("wefhgwehfwe");
const poly = new User({ email: "poly", password: "asdfsg" });
const ajax = new User();
console.log(mango);
console.log(poly);
console.log(ajax);
console.log(User.prototype);

//Task

function Review(productName, username, text, rating) {
  this.productName = productName;
  this.username = username;
  this.text = text;
  this.rating = rating;
  this.date = new Date();
}

Review.prototype.editText = function (newText) {
  this.text = newText;
};
Review.prototype.editRating = function (newRating) {
  this.rating = newRating;
};
Review.prototype.getDetails = function () {
  return `${this.username} написав(ла) відгук на ${this.productName} з рейтингом ${this.rating} та текстом: "${this.text}". Дата відгуку: ${this.date}`;
};

const review1 = new Review(
  "IPhone 15",
  "John",
  "Класний. Добре розбиває горіхи",
  5
);
console.log(review1.getDetails());

review1.editText(
  "Не дуже добрий горіхокол, після 10 горіхів перестав дзвонити"
);
review1.editRating(1);
console.log(review1.getDetails());

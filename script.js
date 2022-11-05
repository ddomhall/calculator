const keys = document.querySelector(`.keys`);
const screen = document.querySelector(`.screen`);
const history = document.querySelector(`.history`);
let sum = [];
// const LocSto = [];

const update = function (text) {
	screen.textContent = text.join(``);
};

keys.addEventListener(`click`, function (e) {
	// prevents refresh
	e.preventDefault();

	// assigns click target
	const target = e.target;

	// if target isn't a command, adds to sum and screen
	if (target.className.split(` `)[0] !== `command`) {
		sum.push(target.textContent);

		update(sum);

		// if target is `AC`, deletes sum
	} else if (target.textContent === `AC`) {
		sum = [];
		update(sum);

		// if target is `C`, deletes last character
	} else if (target.textContent === `C`) {
		sum.pop();
		update(sum);
	} else if (target.textContent === `=`) {
		const result = eval(sum.join(``)).toString();
		history.insertAdjacentHTML(`beforeend`, `<div class="item">${sum.join(``)}=${result}<button class="del">X</button></div>`);
		sum = [result];
		update(sum);
	}
});

history.addEventListener(`click`, function (e) {
	e.preventDefault();
	if (e.target.textContent !== `clear history`) sum = e.target.textContent.split(`X`)[0].split(`=`)[1].split(``);
	update(sum);
});

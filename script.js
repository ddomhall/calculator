const keys = document.querySelector(`.keys`);
const screen = document.querySelector(`.screen`);
let sum = [];

const update = function (text) {
	screen.textContent = text;
};

keys.addEventListener(`click`, function (e) {
	// e.preventDefault();
	if (e.target.className.split(` `)[0] !== `command`) {
		sum.push(e.target.textContent);

		update(sum.join(``));
	} else if (e.target.textContent === `AC`) {
		sum = [];
		update(sum.join(``));
	} else if (e.target.textContent === `C`) {
		sum.pop();
		update(sum.join(``));
	} else if (e.target.textContent === `=`) {
		const result = eval(sum.join(``));
		update(result);
		sum = [result];
	}
});

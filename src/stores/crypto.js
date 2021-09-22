import { writable } from 'svelte/store';

let localCur = [];
let pushingCur = [];

export const currency = writable([]);
fetch(
	'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
)
	.then((calling) => calling.json())
	.then((data) => {
		localCur = data;
		// console.log('LocalCur', localCur);
		localCur.forEach((account) => {
			let subset = Object.fromEntries(
				['current_price', 'name', 'ath_change_percentage', 'image']
					.filter((key) => key in account)
					.map((key) => [key, account[key]])
			);
			pushingCur.push(subset);
		});
		currency.set(pushingCur);
		// console.log(localCur)
		// let p = await calling.json();
		// console.log(p);
		// accountData = p;

		// (({ current_price, name, ath_change_percentage, image }) => ({
		// 	name,
		// 	ath_change_percentage,
		// 	image,
		// 	current_price
		// }))(account);
	});
// console.log('pushingCur', pushingCur);
// console.log('Currency', currency);

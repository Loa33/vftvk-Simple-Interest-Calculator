"use strict";

function compute() {
	const principal = document.getElementById("principal").value;
	const rate = document.getElementById("rate").value;
	const years = document.getElementById("years").value;
	const actualYear = new Date().getFullYear();
	const year = actualYear + parseInt(years);

	if (principal == "" || principal < 1) {
		alert("Enter a positive number");
		document.getElementById("principal").focus();
		return false;
	}

	let interest = principal * (rate / 100) * years;

	document.getElementById(
		"result"
	).innerHTML = `<p>If you deposit <span class="highlighted">${principal}</span></p> 
    <p>at an interest rate of <span class="highlighted">${rate}%</span></p>
    <p>You will receive and amount of <span class="highlighted">${interest}</span>,</p>
    <p>in the year <span class="highlighted">${year}</p>`;

	return true;
}

function updateRate() {
	let rateval = document.getElementById("rate").value;
	document.getElementById("rate_val").innerText = `${rateval}%`;
}

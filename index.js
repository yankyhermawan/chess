// function chessGrid() {
// 	var board = document.getElementById("board");
// 	for (let x = 1; x < 65; x++) {
// 		element = document.createElement("div");
// 		element.setAttribute("id", `${x}`);
// 		gridColor(x, element);
// 		board.appendChild(element);
// 	}
// }

// window.onload = chessGrid();

// function gridColor(x, element) {
// 	verticalCoordinates = Math.ceil(Number(x) / 8);
// 	horizontalCoordinates = Number(x) % (verticalCoordinates * 8);
// 	if ((verticalCoordinates + horizontalCoordinates) % 2 == 0) {
// 		element.setAttribute("class", "light");
// 	} else {
// 		element.setAttribute("class", "dark");
// 	}
// }

function checkAllowedMovement(currentLocation, id) {
	toggleOffButton();
	nextLocation = [];

	yCoordinates = Math.floor(Number(currentLocation) / 8);
	xCoordinates = Number(currentLocation) % 8;
	if (xCoordinates == 0) {
		xCoordinates = currentLocation - (yCoordinates - 1) * 8;
		yCoordinates = yCoordinates - 1;
	}
	if (id.includes("pawn")) {
		xPattern = [-1, 0, 1];
		yPattern = [-1];
		for (let x = 0; x < xPattern.length; x++) {
			nextXCoordinates = xCoordinates + xPattern[x];
			if (nextXCoordinates < 1 || nextXCoordinates > 8) {
				continue;
			}
			for (let y = 0; y < yPattern.length; y++) {
				nextYCoordinates = yCoordinates + yPattern[y];

				if (nextYCoordinates < 1 || nextYCoordinates > 8) {
					continue;
				}
			}
			nextLocation.push(nextYCoordinates * 8 + nextXCoordinates);
		}
	}
	if (id.includes("rook")) {
		rookMove(xCoordinates, yCoordinates);
	}
	if (id.includes("knight")) {
		knightMove(xCoordinates, yCoordinates);
	}
	if (id.includes("bishop")) {
		bishopMove(xCoordinates, yCoordinates);
	}

	for (let i = 0; i < nextLocation.length; i++) {
		//if (
		//	document.getElementById(`${nextLocation[i]}`).hasChildNodes() == false
		//) {
		document.getElementById(`${nextLocation[i]}`).classList.toggle("active");
		//}
	}
}

function toggleOffButton() {
	const element = document.getElementsByClassName("chess");
	for (let i = 0; i < element.length; i++) {
		element[i].className = "chess";
	}
}

function bishopMove(xCoordinates, yCoordinates) {
	xPattern = [-1, 1];
	yPattern = [-1, 1];
	limitXPositive = 8 - xCoordinates;
	limitXNegative = xCoordinates - 1;
	limitYPositive = 7 - yCoordinates;
	limitYNegative = yCoordinates;
	limitXPosYPos = Math.max(limitXPositive, limitYPositive);
	limitXPosYNeg = Math.max(limitXPositive, limitYNegative);
	limitXNegYPos = Math.max(limitXNegative, limitYPositive);
	limitXNegYNeg = Math.max(limitXNegative, limitYNegative);
	for (let i = 1; i < limitXPosYPos + 1; i++) {
		nextXCoordinates = xCoordinates + xPattern[1] * i;
		nextYCoordinates = yCoordinates + yPattern[1] * i;
		if (nextXCoordinates >= 1 && nextXCoordinates <= 8) {
			if (nextYCoordinates >= 1 && nextYCoordinates < 8) {
				if (
					document
						.getElementById(`${nextYCoordinates * 8 + nextXCoordinates}`)
						.hasChildNodes() == false
				) {
					nextLocation.push(nextYCoordinates * 8 + nextXCoordinates);
				} else {
					break;
				}
			}
		}
	}
	for (let i = 1; i < limitXPosYNeg + 1; i++) {
		nextXCoordinates = xCoordinates + xPattern[1] * i;
		nextYCoordinates = yCoordinates + yPattern[0] * i;
		if (nextXCoordinates >= 1 && nextXCoordinates <= 8) {
			if (nextYCoordinates >= 1 && nextYCoordinates < 8) {
				if (
					document
						.getElementById(`${nextYCoordinates * 8 + nextXCoordinates}`)
						.hasChildNodes() == false
				) {
					nextLocation.push(nextYCoordinates * 8 + nextXCoordinates);
				} else {
					break;
				}
			}
		}
	}
	for (let i = 1; i < limitXNegYPos + 1; i++) {
		nextXCoordinates = xCoordinates + xPattern[0] * i;
		nextYCoordinates = yCoordinates + yPattern[1] * i;
		if (nextXCoordinates >= 1 && nextXCoordinates <= 8) {
			if (nextYCoordinates >= 1 && nextYCoordinates < 8) {
				if (
					document
						.getElementById(`${nextYCoordinates * 8 + nextXCoordinates}`)
						.hasChildNodes() == false
				) {
					nextLocation.push(nextYCoordinates * 8 + nextXCoordinates);
				} else {
					break;
				}
			}
		}
	}
	for (let i = 1; i < limitXNegYNeg + 1; i++) {
		nextXCoordinates = xCoordinates + xPattern[0] * i;
		nextYCoordinates = yCoordinates + yPattern[0] * i;
		if (nextXCoordinates >= 1 && nextXCoordinates <= 8) {
			if (nextYCoordinates >= 1 && nextYCoordinates < 8) {
				if (
					document
						.getElementById(`${nextYCoordinates * 8 + nextXCoordinates}`)
						.hasChildNodes() == false
				) {
					nextLocation.push(nextYCoordinates * 8 + nextXCoordinates);
				} else {
					break;
				}
			}
		}
	}
}
function knightMove(xCoordinates, yCoordinates) {
	pattern1 = [
		[-2, 2],
		[-1, 1],
	];
	pattern2 = [
		[-1, 1],
		[-2, 2],
	];
	for (let i = 0; i < pattern1.length; i++) {
		for (let j = 0; j < pattern1.length; j++) {
			nextXCoordinates = xCoordinates + pattern1[0][i];
			nextYCoordinates = yCoordinates + pattern1[1][j];
			if (nextXCoordinates >= 1 && nextXCoordinates <= 8) {
				if (nextYCoordinates >= 1 && nextYCoordinates < 8) {
					if (
						document
							.getElementById(`${nextYCoordinates * 8 + nextXCoordinates}`)
							.hasChildNodes() == false
					) {
						nextLocation.push(nextYCoordinates * 8 + nextXCoordinates);
					} else {
						break;
					}
				}
			}
		}
	}
	for (let i = 0; i < pattern2.length; i++) {
		for (let j = 0; j < pattern2.length; j++) {
			nextXCoordinates = xCoordinates + pattern2[0][i];
			nextYCoordinates = yCoordinates + pattern2[1][j];
			if (nextXCoordinates >= 1 && nextXCoordinates <= 8) {
				if (nextYCoordinates >= 1 && nextYCoordinates < 8) {
					if (
						document
							.getElementById(`${nextYCoordinates * 8 + nextXCoordinates}`)
							.hasChildNodes() == false
					) {
						nextLocation.push(nextYCoordinates * 8 + nextXCoordinates);
					} else {
						break;
					}
				}
			}
		}
	}
}
function rookMove(xCoordinates, yCoordinates) {
	xPattern = [-1, 1];
	yPattern = [-1, 1];
	limitXPositive = 8 - xCoordinates;
	limitXNegative = xCoordinates - 1;
	limitYPositive = 7 - yCoordinates;
	limitYNegative = yCoordinates;
	for (let i = 0; i < limitXPositive; i++) {
		nextXCoordinates = xCoordinates + xPattern[1] * (i + 1);
		nextYCoordinates = yCoordinates;
		if (
			document
				.getElementById(`${nextYCoordinates * 8 + nextXCoordinates}`)
				.hasChildNodes() == false
		) {
			nextLocation.push(nextYCoordinates * 8 + nextXCoordinates);
		} else {
			break;
		}
	}
	for (let i = 0; i < limitXNegative; i++) {
		nextXCoordinates = xCoordinates + xPattern[0] * (i + 1);
		nextYCoordinates = yCoordinates;
		if (
			document
				.getElementById(`${nextYCoordinates * 8 + nextXCoordinates}`)
				.hasChildNodes() == false
		) {
			nextLocation.push(nextYCoordinates * 8 + nextXCoordinates);
		} else {
			break;
		}
	}
	for (let i = 0; i < limitYPositive; i++) {
		nextYCoordinates = yCoordinates + yPattern[1] * (i + 1);
		nextXCoordinates = xCoordinates;
		if (
			document
				.getElementById(`${nextYCoordinates * 8 + nextXCoordinates}`)
				.hasChildNodes() == false
		) {
			nextLocation.push(nextYCoordinates * 8 + nextXCoordinates);
		} else {
			break;
		}
	}
	for (let i = 0; i < limitYNegative; i++) {
		nextYCoordinates = yCoordinates + yPattern[0] * (i + 1);
		nextXCoordinates = xCoordinates;
		if (
			document
				.getElementById(`${nextYCoordinates * 8 + nextXCoordinates}`)
				.hasChildNodes() == false
		) {
			nextLocation.push(nextYCoordinates * 8 + nextXCoordinates);
		} else {
			break;
		}
	}
}

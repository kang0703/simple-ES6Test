/*
 * 변수 ( let, const, var )
 */
// 자바스크립트 호이스팅이란 사전적 의미로 끌어올리기 라는뜻
// 자바스크립트에서 끌어올려지는 것은 변수이다.
// 변수의 정의가 그 범위에 따라 선언과 할당으로 분리되는것 이다.


// var snack = "콘칩";

// function getFood(food) {
// 	console.log(snack);
// 	if(food) {
// 		var snack = '감자칩';
// 		return snack;
// 	}
// 	return snack;
// }
// getFood(false);
//
//
// 위의 코드는 실제 아래와 같다.
// var snack = "콘칩";

// function getFood(food) {
// 	var snack;
// 	if(food) {
// 		snack = "감자칩";
// 		return snack;
// 	}
// 	return snack;
// }
// getFood(false);

/*
 *******************************************************************************
 */

// let snack = '콘칩';

// function getFood(food) {
// 	if(food) {
// 		let snack = '감자칩';
// 		return snack;
// 	}
// 	return snack;
// }

// console.log(getFood(false));

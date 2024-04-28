/*
export function formatTimeElapsed(timestamp) {
	const millisecondsPerSecond = 1000;
	const millisecondsPerMinute = millisecondsPerSecond * 60;
	const millisecondsPerHour = millisecondsPerMinute * 60;
	const millisecondsPerDay = millisecondsPerHour * 24;

	const currentTime = new Date().getTime();
	const elapsedTime = currentTime - timestamp;

	const days = Math.floor(elapsedTime / millisecondsPerDay);
	const hours = Math.floor((elapsedTime % millisecondsPerDay) / millisecondsPerHour);
	const minutes = Math.floor((elapsedTime % millisecondsPerHour) / millisecondsPerMinute);
	const seconds = Math.floor((elapsedTime % millisecondsPerMinute) / millisecondsPerSecond);

	return `${days}д ${hours}ч ${minutes}м ${seconds}с`;
}
*/

export function formatTimeElapsed(timestamp: number) {
	const millisecondsPerSecond = 1000
	const millisecondsPerMinute = millisecondsPerSecond * 60
	const millisecondsPerHour = millisecondsPerMinute * 60

	const currentTime = new Date().getTime()
	const elapsedTime = currentTime - timestamp

	let result = ''

	// Вычисляем количество дней
	const days = Math.floor(elapsedTime / (millisecondsPerHour * 24));
	if (days > 0) {
		result += `${days} days `;
	}

	// Вычисляем количество часов
	const hours = Math.floor((elapsedTime % (millisecondsPerHour * 24)) / millisecondsPerHour);
	if (hours > 0 || result !== '') {
		result += `${hours} hours `;
	}

	// Вычисляем количество минут
	const minutes = Math.floor((elapsedTime % millisecondsPerHour) / millisecondsPerMinute);
	if (minutes > 0 || result !== '') {
		result += `${minutes} min `;
	}

	// Вычисляем количество секунд
	const seconds = Math.floor((elapsedTime % millisecondsPerMinute) / millisecondsPerSecond);
	result += `${seconds} sec`;

	return result;
}

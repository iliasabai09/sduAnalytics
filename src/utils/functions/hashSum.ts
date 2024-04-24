export async function hashSum(inputString: string): Promise<string> {
	// Преобразование строки в ArrayBuffer
	const data = new TextEncoder().encode(inputString)
	// Вычисление хэша с использованием алгоритма SHA-256
	const hashBuffer = await crypto.subtle.digest('SHA-256', data)
	// Преобразование ArrayBuffer в массив байтов
	const hashArray = Array.from(new Uint8Array(hashBuffer))
	// Преобразование массива байтов в шестнадцатеричную строку
	return hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('')
}

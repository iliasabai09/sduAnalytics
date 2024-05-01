export class LocalstorageProvider {
	static setItem(key, val) {
		localStorage.setItem(key, JSON.stringify(val))
	}

	static getItem(key) {
		const json = localStorage.getItem(key)
		return json ? JSON.parse(json) : null
	}

	static removeItem(key) {
		localStorage.removeItem(key)
	}

	static clear() {
		localStorage.clear()
	}
}

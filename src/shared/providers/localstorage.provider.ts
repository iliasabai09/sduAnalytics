export class LocalstorageProvider {
	static setItem(key: string, val: any) {
		localStorage.setItem(key, JSON.stringify(val))
	}

	static getItem(key: string) {
		const json = localStorage.getItem(key)
		return json ? JSON.parse(json) : null
	}

	static removeItem(key: string) {
		localStorage.removeItem(key)
	}

	static clear() {
		localStorage.clear()
	}
}

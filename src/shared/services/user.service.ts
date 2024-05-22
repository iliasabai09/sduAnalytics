import { LocalstorageProvider } from '@/shared/providers/localstorage.provider'

export class UserService {
	static setUser(user: any) {
		LocalstorageProvider.setItem('user', user)
	}

	static getUser() {
		return LocalstorageProvider.getItem('user')
	}

	static logout() {
		LocalstorageProvider.removeItem('user')
	}

	static async updateImg(img) {
		if (!img) throw new Error('Не передано изображение')
		const userJson = LocalstorageProvider.getItem('user')
		userJson.img = img
		LocalstorageProvider.setItem('user', userJson)
	}
}

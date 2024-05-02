import { LocalstorageProvider } from '@/shared/providers/localstorage.provider'

export class UserService {
	static setUser(user) {
		LocalstorageProvider.setItem('user', user)
	}

	static getUser() {
		return LocalstorageProvider.getItem('user')
	}

	static logout() {
		LocalstorageProvider.removeItem('user')
	}
}

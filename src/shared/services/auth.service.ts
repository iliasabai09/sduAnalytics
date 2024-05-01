import { useGet } from '@/shared/composables/useGet'
import { usePut } from '@/shared/composables/usePut'
import { hashSum } from '@/utils/functions/hashSum'
import { LocalstorageProvider } from '@/shared/providers/localstorage.provider'

export class AuthService {
	static async registerUser(user: any) {
		const _id = await hashSum(user.email.trim())
		const isAvailableUser = await useGet('users', _id)
		if (isAvailableUser) throw new Error('Пользователь с такой почтой уже существует')
		await usePut('users', user, _id)
	}

	static async loginUser(user: any) {
		const _id = await hashSum(user.email.trim())
		const response = await useGet('users', _id)
		if (!response) throw new Error('Данный пользователь не найден')
		if (response.password !== user.password) {
			throw new Error('Введен неверный пароль')
		}
		return response
	}

	static async logout() {
		LocalstorageProvider.removeItem('user')
	}


}

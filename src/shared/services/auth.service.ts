import { useGet } from '@/shared/composables/useGet'
import { usePut } from '@/shared/composables/usePut'
import { hashSum } from '@/utils/functions/hashSum'
import { LocalstorageProvider } from '@/shared/providers/localstorage.provider'
import { UserService } from './user.service'

export class AuthService {
	static async registerUser(user: any) {
		const _id = await hashSum(user.email.trim())
		const identify = user.email.split('@')[0]
		const isAvailableUser = await useGet('users', _id)
		if (isAvailableUser) throw new Error('Пользователь с такой почтой уже существует')
		return await usePut('users', {...user, id: _id, identify}, _id)
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

	static async updateImg(img) {
		if (!img) throw new Error('Не передано изображение')
		const user = UserService.getUser()
		const _id = user.id
		console.log('_id_id_id', _id)
		return await usePut('users', {...user, img}, _id)
	}
}

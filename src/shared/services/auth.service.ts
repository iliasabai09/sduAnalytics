import { useGet } from '@/shared/composables/useGet'
import { usePut } from '@/shared/composables/usePut'
import { hashSum } from '@/utils/functions/hashSum'

export class AuthService {
	static async registerUser(user) {
		const _id = await hashSum(user.email.trim())
		const isAvailableUser = await useGet('users', _id)
		console.log(isAvailableUser)
		if (isAvailableUser) throw new Error('Пользователь с такой почтой уже существует')
		await usePut('users', user, _id)
	}
}

import { useFetch } from '@/shared/composables/useFetch'

type useGet = 'users'

export async function useGet(url: useGet, id?: any, params?: any) {
	return await useFetch(url, 'get', {}, id, params)
}

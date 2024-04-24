import { useFetch } from '@/shared/composables/useFetch'

export async function useDelete(url, id) {
	return await useFetch(url, 'delete', {}, id)
}

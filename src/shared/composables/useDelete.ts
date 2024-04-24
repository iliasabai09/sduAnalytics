import { useFetch } from '@/shared/composables/useFetch'

export async function useDelete(url: string, id: string) {
	return await useFetch(url, 'delete', {}, id)
}

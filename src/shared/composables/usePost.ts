import { useFetch } from '@/shared/composables/useFetch'

export async function usePost(url, body, id?, params?) {
	return await useFetch(url, 'post', body, id, params)
}

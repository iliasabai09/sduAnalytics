import { useFetch } from '@/shared/composables/useFetch'

export async function usePut(url, body, id?, params?) {
	return await useFetch(url, 'put', body, id, params)
}

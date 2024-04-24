import { useFetch } from '@/shared/composables/useFetch'

export async function usePut(url: string, body: any, id?: any, params?: any) {
	return await useFetch(url, 'put', body, id, params)
}

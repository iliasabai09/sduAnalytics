import { useFetch } from '@/shared/composables/useFetch'

export async function usePost(url: string, body: any, id?: any, params?: any) {
	return await useFetch(url, 'post', body, id, params)
}

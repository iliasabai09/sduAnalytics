import { URL_LIST } from '@/shared/constants/url-list'

export async function useFetch(url = 'users', method, body, id?, params?) {
	let listUrl = URL_LIST[url].url
	if (!listUrl) throw new Error('Данный роут не найден')
	if (id) listUrl = listUrl + '/' + id
	if (params) listUrl = listUrl + '?' + params
	listUrl = listUrl + '.json'
	switch (method) {
		case 'get':
			return await fetch(listUrl).then(res => res.json())
		case 'post':
			if (!body) throw new Error('Тело запроса не передано')
			return await fetch(listUrl, {
				method: 'post',
				body: JSON.stringify(body)
			}).then(res => res.json())
		case 'put':
			if (!body) throw new Error('Тело запроса не передано')
			return await fetch(listUrl, {
				method: 'put',
				body: JSON.stringify(body)
			}).then(res => res.json())
		case 'delete':
			return await fetch(listUrl, {
				method: 'delete',
				body: JSON.stringify(body)
			}).then(res => res.json())
	}
}

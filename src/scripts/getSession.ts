export function getSessionCookie() {
	const cookies = document.cookie.split(';')
	for (let i = 0; i < cookies.length; i++) {
		const cookie = cookies[i].trim()
		if (cookie.startsWith('session=')) {
			return cookie.substring('session='.length, cookie.length)
		}
	}
	return null
}

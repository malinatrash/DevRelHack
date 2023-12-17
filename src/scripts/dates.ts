export const parseDate = (date: string): string => {
	const newDate = new Date(date)

	const options: Intl.DateTimeFormatOptions = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric',
		timeZoneName: 'short',
	}

	const formatter = new Intl.DateTimeFormat('ru-RU', options)
	const formattedDate = formatter.format(newDate)

	return formattedDate
}

// Пример использования
const dateString = '2023-12-16T15:23:49.174375Z'
const formattedDate = parseDate(dateString)
console.log(formattedDate) // Выводит удобочитаемую дату

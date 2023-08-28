export const getTimeLeft = (expirationDate: Date) => {
	const newExpirationDate = new Date(expirationDate)
	const now = new Date().getTime()
	const expirationTime = newExpirationDate?.getTime()

	const timeLeft =
		(expirationTime - now) / 1000 / 60 / 60 +
		new Date().getTimezoneOffset() / 60

	if (timeLeft > 24) {
		return `${Math.floor(timeLeft / 24)}d ${Math.floor(timeLeft % 24)}h`
	} else if (timeLeft <= 24 && timeLeft > 0) {
		return `${Math.floor(timeLeft).toString()}h`
	} else if (timeLeft <= 0) {
		return "0h"
	}
}

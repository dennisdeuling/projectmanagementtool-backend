const timeStamp = () => {
	const today = new Date();
	const date = `${today.getDate()}.${today.getMonth() + 1}.${today.getFullYear()}`;
	const time = `${today.getHours()}:${today.getMinutes()}`;

	return `${date}, ${time}`;
};

module.exports = timeStamp;
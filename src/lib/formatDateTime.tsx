const formatDateTime = (dateTimeString: string, shortFormat?: boolean) => {
    const date = new Date(dateTimeString);

    // Extracting the time in 12-hour format
    const hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = minutes < 10 ? `0${hours % 12 || 12}` : (hours % 12 || 12); // Convert 24-hour format to 12-hour format
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    // Formatting the date
    const day = date.getUTCDate();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getUTCMonth()];
    const year = date.getUTCFullYear();

    return shortFormat ? `${day} ${month} ${year}` : `${formattedHours}:${formattedMinutes}${ampm} - ${day} ${month} ${year}`;
};

export default formatDateTime;
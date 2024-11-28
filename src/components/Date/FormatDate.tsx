
const FormatDate = (date: string | number | Date) => {
    const d = new Date(date);
    const year = d.getFullYear().toString(); // Get last two digits of the year
    const month = (d.getMonth() + 1).toString().padStart(2, '0'); // Add leading zero if month < 10
    const day = d.getDate().toString().padStart(2, '0'); // Add leading zero if day < 10
  
    return `${year}-${month}-${day}`;

}

export default FormatDate
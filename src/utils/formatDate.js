function formatDate(dateFirestore) {
    let timestamp = dateFirestore.seconds * 1000 + dateFirestore.nanoseconds / 1000000;
    let dateObj = new Date(timestamp);
    let date = dateObj.getDate();
    let month = dateObj.getMonth() + 1;
    let year = dateObj.getFullYear();
    let fullDate = `${date}/${month}/${year}`;
    return fullDate;
}

export default formatDate;
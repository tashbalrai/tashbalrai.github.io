const formatDate = (stringDate: string | undefined): string => {
    if (!stringDate) {
        return "";
    }
    return new Date(stringDate).toUTCString().split("00:00:00")[0];
};

export default formatDate;

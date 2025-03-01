const formatDate = (stringDate: string | undefined): string => {
    if (!stringDate) {
        return "";
    }
    return new Date(stringDate).toDateString();
};

export default formatDate;

const filterByTerm = (inputArr, searchTerm) => {
    if (!searchTerm) throw Error("searchTerm can not be empty");
    if (!inputArr.length) throw Error("inputArr can not be empty");
    const regex = new RegExp(searchTerm, 'i');
    return inputArr.filter(arrayElement => arrayElement.url.match(regex));
};

module.exports = filterByTerm;


const adn = [''];

function filterString(arr, query) {
    return arr.filter((stri) =>
    stri.includes(query.upperCase()));
}



module.exports = filterString(adn, 'C', 'T', 'A', 'G');
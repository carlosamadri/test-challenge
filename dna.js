function adn(code) {
    let base = ['A', 'T', 'C', 'G'];
    let seq = "";
    for (let i = 0; i < code.length; i++) {
        if (base.includes(code[i])) {
            seq += code[i];
        }
        
    }
    return seq;
}
module.exports =adn;
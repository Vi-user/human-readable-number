module.exports = function toReadable (number) {
  const oneNums = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        twoSimpleNums = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        twoBigNums = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

    const arrOfNums = number.toString().split('');
    if (arrOfNums.length === 1) return oneNums[number];
    if (arrOfNums.length === 2) {
        return twoSymbolsNum(number);
    }
    if (arrOfNums.length === 3) {
        const secondPart = twoSymbolsNum(number.toString().slice(1))
        return (secondPart != '') ? `${oneNums[+arrOfNums[0]]} hundred ${secondPart}` : `${oneNums[+arrOfNums[0]]} hundred`;
    }

    function twoSymbolsNum(num) {
        const arrOfNums = num.toString().split('');
        if (+arrOfNums[0] === 0 && +arrOfNums[1] === 0) return '';
        if (+arrOfNums[0] === 0) return oneNums[+arrOfNums[1]];
        if (+arrOfNums[0] === 1) return twoSimpleNums[+arrOfNums[1]];
        return (+arrOfNums[1] != 0) ? `${twoBigNums[+arrOfNums[0]-2]} ${oneNums[+arrOfNums[1]]}` : `${twoBigNums[arrOfNums[0]-2]}`;
    }
}

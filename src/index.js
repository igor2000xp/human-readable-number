module.exports = function toReadable (number) {
    let numberToString = '';

    if (number < 20) {
        return oneNumber(number);
    } else  if (number < 100) {
        return twoNumber(number);
    } else if (number < 1000) {
        return threeNumber(number);
    }

    function oneNumber(n) {
        switch (n) {
            case 0:
                numberToString = 'zero';
                break;
            case 1:
                numberToString = 'one';
                break;
            case 2:
                numberToString = 'two';
                break;
            case 3:
                numberToString = 'three';
                break;
            case 4:
                numberToString = 'four';
                break;
            case 5:
                numberToString = 'five';
                break;
            case 6:
                numberToString = 'six';
                break;
            case 7:
                numberToString = 'seven';
                break;
            case 8:
                numberToString = 'eight';
                break;
            case 9:
                numberToString = 'nine';
                break;
            case 10:
                numberToString = 'ten';
                break;
            case 11:
                numberToString = 'eleven';
                break;
            case 12:
                numberToString = 'twelve';
                break;
            case 13:
                numberToString = 'thirteen';
                break;
            case 14:
                numberToString = 'fourteen';
                break;
            case 15:
                numberToString = 'fifteen';
                break;
            case 16:
                numberToString = 'sixteen';
                break;
            case 17:
                numberToString = 'seventeen';
                break;
            case 18:
                numberToString = 'eighteen';
                break;
            case 19:
                numberToString = 'nineteen';
                break;

            default:
                // twoNumber(n);
                break;
        }
        return numberToString;
    }

    function twoNumber(n) {
        // const secondNumber = Math.floor(n/10);
        const firstNumber = n % 10;
        // console.log(n);

        switch (n) {
            case 20:
                numberToString = 'twenty';
                break;
            case 30:
                numberToString = 'thirty';
                break;
            case 40:
                numberToString = 'forty';
                break;
            case 50:
                numberToString = 'fifty';
                break;
            case 60:
                numberToString = 'sixty';
                break;
            case 70:
                numberToString = 'seventy';
                break;
            case 80:
                numberToString = 'eighty';
                break;
            case 90:
                numberToString = 'ninety';
                break;
            default:
                numberToString = ifCase(n);
                break;
        }

        function ifCase(n) {
            if (n > 20 && n < 30) {
                numberToString = `twenty ${oneNumber(firstNumber)}`;
                return numberToString;
            } else if (n > 30 && n < 40) {
                numberToString = `thirty ${oneNumber(firstNumber)}`;
                return numberToString;
            } else if (n > 40 && n < 50) {
                numberToString = `forty ${oneNumber(firstNumber)}`;
                return numberToString;
            } else if (n > 50 && n < 60) {
                numberToString = `fifty ${oneNumber(firstNumber)}`;
                return numberToString;
            } else if (n > 60 && n < 70) {
                numberToString = `sixty ${oneNumber(firstNumber)}`;
                return numberToString;
            } else if (n > 70 && n < 80) {
                numberToString = `seventy ${oneNumber(firstNumber)}`;
                return numberToString;
            } else if (n > 80 && n < 90) {
                numberToString = `eighty ${oneNumber(firstNumber)}`;
                return numberToString;
            } else if (n > 90 && n < 100) {
                numberToString = `ninety ${oneNumber(firstNumber)}`;
                return numberToString;
            }
        }


        return numberToString;
    }

    function threeNumber(n) {
        const thirdNum = Math.floor(n / 100);
        const twoRest = n % 100;

        if (twoRest >= 20) {
            return `${oneNumber(thirdNum)} hundred ${twoNumber(twoRest)}`;
        } else if (twoRest === 0) {
            return `${oneNumber(thirdNum)} hundred`;
        }

        return `${oneNumber(thirdNum)} hundred ${oneNumber(twoRest)}`;
    }

    return numberToString;

}

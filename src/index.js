module.exports = function toReadable (number) {
  

    const a = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const b = [ 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const d = ['', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const x = ['hundred'];
           
    let str = number.toString();
    let strNomber = '';


    if(str.length === 1) {
        return a[number];
    } else if(str.length === 2){
        if(str[0] === '1'){
          strNomber = b[parseInt(str[1])];
        } else {
            strNomber = (d[parseInt(str[0])-1] + ((str[1]!='0')?(' ' + a[parseInt(str[1])]):''));
        };
    };
    

     if(str.length === 3){

        strNomber = (a[parseInt(str[0])] + ( ' ' + x[0]));

        if (str[1]==='0') {
            if (str[2] !== '0') {
                strNomber = strNomber + ( ' ' + a[parseInt(str[2])]);
            };
        } else {
            if (str[1] === '1') {
                strNomber = strNomber + (' ' + b[parseInt(str[2])]);
            } else {
                strNomber = strNomber + (' ' + d[parseInt(str[1])-1]) + ((str[2]!='0')?(' ' + a[parseInt(str[2])]):'');
            };
        };

    };


    return strNomber;

}

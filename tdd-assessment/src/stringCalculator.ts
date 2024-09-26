function add (num: string): number | null {
    if (num === '') return 0;

    let ele: string | undefined;
    let delimiters: RegExp = /,|\n/;

    if(num.startsWith('//')) {
        const parts = num.split('\n');
        ele = parts[0].slice(2); //this gives us custom delimiter
        delimiters = new RegExp(ele.replace(/[*]/g, '\\'));
        num = parts[1];
    }

    const numArr = num.split(delimiters)
        .map(Number)
        .filter(num => !isNaN(num));

    const negative = numArr.filter(num => num < 0);

    if(negative.length > 0) {
        throw new Error(`negative numbers not allowed: ${negative.join(',')}`)
    }

    return numArr.reduce((sum, num) => sum + num, 0);

};

export default add;
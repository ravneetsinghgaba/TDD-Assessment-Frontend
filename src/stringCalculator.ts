function add (num: string): number | undefined {
    if (num === '') return 0;

    let ele = /,|\n/;
    if(num.startsWith('//')) {
        const parts = num.split('\n');
        ele = new RegExp(parts[0].slice(2)); //this gives us custom delimiter
        num = parts[1];
    }

    const numArr = num.split(ele).map(Number);
    const negative = numArr.filter(num => num < 0);

    if(negative.length > 0) {
        throw new Error(`negative numbers not allowed: ${negative.join(',')}`)
    }

    return numArr.reduce((sum, num) => sum + num, 0);

};

export default add;
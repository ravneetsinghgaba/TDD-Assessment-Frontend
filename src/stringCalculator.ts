function add (num: string): number | undefined {
    if (num === '') return 0;

    let ele = /,|\n/;
    if(num.startsWith('//')) {
        const parts = num.split('\n');
        ele = new RegExp(parts[0].slice(2)); //this gives us custom delimiter
        num = parts[1];
    }

    const numArr = num.split(ele).map(Number);
    return numArr.reduce((sum, num) => sum + num, 0);

};

export default add;
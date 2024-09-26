function add (num: string): number | undefined {
    if (num === '') return 0;

    const ele = /,|\n/;

    const numArr = num.split(ele).map(Number);
    return numArr.reduce((sum, num) => sum + num, 0);

};

export default add;
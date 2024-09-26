function add (num: string): number | undefined {
    if (num === '') return 0;

    if(!num.includes(',')) return parseInt(num);

    const numArr = num.split(',').map(Number);
    return numArr.reduce((sum, num) => sum + num, 0);

};

export default add;
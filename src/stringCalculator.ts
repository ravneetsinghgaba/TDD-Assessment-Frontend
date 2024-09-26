function add (num: string): number | undefined {
    if (num === '') return 0;

    if(!num.includes(',')) return parseInt(num);

    const numArr = num.split(',').map(Number);
    return numArr[0] + numArr[1];

};

export default add;
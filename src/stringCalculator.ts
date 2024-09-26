function add (num: string): number | undefined {
    if (num === '') return 0;

    if(!num.includes(',')) return parseInt(num);

};

export default add;
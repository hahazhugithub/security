const Token = require('csrf');
const secret = "LuwvoIDpCvu1tGmKdJFba3SbpLYzAm8YICiz6uf6h8PQ8baREReX-tRogjhuKPAXhmyHwFwuKeZLnScBWQfFLWAj530pbk8ppOEvkSxnR4smggiXtVjOxGhGnCaHhDTDdngMitAyxctBw3eWkaHe0FvT1Whw58FDASHTy8c47mU";;
const TOKEN = new Token();


const getCSRFToken = () => {
    return TOKEN.create(security.secret);
};

const verifyCSRFToken = (token) => {
    console.log(secret, token);
    return TOKEN.verify(secret, token)
};


console.log("result",verifyCSRFToken("xw8LXI61-K0Hdq2uPtPUpVFBnjAl8ODSJFmc"));


console.log("result1",verifyCSRFToken("xw8LXI6"));
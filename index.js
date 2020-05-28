const core = require('@actions/core');
const github = require('@actions/github');

try {
    function isPrime(n) {
        if (n === 1) {
            return false;
        }
    
        else if (n === 2) {
            return true;
        }
    
        else {
            for (let i = 2; i < n; i++) {
                if (n % i === 0 ) {
                    return false;
                }
            }
            return true;
        }
    }
} catch (error) {
    core.setFailed(error.message);
}
var assert = require('assert')

assert(isPrime(5), " test case 1 pass - isPrime(5)");
assert(isPrime(7), " test case 2 pass - isPrime(7)");
assert(isPrime(11), " test case 3 pass - isPrime(11)");
assert(isPrime(13), " test case 4 pass - isPrime(17)");
assert(isPrime(20) === false, " test case 5 pass - isPrime(20)");
/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    const stack = [];
    for (const c of s) {
        const top = stack[stack.length - 1];
        if (top && top === getCorrespondingBracket(c)) {
            stack.pop();
        } else {
            stack.push(c);
        }
    }
    if (stack.length === 0) {
        return true;
    } else {
        return false;
    }
};

const getCorrespondingBracket = (bracket) => {
    switch (bracket) {
        case(")"): {
            return "(";
        }
        case("]"): {
            return "[";
        }
        case("}"): {
            return "{";
        }
    }
};

console.log(isValid("()"))

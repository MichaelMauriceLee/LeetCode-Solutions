/**
 * @param {string} s
 * @return {string}
 */

const longestPalindrome = (s) => {
    let longest = s.charAt(0);
    // odd case
    for (let i = 0; i < s.length; i++) {
        let left = i, right = i;
        while (left >= 0 && right < s.length) {
            if (s.charAt(left - 1) === s.charAt(right + 1)) {
                left--;
                right++;
            } else {
                break;
            }
        }
        const substr = s.substring(left, right + 1);
        if (substr.length > longest.length) {
            longest = substr;
        }
    }

    // even case
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i + 1) === s.charAt(i)) {
            let left = i, right = i + 1;
            while (left >= 0 && right < s.length) {
                if (s.charAt(left - 1) === s.charAt(right + 1)) {
                    left--;
                    right++;
                } else {
                    break;
                }
            }
            const substr = s.substring(left, right + 1);
            if (substr.length > longest.length) {
                longest = substr;
            }
        }
    }

    return longest;
};

console.log(longestPalindrome('babad'))

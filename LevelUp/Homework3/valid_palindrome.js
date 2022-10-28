var isPalindrome = function(s) {
    s = s.replace(/[^\w\s]/g, '').toLowerCase()
    s = s.replace(/[&\/\\#@_,+()$~%.'":*?<>{}\s]/g, '')
    for(let i = 0; i < s.length / 2; i++) {
        if(s[i] !== s[s.length - 1 - i]) return false
    }
            return true
};

console.log(isPalindrome("A man, a plan, a canal: Panama"))
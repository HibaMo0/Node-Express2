function timeToWords(timeStr) {
    const numWords = {
      0: 'twelve', 1: 'one', 2: 'two', 3: 'three', 4: 'four',
      5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine',
      10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen',
      14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen',
      18: 'eighteen', 19: 'nineteen', 20: 'twenty', 30: 'thirty',
      40: 'forty', 50: 'fifty'
    };
  
    function twoDigitToWords(num) {
      if (num < 20) return numWords[num];
      const tens = Math.floor(num / 10) * 10;
      const ones = num % 10;
      return ones === 0 ? numWords[tens] : `${numWords[tens]} ${numWords[ones]}`;
    }
  
    const [hh, mm] = timeStr.split(":").map(Number);
  
    if (hh === 0 && mm === 0) return "midnight";
    if (hh === 12 && mm === 0) return "noon";
  
    const period = hh < 12 ? "am" : "pm";
    const hour12 = hh % 12 === 0 ? 12 : hh % 12;
    const hourWord = numWords[hour12];
  
    if (mm === 0) return `${hourWord} o’clock ${period}`;
    if (mm < 10) return `${hourWord} oh ${numWords[mm]} ${period}`;
    
    return `${hourWord} ${twoDigitToWords(mm)} ${period}`;
  }
  
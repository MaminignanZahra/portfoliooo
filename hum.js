function palindrome(str) {
    const maj =str.toUpperCase().replace(/[^a-zA-Z0-9]/g, '');
    const inv=maj.split('').reverse().join('');
    if(maj==inv){
      return true;
    }
     else if(maj!=inv) {
        return false;
     }     
  }
  console.log(palindrome("0/0"));


  function convertToRoman(num) {
    const romain=[
      
      {chiff:1000 ,roman:'M'},
      {chiff:900 ,roman:'CM'},
      {chiff:500 ,roman:'D'},
      {chiff:400 ,roman:'CD'},
      {chiff:100 ,roman:'C'},
      {chiff:90 ,roman:'XC'},
      {chiff:50 ,roman:'L'},
      {chiff:40 ,roman:'XL'},
      {chiff:10 ,roman:'X'},
      {chiff:9 ,roman:'IX'},
      {chiff:5,roman:'V'},
      {chiff:4 ,roman:'IV'},
      {chiff:1 ,roman:'I'}
    ];
    let kpa='';
    for(let i=0;i<romain.length;i++){
      while(num>=romain[i].chiff){
        kpa+=romain[i].roman;
        num-=romain[i].chiff;
      }
  
  
    }
   return kpa;
  
  
  
  function rot13(str) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const caracteresSpeciaux = ['?', '!'];
    const caracteres = str.split('');
  
    for (let i = 0; i < caracteres.length; i++) {
      const char = caracteres[i];
      if (char.match(/[a-zA-Z]/)) {
        const index = alphabet.indexOf(char.toUpperCase());
        const nouvelIndex = (index + 13) % 26;
        caracteres[i] = alphabet[nouvelIndex];
      }
      else if (caracteresSpeciaux.includes(char)) {
      }
      else if (char === ' ') {
      }
      else {
        caracteres[i] = '';
      }
    }
    return caracteres.join('');
  }
  
  console.log(rot13("SERR CVMMN !")); 
  
  

  function telephoneCheck(str) {
    const car = [';', ''];
    const debstr = 1;
    str = str.split('');
  
    if (str.length < 10 || str.length > 11) {
      return false;
    }
  
    if (str.length === 10) {
      for (let i = 0; i < str.length; i++) {
        if (isNaN(parseInt(str[i]))) {
          return false;
        }
      }
    } else if (str.length === 11) {
      if (str[0] !== debstr) {
        return false;
      }
  
      for (let i = 1; i < str.length; i++) {
        if (isNaN(parseInt(str[i]))) {
          return false;
        }
      }
    }
  
    return true;
  }
  
  console.log(telephoneCheck("1 b55 555 5555")); 
  
  
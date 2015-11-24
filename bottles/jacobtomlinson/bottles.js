// Jacob Tomlinson
// node jacobtomlinson.js
// 329 bytes
s=" ";t=".";a="bottle";b=" on the wall";c=a+"s";d=" of beer";e=s+c+d+b+", ";f=s+c+d+t;g="Take one down and pass it around, ";h=s+a+d+b+t;n=s+c+d+b+t;o=s+a+d+t;p="Go to the store and buy some more, 99 "+c+d+b+t;q=s+a+d+b+", ";c=console.log;for(i=99;i>0;i--){j=i-1;if(i==1){c(i+q+i+o);c(p)}else{c(i+e+i+f);j==1?c(g+j+h):c(g+j+n)}}

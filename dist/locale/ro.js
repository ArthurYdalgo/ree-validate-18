!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):((e=e||self).__ree_validate_locale__ro=e.__ree_validate_locale__ro||{},e.__ree_validate_locale__ro.js=n())}(this,function(){"use strict";var e,n={name:"ro",messages:{after:function(e,n){return"Câmpul "+e+" trebuie să fie după "+n[0]+"."},alpha:function(e){return"Câmpul "+e+" poate conține doar literele alfabetului."},alpha_dash:function(e){return"Câmpul "+e+' poate conține caracter alfanumerice, cât și caracterele "-" sau "_".'},alpha_num:function(e){return"Câmpul "+e+" poate conține doar caracter alfanumerice."},alpha_spaces:function(e){return"Câmpul "+e+" poate conține literele alfabetului cât și spații."},before:function(e,n){return"Câmpul "+e+" trebuie să fie după "+n[0]+"."},between:function(e,n){return"Câmpul "+e+" trebuie să fie între "+n[0]+" și "+n[1]+"."},confirmed:function(e){return"Câmpul "+e+" nu coincide."},credit_card:function(e){return"Câmpul "+e+" este invalid."},date_between:function(e,n){return"Câmpul "+e+" trebuie să fie între "+n[0]+" și "+n[1]+"."},date_format:function(e,n){return"Câmpul "+e+" trebuie să fie în următorul format "+n[0]+"."},decimal:function(e,n){void 0===n&&(n=[]);var i=n[0];return void 0===i&&(i="*"),"Câmpul "+e+" trebuie să fie numberic și poate conține"+("*"===i?"":" "+i)+" zecimale."},digits:function(e,n){return"Câmpul "+e+" trebuie să fie numeric și să conțină exact "+n[0]+" caractere."},dimensions:function(e,n){return"Câmpul "+e+" trebuie să fie "+n[0]+" pixeli lungime și "+n[1]+" pixeli înălțime."},email:function(e){return"Câmpul "+e+" trebuie să conțină un email valid."},excluded:function(e){return"Câmpul "+e+" trebuie să conțină o valoare validă."},ext:function(e){return"Câmpul "+e+" trebuie să fie un nume de fișier valid."},image:function(e){return"Câmpul "+e+" trebuie să fie o imagine."},included:function(e){return"Câmpul "+e+" trebuie să conțină o valoare validă."},ip:function(e){return"Câmpul "+e+" trebuie să conțină o adresa IP vaidă."},max:function(e,n){return"Câmpul "+e+" nu poate fi mai mare de "+n[0]+" caractere."},max_value:function(e,n){return"Câmpul "+e+" trebuie să fie maxim "+n[0]+"."},mimes:function(e){return"Câmpul "+e+" trebuie să conțină un fișier cu extensie validă."},min:function(e,n){return"Câmpul "+e+" trebuie să fie cel puțin "+n[0]+" caractere."},min_value:function(e,n){return"Câmpul "+e+"trebuie să fie cel puțin "+n[0]+"."},numeric:function(e){return"Câmpul "+e+" poate conține doar valori numerice."},regex:function(e){return"Formatul câmpului "+e+" este invalid."},required:function(e){return"Câmpul "+e+" este necesar."},size:function(e,n){var i,u,t,r=n[0];return"Câmpul "+e+" nu trebuie să depășească "+(i=r,u=1024,t=0==(i=Number(i)*u)?0:Math.floor(Math.log(i)/Math.log(u)),1*(i/Math.pow(u,t)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][t])+"."},url:function(e){return"Câmpul "+e+" nu este un URL valid."}},attributes:{}};return"undefined"!=typeof ReeValidate&&ReeValidate.Validator.localize(((e={})[n.name]=n,e)),n});
!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(n.__ree_validate_locale__he=n.__ree_validate_locale__he||{},n.__ree_validate_locale__he.js=e())}(this,function(){"use strict";var n=function(n){var e=0===(n=1024*Number(n))?0:Math.floor(Math.log(n)/Math.log(1024));return 1*(n/Math.pow(1024,e)).toFixed(2)+" "+["Byte","KB","MB","GB","TB","PB","EB","ZB","YB"][e]},e={name:"he",messages:{after:function(n,e){return"השדה "+n+" חייב להכיל תאריך לאחר "+e[0]+"."},alpha_dash:function(n){return"השדה "+n+" יכול להכיל רק אותיות, מספרים ומקפים."},alpha_num:function(n){return"השדה "+n+" יכול להכיל רק אותיות ומספרים.."},alpha_spaces:function(n){return"השדה "+n+" יכול להכיל רק אותיות ורווחים."},alpha:function(n){return"השדה "+n+" יכול להכיל רק אותיות."},before:function(n,e){return"השדה "+n+" חייב להכיל תאריך לפני "+e[0]+"."},between:function(n,e){return"הערך "+n+" חייב להיות בין "+e[0]+" ל- "+e[1]+"."},confirmed:function(n){return"הערכים של "+n+" חייבים להיות זהים."},date_between:function(n,e){return"השדה "+n+" חייב להיות בין התאריכים "+e[0]+" ו- "+e[1]+"."},date_format:function(n,e){return"השדה "+n+" חייב להיות בפורמט "+e[0]+"."},decimal:function(n,e){void 0===e&&(e=["*"]);var t=e[0];return"השדה "+n+" חייב להיות מספרי ולהכיל "+("*"===t?"":t)+" נקודות עשרוניות."},digits:function(n,e){return"השדה "+n+" חייב להיות מספר ולהכיל "+e[0]+" ספרות בדיוק."},dimensions:function(n,e){return"השדה "+n+" חייב להיות "+e[0]+" פיקסלים על "+e[1]+" פיקסלים."},email:function(n){return"השדה "+n+" חייב להכיל כתובת אימייל תקינה."},ext:function(n){return"השדה "+n+" חייב להכיל קובץ תקין."},image:function(n){return"השדה "+n+" חייב להכיל תמונה."},in:function(n){return"השדה "+n+" חייב להיות בעל ערך תקין."},ip:function(n){return"השדה "+n+" חייב להכיל כתובת IP תקינה."},max:function(n,e){return"השדה "+n+" לא יכול להכיל יותר מ- "+e[0]+" תווים."},max_value:function(n,e){return"השדה "+n+" יכול להיות "+e[0]+" לכל היותר."},mimes:function(){return"הקובץ חייב להיות מסוג תקין."},min:function(n,e){return"השדה "+n+" חייב להכיל "+e[0]+" תווים לפחות."},min_value:function(n,e){return"הערך של "+n+" חייב להיות לפחות "+e[0]+"."},not_in:function(n){return"השדה "+n+" חייב להכיל ערך תקין."},numeric:function(n){return"השדה "+n+" יכול להכיל ספרות בלבד."},regex:function(n){return"הפורמט של "+n+" אינו תקין."},required:function(n){return"חובה למלא את השדה "+n+"."},size:function(e,t){var r=t[0];return"השדה "+e+" חייב לשקול פחות מ "+n(r)+"."},url:function(n){return n+" אינו מכיל כתובת אינטרנט תקינה."}},attributes:{}};return"undefined"!=typeof ReeValidate&&ReeValidate.Validator.addLocale(e),e});
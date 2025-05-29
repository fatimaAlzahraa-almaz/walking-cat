
 function funca(b='Character_spritesheet')
{
let a=document.getElementById('ct');
a.className = '';
a.className += `   Character_spritesheet pixelart ${b}`;
console.log(a.className);
}
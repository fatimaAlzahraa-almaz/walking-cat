 
 function handle(b='Character_spritesheet')
{
   var s=document.getElementById('button-sound');
  s.currentTime = 0;
   s.playbackRate = 1.5;
  s.play();
let a=document.getElementById('ct');
a.className = '';
a.className += `   Character_spritesheet pixelart ${b}`;
console.log(a.className);
}
function sound()
{
   var s=document.getElementById('song');
  s.currentTime = 0;
   s.playbackRate = 1;
  s.play();
}
 

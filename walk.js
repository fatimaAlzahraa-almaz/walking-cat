const s1 = new Audio('./mouse-click_gt1reD8.mp3');
const s2 = new Audio('./Yung_Kai_Blue_Cover_By_Oia_CatLyric_Video_cat_catlover_sad_vibes.mp3');
 
 function handle(b='Character_spritesheet')
{
  
  s1.currentTime = 1.1;
   s1.playbackRate = 1.5;
  s1.play();
let a=document.getElementById('ct');
a.className = '';
a.className += `   Character_spritesheet pixelart ${b}`;
console.log(a.className);
}
function sound()
{
    
  s2.currentTime = 0;
   s2.playbackRate = 1;
  s2.play();
}
 

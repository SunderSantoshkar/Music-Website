const music= new Audio("/Audio/01.m4a");
// music.play();                  



let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index= el.target.id;
        // console.log(index);
        music.src =`/Aaudio/${index}.mp3`;
        poster_master_play.src =`/img/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill')
        masterPlay.classList.add('bi-pause-fill')
                   // SongTitles
                   let SongTitles = songs.filter((els) =>{
                    return els.id ==index;
                   });

                   SongTitles.forEach(elss =>{
                    let { songName } = elss;
                    title.innerHTML = songName;
                   });

                   makeAllBackground();
                   Array.from(document.getElementsByClassName('sonsItem'))[index-1].style.background = "rbg(105, 105,105,.1)";
                   makeAllplay();
                   el.target.classList.remove('bi-pause-fill');
                   el.target.classList.add('bi-play-fill');

                   // SongTitles
    })
})





                          // PopularSong Start Icon
let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_somg =document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click',()=>{
    pop_somg.scrollLeft +=330;
});
pop_song_left.addEventListener('click',()=>{
    pop_somg.scrollLeft -=330;
});
                // PopularSong End Icon

                // PopularArts Start Icon
let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx=document.getElementsByClassName('Artists_bx')[0];

pop_art_right.addEventListener('click',()=>{
    Artists_bx.scrollLeft +=330;
})
pop_art_left.addEventListener('click',()=>{
    Artists_bx.scrollLeft -=330;
})
                // PopularArts Start End Icon

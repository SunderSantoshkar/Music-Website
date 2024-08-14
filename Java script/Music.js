const music = new Audio("/Audio/1.m4a");
music.play();  
console.log(music);                
 

// Add a Music and Poster & Name
const songs = [
  {
    id: "1",
    songName: `Dil Ki Tanhai Ko <br>
        <div class="subtitle">Song by Kumar Sanu</div>`,
    poster: "/img/1.jpg"
  },
  {
    id: "2",
    songName: `Ram Jaane <br>
        <div class="subtitle">Sonu Nigam ...</div>`,
    poster: "/img/2.jpg"
  },
  {
    id: "3",
    songName: `Tu Pya Hai Kisi Aur Ka <br>
        <div class="subtitle">Anuradha Paudwal and Kumar Sanu
        </div>`,
        poster: "/img/3.jpg"
      },
  {
    id: "4",
    songName: `Maine Payal Hai Chhankai <br>
        <div class="subtitle">Falguni Pathak </div>`,
    poster: "/img/4.jpg"
  },
  {
    id: "5",
    songName: `Sona Kitna Sona Hai<br>
    <div class="subtitle">Sushma Shreshta and Udit Narayan</div>`,
    poster: "/img/5.jpg"
  },
  {
    id: "6",
    songName: `Oh Oh Jane Jaana <br>
        <div class="subtitle">Kamaal Khan</div>`,
    poster: "/img/6.jpg"
  },
  {
    id: "7",
    songName: `Kitna Pyaara Tujhe Rabne Banaya<br>
        <div class="subtitle">Alka Yagnik and Udit Narayan</div>`,
    poster: "/img/7.jpg"
  },
  {
    id: "8",
    songName: `Gup Chup Gup Chup<br>
    <div class="subtitle">Alka Yagnik and Ila Arun </div>`,
    poster: "/img/8.jpg"
  },
  {
    id: "9",
    songName: `Tere Ishq Mein Nachenge<br>
        <div class="subtitle">Alisha Chinai, Kumar Sanu, and Sapna Mukherjee</div>`,
    poster: "/img/9.jpg"
  },
  {
    id: "10",
    songName: `Kisi Disco Mein Jaaye<br>
        <div class="subtitle">Alka Yagnik and Udit Naraya</div>`,
        poster: "/img/10.jpg"
  },
  {
    id: "11",
    songName: `Pyar Dilon Mein Hai<br>
        <div class="subtitle">Alka Yagnik and Sonu Nigam </div>`,
    poster: "/img/11.jpg"
  },
  {
    id: "12",
    songName: `Tu Mujhe Kabool (Jhankar)<br>
        <div class="subtitle">Kavita Krishnamurthy and Mohammed Aziz
        </div>`,
    poster: "/img/12.jpg"
  },
  {
    id: "13",
    songName: `Kisi Din Banoongi Main<br>
    <div class="subtitle">Alka Yagnik and Udit Narayan</div>`,
    poster: "/img/13.jpg"
  },
  {
    id: "14",
    songName: `Chaahat Na Hoti<br>
        <div class="subtitle">Alka Yagnik and Vinod Rathod</div>`,
    poster: "/img/14.jpg"
  },
  {
    id: "15",
    songName: `Did Tera Devar Deewana<br>
        <div class="subtitle">Lata Mangeshkar</div>`,
    poster: "/img/17.jpg"
  },
  {
    id: "16",
    songName: `Yeh Dua Hai Meri<br>
    <div class="subtitle">Alka Yagnik and Kumar Sanu</div>`,
    poster: "/img/15.jpg"
  },
  {
    id: "17",
    songName: `Yeh Bandhan Toh<br>
    <div class="subtitle">Alka Yagnik, Kumar Sanu, and Udit Narayan</div>`,
    poster: "/img/16.jpg"
  },
  {
    id: "18",
    songName: `Jaati Hoon Main<br>
    <div class="subtitle">Alka Yagnik and Kumar Sanu</div>`,
    poster: "/img/18.jpg"
  },
  {
    id: "19",
    songName: `Aankhon Mein Base Ho Tum<br>
        <div class="subtitle">Abhijeet Bhattacharya and Alka Yagnik</div>`,
    poster: "/img/19.jpg"
  },
  {
    id: "20",
    songName: `Tumne Agar Pyar Se Dekha <br>
        <div class="subtitle">Alka Yagnik</div>`,
    poster: "/img/20.jpg"
  },
  {
    id: "21",
    songName: `Muqabala Muqabala<br>
        <div class="subtitle">Parampara Thakur and Yash Narvekar</div>`,
    poster: "/img/21.jpg"
  },
  {
    id: "22",
    songName: `Dheere Dheere Se Meri Zindagi Mein Aana<br>
        <div class="subtitle">Kumar Sanu</div>`,
    poster: "/img/22.jpg"
  },
  {
    id: "23",
    songName: `Tera Rang Balle Balle<br>
        <div class="subtitle">Jaspinder Narula and Sonu Nigam</div>`,
    poster: "/img/23.jpg"
  },
  {
    id: "24",
    songName: `Saathiya Tune Kya Kiya<br>
        <div class="subtitle">K. S. Chithra and S. P. Balasubrahmanyam</div>`,
    poster: "/img/24.jpg"
  },
  {
    id: "25",
    songName: `Kabhi Bhoola Kabhi Yaad<br>
        <div class="subtitle">Alka Yagnik and Mukul Agrawal</div>`,
    poster: "/img/26.jpg"
  },
  {
    id: "26",
    songName: `Aaye Ho Meri Zindagi Mein<br>
        <div class="subtitle">Udit Narayan</div>`,
    poster: "/img/26.jpg"
  },
  {
    id: "27",
    songName: `Kaise Mukhde Se<br>
        <div class="subtitle">Asha Bhosle</div>`,
    poster: "/img/27.jpg"
  },
  {
    id: "28",
    songName: `Ae Kash Ke Hum <br>
        <div class="subtitle">Kumar Sanu</div>`,
    poster: "/img/28.jpg"
  },
  {
    id: "29",
    songName: `Aaja Mahiya <br>
        <div class="subtitle">V Harikrishna & Aishwarya Rangarajan</div>`,
    poster: "/img/29.jpg"
  },
  {
    id: "30",
    songName: `Ho Nahin Sakta <br>
        <div class="subtitle">Udit Narayan </div>`,
    poster: "/img/30.jpg"
  },
  {
    id: "31",
    songName: `Dil Deewana<br>
        <div class="subtitle">S. P. Balasubrahmanyam</div>`,
    poster: "/img/31.jpg"
  },
  {
    id: "32",
    songName: `Chamma Chamma<br>
    <div class="subtitle">Alka Yagnik</div>`,
    poster: "/img/32.jpg"
  },
  {
    id: "33",
    songName: `Dil Ka Aalam<br>
        <div class="subtitle">Kumar Sanu</div>`,
    poster: "/img/33.jpg"
  },
  {
    id: "34",
    songName: `Aa Jaana Aa Jaana<br>
        <div class="subtitle">Alka Yagnik and Kumar Sanu</div>`,
    poster: "/img/34.jpg"
  },
  {
    id: "35",
    songName: `Main Toh Raste Se Ja Raha Tha<br>
        <div class="subtitle">Alka Yagnik and Kumar Sanu</div>`,
    poster: "/img/35.jpg"
  },
  {
    id: "36",
    songName: `Husn Hai Suhana<br>
    <div class="subtitle">Abhijeet Bhattacharya and Chandana Dixit</div>`,
    poster: "/img/36.jpg"
  },
  {
    id: "37",
    songName: `Main Duniya Bhula Doonga<br>
    <div class="subtitle">Anuradha Paudwal and Kumar Sanu</div>`,
    poster: "/img/37.jpg"
  },
  {
    id: "38",
    songName: `Chal Pyar Karegi<br>
        <div class="subtitle">Alka Yagnik and Sonu Nigam</div>`,
    poster: "/img/38.jpg"
  },
  {
    id: "39",
    songName: `Dil To Pagal Hai <br>
    <div class="subtitle"> Lata Mangeshkar, Udit Narayan</div>`,
    poster: "/img/39.jpg"
  },
  {
    id: "40",
    songName: `Tum Bin Jiya Jaye Kaise <br>
        <div class="subtitle">Tum Bin</div>`,
    poster: "/img/40.jpg"
  },
  {
    id: "41",
    songName: `Dil Ka Aalam<br>
        <div class="subtitle">Kumar Sanu</div>`,
    poster: "/img/41.jpg"
  },
  {
    id: "42",
    songName: `O Bijuria Sun<br>
    <div class="subtitle">Alka Yagnik, Jolly Mukherjee, and Udit Narayan</div>`,
    poster: "/img/1.jpg"
  },
]
// Add a Music and Poster & Name

Array.from(document.getElementsByClassName("songItem")).forEach((e, i) => {
  e.getElementsByTagName('img')[0].src = songs[i].poster;
  e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

// Search Data Start 

let search_results = document.getElementsByClassName('search_results')[0];

songs.forEach(element => {
  const {id, songName, poster} =  element;
  // console.log(songName);
  let card = document.createElement('a')
  card.classList.add('card')

  card.href ="#" + id;

  card.innerHTML = ` 
  <img src="${poster}" alt="">
  <div class="content">
      ${songName}
  </div>`;
   search_results.appendChild(card);
});

let input = document.getElementsByTagName('input')[0];

input.addEventListener('keyup',()=>{
  let input_value =  input.value.toUpperCase();
  let items =  search_results.getElementsByTagName('a');
  for (let index = 0; index < items.length; index++) {
    let as = items[index].getElementsByClassName('content')[0]
    let text_value = as.textContent || as.innerHTML;

    if (text_value.toUpperCase().indexOf(input_value) > -1) {
      items[index].style.display = "flex";
      
    } else {
      items[index].style.display = "none";
    }

    if (input_value == 0) {
       search_results.style.display = "none";

    } else{
      search_results.style.display = "";
    }
  }
})

// Search Data End



let masterPlay = document.getElementById('masterPlay');
let wave = document.getElementById('wave');
masterPlay.addEventListener('click', () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    wave.classList.add('active1');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
  } else {
    music.pause();
    wave.classList.remove('active1');
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
  }
});

const makeAllplay = () => {
  Array.from(document.getElementsByClassName('playlistPlay')).forEach((el) => {
    el.classList.add('bi-play-circle-fill');
    el.classList.remove('bi-pause-circle-fill');
  });
}
const makeAllBackground = () => {
  Array.from(document.getElementsByClassName('songItem')).forEach((el) => {
    el.style.background = 'rgb(105, 105, 105,0)';
  });
}

let index = 0;
let postere_master_play = document.getElementById('postere_master_play');
let download_music = document.getElementById('download_music');
let title = document.getElementById('title');
// let wave = document.getElementById('wave');
Array.from(document.getElementsByClassName('playlistPlay')).forEach((e) => {
  e.addEventListener('click', (el) => {
    index = el.target.id;
    // console.log(index);
    music.src = `/Audio/${index}.m4a`;
    postere_master_play.src = `/img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');
    download_music.href = `/Audio/${index}.m4a`;
    //            // SongTitles
    let SongTitles = songs.filter((els) => {
      return els.id == index;
    });

    SongTitles.forEach(elss => {
      let { songName } = elss;
      title.innerHTML = songName;
      download_music.setAttribute('download', songName);
    });

    makeAllBackground();
    Array.from(document.getElementsByClassName('sonsItem'))[index - 1].style.background = "rbg(105, 105,105,.1)";

    makeAllplay();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
    // wave.classList.remove('active1');
    //  wave.classList.add('active1');

    // SongTitles
  });
});

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;
  // console.log(music_dur);
  // console.log(music_curr);
  let min1 = Math.floor(music_dur / 60);
  let sec1 = Math.floor(music_dur % 60);

  // console.log (min1,sec1);

  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  currentEnd.innerText = `${min1}: ${sec1}`;

  let min2 = Math.floor(music_curr / 60);
  let sec2 = Math.floor(music_curr % 60);
  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  }

  currentStart.innerText = `${min2}:${sec2}`;

  let progressBar = parseInt((music_curr / music_dur) * 100)
  seek.value = progressBar;
  // console.log(seek.value);
  let seekbar = seek.value; bar2.style.width = `${seekbar}%`; dot.style.left = `${seekbar}%`;
});

seek.addEventListener('change', () => {
  music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot = document.getElementById('vol_dot');


vol.addEventListener('change', () => {
  if (vol.value == 0) {
    vol_icon.classList.remove('bi-volume-up-fill');
    vol_icon.classList.remove('bi-volume-down-fill');
    vol_icon.classList.add('bi-volume-off-fill');
  }

  if (vol.value > 0) {
    vol_icon.classList.remove('bi-volume-up-fill');
    vol_icon.classList.add('bi-volume-down-fill');
    vol_icon.classList.remove('bi-volume-off-fill');
  }

  if (vol.value > 50) {
    vol_icon.classList.add('bi-volume-up-fill');
    vol_icon.classList.remove('bi-volume-down-fill');
    vol_icon.classList.remove('bi-volume-off-fill');
  }

  let vol_a = vol.value;
  vol_bar.width = `${vol_a}%;`;
  vol_bar.left = `${vol_a}%;`;
  music.volume = vol_a / 100;
});
// music next and back
let back = document.getElementById("back");
let next = document.getElementById("next");


back.addEventListener('click', () => {
  index -= 1;

  if (index < 1) {
    index = Array.from(document.getElementsByClassName('songItem')).length;
  }
  music.src = `/Audio/${index}.m4a`;
  postere_master_play.src = `/img/${index}.jpg`;
  music.play();
  masterPlay.classList.remove('bi-play-fill');
  masterPlay.classList.add('bi-pause-fill');
  //            // SongTitles
  let SongTitles = songs.filter((els) => {
    return els.id == index;
  });

  SongTitles.forEach(elss => {
    let { songName } = elss;
    title.innerHTML = songName;
  });

  makeAllBackground();
  Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rbg(105, 105,105,.1)";

  makeAllplay();
  el.target.classList.remove('bi-play-circle-fill');
  el.target.classList.add('bi-pause-circle-fill');
  wave.classList.add('active1');
})


next.addEventListener('click', () => {
  index++;
  if (index > Array.from(document.getElementsByClassName('songItem')).length) {
    index = 1;
  }

  music.src = `/Audio/${index}.m4a`;
  postere_master_play.src = `/img/${index}.jpg`;
  music.play();
  masterPlay.classList.remove('bi-play-fill');
  masterPlay.classList.add('bi-pause-fill');
  //            // SongTitles
  let SongTitles = songs.filter((els) => {
    return els.id == index;
  });

  SongTitles.forEach(elss => {
    let { songName } = elss;
    title.innerHTML = songName;
  });

  makeAllBackground();
  Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rbg(105, 105,105,.1)";

  makeAllplay();
  el.target.classList.remove('bi-play-circle-fill');
  el.target.classList.add('bi-pause-circle-fill');
  wave.classList.add('active1');
});




let pop_song_left = document.getElementById('pop_song_left');
let pop_song_right = document.getElementById('pop_song_right');
let pop_somg = document.getElementsByClassName('pop_song')[0];

pop_song_right.addEventListener('click', () => {
  pop_somg.scrollLeft += 330;
});
pop_song_left.addEventListener('click', () => {
  pop_somg.scrollLeft -= 330;
});
// PopularSong End Icon

// PopularArts Start Icon
let pop_art_left = document.getElementById('pop_art_left');
let pop_art_right = document.getElementById('pop_art_right');
let Artists_bx = document.getElementsByClassName('Artists_bx')[0];

pop_art_right.addEventListener('click', () => {
  Artists_bx.scrollLeft += 330;
})
pop_art_left.addEventListener('click', () => {
  Artists_bx.scrollLeft -= 330;
});


let shuffle = document.getElementsByClassName('shuffle')[0];

shuffle.addEventListener('click', () => {
  let a = shuffle.innerHTML;

  switch (a) {
    case "next":
      shuffle.classList.add('bi-arrow-repeat');
      shuffle.classList.remove('bi-music-note-beamed');
      shuffle.classList.remove('bi-shuffle');
      shuffle.innerHTML = 'repeat';
      break;

    case "repeat":
      shuffle.classList.remove('bi-arrow-repeat');
      shuffle.classList.remove('bi-music-note-beamed');
      shuffle.classList.add('bi-shuffle');
      shuffle.innerHTML = 'random';
      break;
    case "randow":
      shuffle.classList.remove('bi-arrow-repeat');
      shuffle.classList.add('bi-music-note-beamed');
      shuffle.classList.remove('bi-shuffle');
      shuffle.innerHTML = 'next';
      break;
  }
});

const next_music = () =>{

 if (index == songs.length) {
     index = 1
 } else {
   index++;
 }
  music.src = `/Audio/${index}.m4a`;
  postere_master_play.src = `/img/${index}.jpg`;
  music.play();
  masterPlay.classList.remove('bi-play-fill');
  masterPlay.classList.add('bi-pause-fill');
  download_music.href = `/Audio/${index}.m4a`;
  //            // SongTitles
  let SongTitles = songs.filter((els) => {
    return els.id == index;
  });

  SongTitles.forEach(elss => {
    let { songName } = elss;
    title.innerHTML = songName;
    download_music.setAttribute('download', songName);
  });

  makeAllBackground();
  Array.from(document.getElementsByClassName('sonsItem'))[index - 1].style.background = "rbg(105, 105,105,.1)";

  makeAllplay();
  el.target.classList.remove('bi-play-circle-fill');
  el.target.classList.add('bi-pause-circle-fill');
  wave.classList.add('active1');
}
const repeat_music = () =>{

  index;
  music.src = `/Audio/${index}.m4a`;
  postere_master_play.src = `/img/${index}.jpg`;
  music.play();
  masterPlay.classList.remove('bi-play-fill');
  masterPlay.classList.add('bi-pause-fill');
  download_music.href = `/Audio/${index}.m4a`;
  //            // SongTitles
  let SongTitles = songs.filter((els) => {
    return els.id == index;
  });

  SongTitles.forEach(elss => {
    let { songName } = elss;
    title.innerHTML = songName;
    download_music.setAttribute('download', songName);
  });

  makeAllBackground();
  Array.from(document.getElementsByClassName('sonsItem'))[index - 1].style.background = "rbg(105, 105,105,.1)";

  makeAllplay();
  el.target.classList.remove('bi-play-circle-fill');
  el.target.classList.add('bi-pause-circle-fill');
  wave.classList.add('active1');
}
const random_music = () =>{

  if (index == songs.length) {
    index = 1
} else {
  index = Math.floor((Math.random() * songs.length) +1 );
}
  music.src = `/Audio/${index}.m4a`;
  postere_master_play.src = `/img/${index}.jpg`;
  music.play();
  masterPlay.classList.remove('bi-play-fill');
  masterPlay.classList.add('bi-pause-fill');
  download_music.href = `/Audio/${index}.m4a`;
  //            // SongTitles
  let SongTitles = songs.filter((els) => {
    return els.id == index;
  });

  SongTitles.forEach(elss => {
    let { songName } = elss;
    title.innerHTML = songName;
    download_music.setAttribute('download', songName);
  });

  makeAllBackground();
  Array.from(document.getElementsByClassName('sonsItem'))[index - 1].style.background = "rbg(105, 105,105,.1)";

  makeAllplay();
  el.target.classList.remove('bi-play-circle-fill');
  el.target.classList.add('bi-pause-circle-fill');
  wave.classList.add('active1');
}

music.addEventListener('ended', () => {
   let b = shuffle.innerHTML;

   switch (b) {
    case 'repeat':
       repeat_music();
      break;
    case 'next':
       next_music();
      break;
    case 'random':
       random_music();
      break;
  
   }
});





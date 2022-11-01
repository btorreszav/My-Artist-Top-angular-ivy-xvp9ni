import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'billie',
  templateUrl: './billie.component.html',
  styleUrls: ['./../app.component.css'],
})
export class Billie {
  msj: String;
  artist: any = {
    img: 'https://www.kibrispdr.org/data/288/gambar-billie-eilish-3.jpg',
    title: 'Billie Eilish',
    content:
      "Billie Eilish Pirate Baird O'Connell (Los Ángeles, California; 18 de diciembre de 2001) es una cantante y compositora estadounidense. Adquirió fama como artista cuando tenía 13 años, a raíz del sencillo «Ocean Eyes» que se publicó en 2015 en SoundCloud y volvió a lanzarse con un vídeo musical en YouTube en 2016, a la edad de 14 años, lo que la convirtió en un fenómeno viral. En 2017, publicó su EP Don't Smile at Me, producido por su hermano Finneas O'Connell.",
    songs: [
      {
        name: 'Bad Guy',
        link: 'https://upload.wikimedia.org/wikipedia/en/3/33/Billie_Eilish_-_Bad_Guy.png',
      },
      {
        name: 'Idontwannabeyouanymore',
        link: 'https://upload.wikimedia.org/wikipedia/en/2/2b/Billie_Eilish_-_Idontwannabeyouanymore.jpg',
      },
      {
        name: 'Everything I Wanted',
        link: 'https://c-fa.cdn.smule.com/rs-s-sf-4/arr/77/7a/34627733-f4d0-418e-a310-4612a9239dcd_1024.jpg',
      },
      {
        name: 'Lovely',
        link: 'https://upload.wikimedia.org/wikipedia/en/f/fa/Billie_Eilish_and_Khalid_-_Lovely.png',
      },
    ],
  };
  event(e: any) {
    if (e.event == 'search') {
      this.search(e.search);
    }
  }
  search(txt: String) {
    this.msj = txt == '' ? '' : 'Se busco "' + txt;
  }
}

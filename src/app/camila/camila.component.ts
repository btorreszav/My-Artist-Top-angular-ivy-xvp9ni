import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'camila',
  templateUrl: './camila.component.html',
  styleUrls: ['./../app.component.css'],
})
export class Camila {
  msj: String;
  artist: any = {
    img: 'https://es.unbilgi.com/wp-content/uploads/2021/04/Camila-Cabello-Favorite-Things-823x1024.jpg',
    title: 'Camila Cabello',
    content:
      'Karla Camila Cabello Estrabao (Cojímar, Cuba, 3 de marzo de 1997)1​ es una cantautora y actriz cubanoestadounidense.2​ Se hizo conocida al haber sido parte del grupo femenino Fifth Harmony.',
    songs: [
      {
        name: 'Havana ft. Young Thug',
        link: 'https://i1.sndcdn.com/artworks-000399157941-z2r9pp-t500x500.jpg',
      },
      {
        name: 'Liar',
        link: 'https://upload.wikimedia.org/wikipedia/pt/0/08/Camila_Cabello_-_Liar.jpg',
      },
      {
        name: 'This Love',
        link: 'https://thatgrapejuice.net/wp-content/uploads/2019/10/camila-cabello-easy-thatgrapejuice.jpg',
      },
      {
        name: 'Señorita',
        link: 'https://files.lamega.com.rcnra-dev.com/assets/public/styles/d_img_480x870/public/media/image/image/2019-08/Camila-Cabelo.jpg?h=dc91d3e8&itok=l7-tKUaL',
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

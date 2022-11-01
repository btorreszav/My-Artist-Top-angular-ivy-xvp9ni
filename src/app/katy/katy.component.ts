import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'katy',
  templateUrl: './katy.component.html',
  styleUrls: ['./../app.component.css'],
})
export class Katy {
  msj: String;
  artist: any = {
    img: 'https://pbs.twimg.com/media/ChZKJe8UkAEMEB-.jpg',
    title: 'Katy Perry',
    content:
      'Katheryn Elizabeth Hudson, más conocida por su nombre artístico Katy Perry, es una cantante, compositora, actriz, empresaria y modelo estadounidense, que saltó a la fama en 2008 con «I Kissed a Girl» y «Hot N Cold» de su álbum debut One of the Boys.',
    songs: [
      {
        name: 'I Kissed a Girl',
        link: 'https://m.media-amazon.com/images/I/51WlRh+6umL.jpg',
      },
      {
        name: 'Hot N Cold',
        link: 'https://live.staticflickr.com/8488/8162306831_826d39f46e_z.jpg',
      },
      {
        name: 'Teenage Dream',
        link: 'https://m.media-amazon.com/images/I/41qWgqVsrdL._AC_.jpg',
      },
      {
        name: 'Last Friday Night (T.G.I.F.)',
        link: 'https://m.media-amazon.com/images/M/MV5BYzQ3YjkzNWItZDUxZi00OGNjLTlkOWQtNWY3Y2JhMmRlMWEzXkEyXkFqcGdeQXVyNzg4MTIxNzg@._V1_.jpg',
      },
      {
        name: 'Double Rainbow',
        link: 'https://i.pinimg.com/564x/e5/51/72/e551725cbadd9809a59ad45625196510.jpg',
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

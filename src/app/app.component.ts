import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts = [
    {
      name: 'Mon premier post',
      // tslint:disable-next-line:max-line-length
      content: 'Dum haec in oriente aguntur, siquid dubium deferebatur aut falsum, pro liquido accipiens et conperto, inter alia excarnificatum Gerontium Magnentianae comitem partis exulari maerore multavit.\n' +
        '\n'
    },
    {
      name: 'Mon deuxième post',
      // tslint:disable-next-line:max-line-length
      content: 'Dum apud Persas, ex primordiis minimis ad clades excita luctuosas, quas obliterasset utinam iuge silentium! ne forte paria quandoque temptentur, plus exemplis generalibus nocitura quam delictis.\n' +
        '\n'
    },
    {
      name: 'Encore un post',
      // tslint:disable-next-line:max-line-length
      content: 'Quod opera consulta cogitabatur astute, ut hoc insidiarum genere Galli periret avunculus, ne eum ut praepotens acueret in  distributo. deinde cibo abunde perlato castra die praedicto sunt mota.\n' +
        '\n'
    }
  ];
}

import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
 blogArticles = [
    {
      title: 'Titre 1',
      content: 'Description 1',
      loveIts: 3,
      date : '01.01.2019'
    },
    {
      title: 'Titre 2',
      content: 'Description 2',
      loveIts: -1,
      date : '01.01.2019'
    },
    {
      title: 'Titre 3',
      content: 'Description 3',
      loveIts: 3,
      date : '01.01.2019'
    }

  ];
}

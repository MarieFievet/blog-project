import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {
  @Input() articleTitle: string;
  @Input() articleContent: string;
  @Input() articleLoveIt: number;
  @Input() articleDate: Date;

  constructor() { }

  ngOnInit() {
  }

  getColor() {
    if (this.articleLoveIt > 0) {
      return 'green';
    } else if (this.articleLoveIt < 0) {
      return 'red';
    }
  }
  onLoveIt() {
    this.articleLoveIt = this.articleLoveIt + 1;
    return this.articleLoveIt ;
  }
  onNotLoveIt() {
    this.articleLoveIt = this.articleLoveIt - 1;
    return this.articleLoveIt ;
  }
}

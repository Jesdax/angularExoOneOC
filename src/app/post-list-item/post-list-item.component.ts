import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() loveIts: number = null;
  @Input() title: string;
  @Input() contentItem: string;

  update = new Date();
  onMore() {
    this.loveIts++;
    return this.loveIts;
  }

  onLess() {
    this.loveIts--;
    return this.loveIts;
  }
  constructor() { }

  ngOnInit() {
  }

  getColor() {
    if (this.loveIts > 0) {
      return 'green';
    } else if (this.loveIts < 0) {
      return 'red';
    }
  }

}

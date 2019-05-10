import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  firstPost = 'Mon premier post';
  twoPost = 'Mon deuxième post';
  threePost = 'Mon troisième post';
  constructor() { }

  ngOnInit() {
  }

}

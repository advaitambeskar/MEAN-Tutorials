import { Component, Input } from '@angular/core';
import { Post } from '../post.model';
import { PostsService } from '../post-service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})

export class PostListComponent {
  @Input() posts: Post[] = [
    // {title: 'First Post', content: 'This is the first post content'},
    // {title: 'Second Post', content: 'This is the second post content'},
    // {title: 'Third Post', content: 'This is the third post content'},
  ];
  postsService: PostsService;
  constructor(postsService: PostsService) {
    this.postsService = postsService;
  }

}


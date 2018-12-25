import { Component, EventEmitter, Output } from '@angular/core';
import {NgForm} from "@angular/forms";

import { Post } from '../post.model';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  enteredTitle = '';
  enteredContent = '';
  @Output() postCreated = new EventEmitter();

  onAddPost(form) {
    if (form.invalid) {
      return
    }
    // console.log(postInput);
    const post: Post  = {
      title: form.value.title,
      content: form.value.content,
    };
    this.postCreated.emit(post);
  }

}

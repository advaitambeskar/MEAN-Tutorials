import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostCreateComponent } from './post/post-create/post-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule, MatExpansionModule} from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostsService } from './post/post-service';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    HeaderComponent,
    PostListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

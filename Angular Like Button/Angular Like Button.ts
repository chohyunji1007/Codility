import { Component } from '@angular/core';

@Component({
  selector: 'like-button',
  template: `
    <h2>Like button</h2>
    <button class="like-button" [class.liked]="likeCount === 101" (click)="toggleCount()">Like | {{ likeCount }}</button>
  `,
  styles: [`
    .like-button {
      font-size: 1rem;
      padding: 5px 10px;
      color: #585858;
    }

    .liked {
      font-weight: bold;
      color: #1565c0;
    }
  `]
})
export class LikeButtonComponent {
  public likeCount: number = 100; 

  toggleCount() {
    this.likeCount = this.likeCount === 100 ? 101 : 100; 
  }
}
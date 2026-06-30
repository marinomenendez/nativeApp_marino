import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonBackButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonSpinner, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Api } from '../services/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.page.html',
  styleUrls: ['./portfolio.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonSpinner, 
            IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonButtons, IonBackButton]
})
export class PortfolioPage implements OnInit {

  posts: any[] = [];
  loading = false;

  constructor(private api: Api,
    private router: Router
  ) { }

  async ngOnInit() {
    try {
      this.loading = true;
      this.posts = await this.api.getPosts();
    } catch (error) {
      console.error(error);
    }
    finally {
      this.loading = false;
    }
  }


}

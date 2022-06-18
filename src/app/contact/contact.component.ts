import { Component, OnInit } from '@angular/core';
import { Etudiant } from './models/Entities';
import { UserService } from '../services/user.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public logo: string = "http://www.4brandadvertising.com/media/portfolios/19-portfolio-Logo-Sesame-University_4Brand.png"
  public formateur: string = "Mohamed Amine MEZGHICH";
  public goupe: string = "Groupe C";
  public tab: any[] = ["Sesame", 20, true];
  public test: any = true; // boolean value
  public nomModule: string = "Angular";
  public nomEtudiants: any[] = ["ahmed", "ons", "rabeb", "Oumaima", "Raouf", "Eya", "Moez", "Sana", "Tarek", "Yousef", "Abir", "Amine"];
  public detailsEtudiants: Etudiant[] = [
    {
      'nom': 'ahmed',
      'age': 22,
      'email': 'ahmed.barkouti@sesame.com.tn',
      'moyenne': 15,
      'tel': 20200400,
      'avatar': ''
    },
    {
      'nom': 'Ons',
      'age': 23,
      'email': 'ons.khelil@sesame.com.tn',
      'moyenne': 14,
      'tel': 29112525,
      'avatar': ''
    },
    {
      'nom': 'Youssef',
      'age': 24,
      'email': 'youssef.khiari@sesame.com.tn',
      'moyenne': 14.7,
      'tel': 56834156,
      'avatar': ''
    }
    ,
    {
      'nom': 'Moetez',
      'age': 25,
      'email': 'moetez.mejri@sesame.com.tn',
      'moyenne': 13.86,
      'tel': 54353719,
      'avatar': ''
    },
    {
      'nom': 'Amine',
      'age': 25,
      'email': 'mohamedamine.rachdi@sesame.com.tn',
      'moyenne': 13,
      'tel': 54869499,
      'avatar': ''
    }
  ];

  result: number = 0;
  A: number = 0;
  B: number = 0;
  C: number = 0;
  D: number = 0;
  public users: any;
  constructor(private user: UserService) { }

  ngOnInit(): void {
    console.log(this.user.getListeCours());

    this.test = 12;  // number value
    this.user.getListUsers().subscribe(
      data => {
        this.users = data;
        console.log(this.users);
      }
    );
  }

  changeAlert() {
    this.test = !this.test;
  }
  calculateSum() {
    this.result = this.A + this.B;
  }

}

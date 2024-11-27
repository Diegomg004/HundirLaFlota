import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponentComponent } from "./header-component/header-component.component";
import { FooterComponentComponent } from "./footer-component/footer-component.component";
import { MainComponentComponent } from "./main-component/main-component.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponentComponent, FooterComponentComponent, MainComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
 
  }



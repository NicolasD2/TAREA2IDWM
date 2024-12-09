import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkillsComponent } from './portafolio/Components/skills/skills.component';
import { HomeComponent } from './portafolio/Components/home/home.component';
import { ContactComponent } from './portafolio/Components/contact/contact.component';

@Component({
  selector: 'app-root',
  standalone: true, // Necesario si estás usando componentes independientes
  imports: [RouterOutlet, SkillsComponent, HomeComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // Corregido: styleUrls en plural
})
export class AppComponent {
  title = 'portafolio';
}

import { Component } from '@angular/core';

@Component({
  selector: 'cs-root',
  template: `<h1>{{ title }}</h1> <h1>{{ subtitle }}</h1> <cs-canvas-clock></cs-canvas-clock>`,
  styles: [`:host { display: grid; justify-items: center; }`]
})
export class AppComponent {
  title = 'Angular Canvas Clock';
  subtitle = 'Stackblitz = Awesome';
}

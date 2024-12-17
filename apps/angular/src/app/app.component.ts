import { JsonPipe } from '@angular/common';
import { Component, resource } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [JsonPipe, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular';
  weatherForecast = resource({
    loader: () => fetch('/api/weather-forecast').then((x) => x.json()),
  });
}

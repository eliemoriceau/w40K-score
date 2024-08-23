import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {initFlowbite} from 'flowbite';
import {NavBarComponent} from './components/nav-bar/nav-bar.component';
import {FactionsService} from '@core/services/factions.service';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  titleService = inject(Title);
  title = 'W40K Score';
  factionService = inject(FactionsService);

  async ngOnInit(): Promise<void> {
    initFlowbite();
    await this.factionService.ngOnInit();
    this.titleService.setTitle(this.title);
  }
}

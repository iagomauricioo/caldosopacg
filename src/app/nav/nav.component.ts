import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import { DialogMenuComponent } from '../dialog-menu/dialog-menu.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatExpansionModule, DialogMenuComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  readonly dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(DialogMenuComponent);
  }
}

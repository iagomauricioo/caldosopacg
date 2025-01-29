import { Component, inject, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { DialogMenuComponent } from '../dialog-menu/dialog-menu.component';
import { MatDialog } from '@angular/material/dialog';
import { TooltipPosition, MatTooltipModule } from '@angular/material/tooltip';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CdkScrollable} from '@angular/cdk/scrolling';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    DialogMenuComponent,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    CdkScrollable,
    MatButtonModule,
    MatTooltipModule,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  readonly dialog = inject(MatDialog);

  openDialog() {
    this.dialog.open(DialogMenuComponent);
  }

  position = new FormControl('below');

  private _snackBar = inject(MatSnackBar);

  message = 'Link copiado com sucesso!';
  action = 'Fechar';

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  copyLink(): void {
    const link = window.location.href;
    navigator.clipboard
      .writeText(link)
      .then(() => {
        console.log('Link copiado com sucesso!');
      })
      .catch((err) => {
        console.error('Erro ao copiar o link: ', err);
      });
  }
}

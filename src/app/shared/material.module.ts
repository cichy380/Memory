import { NgModule } from '@angular/core'

import { MatGridListModule } from '@angular/material/grid-list'
import { MatButtonModule } from '@angular/material/button'
import { MatSnackBarModule } from '@angular/material/snack-bar'
import { MatIconModule } from '@angular/material/icon'
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatInputModule } from '@angular/material/input'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatMenuModule } from '@angular/material/menu'
import { MatCardModule } from '@angular/material/card'
import { MatDialogModule } from '@angular/material/dialog'
import { MatRippleModule } from '@angular/material/core'
import { MatTableModule } from '@angular/material/table'


@NgModule({
  exports: [
    MatGridListModule,
    MatButtonModule,
    MatSnackBarModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatMenuModule,
    MatCardModule,
    MatTableModule,
    MatDialogModule,
    MatRippleModule,
  ],
})
export class MaterialModule {
}

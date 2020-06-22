import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatPaginator } from '@angular/material/paginator';

@NgModule({
  imports: [
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    MatDialogModule,
    MatTableModule,
    MatTabsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule,
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatTabsModule,
    MatDialogModule,
    MatTableModule,
    MatTabsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatSelectModule,
    MatOptionModule,
  ],
  declarations: [],
})
export class MaterialModule {}

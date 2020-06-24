import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WindowCreateSubjectsComponent } from '../window-create-subjects/window-create-subjects.component';
import { WindowCreateClassesComponent } from '../window-create-classes/window-create-classes.component';
import { SelectControlValueAccessor } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

export interface Class {
  position: number;
  class: string;
  /* classletter: string;*/
}

export interface Subject {
  position: number;
  subject: string;
}

const Classes: Class[] = [
  { position: 1, class: '10 А' /*classletter: 'А'*/ },
  { position: 2, class: '7 Б' /*classletter: 'Б'*/ },
  { position: 3, class: '6 Г' /*classletter: 'Г'*/ },
];

const Subjects: Subject[] = [
  { position: 1, subject: 'биология' },
  { position: 2, subject: 'русский язык' },
  { position: 3, subject: 'физика' },
];

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css'],
})
export class ClassesComponent implements OnInit {
  [x: string]: any;

  displayedColumns_1: string[] = [
    'position',
    'class',
    /*'classletter',*/ 'options',
  ];
  /*dataSource_1 = Classes;*/
  dataSource_1 = new MatTableDataSource<Class>(Classes);

  displayedColumns_2: string[] = ['position', 'subject', 'options'];
  /*dataSource_2 = Subjects;*/
  dataSource_2 = new MatTableDataSource<Subject>(Subjects);
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openDialogClasses() {
    const dialogRef = this.dialog.open(WindowCreateClassesComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogSubjects() {
    const dialogRef = this.dialog.open(WindowCreateSubjectsComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  changeClass(item) {
    const dialogRef = this.dialog.open(WindowCreateClassesComponent, {
      data: { item },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  changeSubject(item) {
    const dialogRef = this.dialog.open(WindowCreateSubjectsComponent, {
      data: { item },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  removeClasses(element) {
    this.dataSource_1.data.splice(Classes.indexOf(element), 1);
    this.dataSource_1 = new MatTableDataSource<Class>(this.dataSource_1.data);
  }

  removeSubjects(element) {
    this.dataSource_2.data.splice(Subjects.indexOf(element), 1);
    this.dataSource_2 = new MatTableDataSource<Subject>(this.dataSource_2.data);
  }
}

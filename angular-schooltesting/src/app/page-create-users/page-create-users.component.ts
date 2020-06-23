import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { WindowCreateUsersComponent } from '../window-create-users/window-create-users.component';
import { WindowCreateTeachersComponent } from '../window-create-teachers/window-create-teachers.component';
import { WindowCreateAdministratorsComponent } from '../window-create-administrators/window-create-administrators.component';

export interface Student {
  FIO: string;
  class: string;
  /* classletter: string;*/
  username: string;
  position: number;
}

export interface Teacher {
  FIO: string;
  subject: string;
  username: string;
  position: number;
}

export interface Administrator {
  FIO: string;
  username: string;
  position: number;
}
const Students: Student[] = [
  {
    position: 1,
    FIO: 'Петров Александр Сергеевич',
    class: '9 А',
    /*  classletter: 'А',*/
    username: 'PetrovAS',
  },
  {
    position: 2,
    FIO: 'Иванова Виктория Викторовна',
    class: '10 Б',
    /*classletter: 'Б',*/
    username: 'IvanovaVV',
  },
  {
    position: 3,
    FIO: 'Сатырёв Игорь Сергеевич',
    class: '8 Б',
    /*classletter: 'Б',*/
    username: 'SaturevIS',
  },
  {
    position: 4,
    FIO: 'Гриб Валерия Андреевна',
    class: '5 Г',
    /*classletter: 'Г',*/
    username: 'GribVA',
  },
  {
    position: 5,
    FIO: 'Усач Анатолий Викторович',
    class: '7 А',
    /*classletter: 'А',*/
    username: 'UsachAV',
  },
];

const Teachers: Teacher[] = [
  {
    position: 1,
    FIO: 'Маслюк Виктор Михайлович',
    subject: 'русский язык',
    username: 'MaslukVM',
  },
  {
    position: 2,
    FIO: 'Сидоров Максим Анатольевич',
    subject: 'математика',
    username: 'SidorovMA',
  },
  {
    position: 3,
    FIO: 'Петрова Дарья Андреевна',
    subject: 'физика',
    username: 'PetrovaDA',
  },
  {
    position: 4,
    FIO: 'Головач Анна петровна',
    subject: 'английский язык',
    username: 'GolovachAN',
  },
  {
    position: 5,
    FIO: 'Быков Алексей Петрович',
    subject: 'биология',
    username: 'BukovAP',
  },
];

const Administrators: Administrator[] = [
  { position: 1, FIO: 'Машкаров Петр Семёныч', username: 'MashkarovPS' },
  { position: 2, FIO: 'Курская Алина Викторовна', username: 'KyrskayAV' },
  { position: 3, FIO: 'Сыч Виктор Максимович', username: 'SuchVM' },
];

@Component({
  selector: 'app-page-create-users',
  templateUrl: './page-create-users.component.html',
  styleUrls: ['./page-create-users.component.css'],
})
export class PageCreateUsersComponent implements OnInit {
  [x: string]: any;
  displayedColumns: string[] = [
    'position',
    'FIO',
    'class',
    /* 'classletter',*/
    'username',
    'options',
  ];
  dataSource = Students;

  displayedColumns_2: string[] = [
    'position',
    'FIO',
    'subject',
    'username',
    'options',
  ];
  dataSource_2 = Teachers;

  displayedColumns_3: string[] = ['position', 'FIO', 'username', 'options'];
  dataSource_3 = Administrators;

  Class() {
    this.Classes.setValue({
      position: 1,
      FIO: 'ytyuig',
      username: 'sdfg',
    });
  }

  constructor(public dialog: MatDialog) {}

  openDialogStudents() {
   /* const dialogRef = this.dialog.open(WindowCreateUsersComponent);*/
    /*   this.dialog.open(WindowCreateUsersComponent);*/
  /*  dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });*/
    let dialogRef1 = this.dialog.open(WindowCreateUsersComponent, {
      data: { username: 'austin' },
    });
  }

  openDialogTeachers() {
    const dialogRef = this.dialog.open(WindowCreateTeachersComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openDialogAdministrators() {
    const dialogRef = this.dialog.open(WindowCreateAdministratorsComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  changeStudent() {
    const dialogRef = this.dialog.open(WindowCreateUsersComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  changeTeacher() {
    const dialogRef = this.dialog.open(WindowCreateTeachersComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  changeAdministrator() {
    const dialogRef = this.dialog.open(WindowCreateAdministratorsComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {}
}

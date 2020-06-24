import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { WindowCreateUsersComponent } from '../window-create-users/window-create-users.component';
import { WindowCreateTeachersComponent } from '../window-create-teachers/window-create-teachers.component';
import { WindowCreateAdministratorsComponent } from '../window-create-administrators/window-create-administrators.component';
import { MatTableDataSource } from '@angular/material/table';

export interface Student {
  FIO: string;
  class: string;
  email: string;
  /* classletter: string;*/
  username: string;
  position: number;
}

export interface Teacher {
  FIO: string;
  email: string;
  subject: string;
  username: string;
  position: number;
}

export interface Administrator {
  FIO: string;
  email: string;
  username: string;
  position: number;
}
const Students: Student[] = [
  {
    position: 1,
    FIO: 'Петров Александр Сергеевич',
    email: 'petr@mail.ru',
    class: '9 А',
    /*  classletter: 'А',*/
    username: 'PetrovAS',
  },
  {
    position: 2,
    FIO: 'Иванова Виктория Викторовна',
    email: 'ivan@mail.ru', 
    class: '10 Б',
    /*classletter: 'Б',*/
    username: 'IvanovaVV',
  },
  {
    position: 3,
    FIO: 'Сатырёв Игорь Сергеевич',
    email: 'sdsad@mail.ru',
    class: '8 Б',
    /*classletter: 'Б',*/
    username: 'SaturevIS',
  },
  {
    position: 4,
    FIO: 'Гриб Валерия Андреевна',
    email: 'valerrya@mail.ru',
    class: '5 Г',
    /*classletter: 'Г',*/
    username: 'GribVA',
  },
  {
    position: 5,
    FIO: 'Усач Анатолий Викторович',
    email: 'tolya@mail.ru',
    class: '7 А',
    /*classletter: 'А',*/
    username: 'UsachAV',
  },
];

const Teachers: Teacher[] = [
  {
    position: 1,
    FIO: 'Маслюк Виктор Михайлович',
    email: 'sdsad@mail.ru',
    subject: 'русский язык',
    username: 'MaslukVM',
  },
  {
    position: 2,
    FIO: 'Сидоров Максим Анатольевич',
    email: 'sdsadad@mail.ru',
    subject: 'математика',
    username: 'SidorovMA',
  },
  {
    position: 3,
    FIO: 'Петрова Дарья Андреевна',
    email: 'ssrad@mail.ru',
    subject: 'физика',
    username: 'PetrovaDA',
  },
  {
    position: 4,
    FIO: 'Головач Анна петровна',
    email: 'sdsaasad@mail.ru',
    subject: 'английский язык',
    username: 'GolovachAN',
  },
  {
    position: 5,
    FIO: 'Быков Алексей Петрович',
    email: 'swerad@mail.ru',
    subject: 'биология',
    username: 'BukovAP',
  },
];

const Administrators: Administrator[] = [
  { position: 1, FIO: 'Машкаров Петр Семёныч', username: 'MashkarovPS', email: 'srwerad@mail.ru' },
  { position: 2, FIO: 'Курская Алина Викторовна', username: 'KyrskayAV', email: 'sdred@mail.ru' },
  { position: 3, FIO: 'Сыч Виктор Максимович', username: 'SuchVM', email: 'etwtew@mail.ru' },
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
    'email',
    'class',
    /* 'classletter',*/
    'username',
    'options',
  ];
  dataSource = new MatTableDataSource<Student>(Students);

  displayedColumns_2: string[] = [
    'position',
    'FIO',
    'email',
    'subject',
    'username',
    'options',
  ];
  /*dataSource_2 = Teachers;*/
  dataSource_2 = new MatTableDataSource<Teacher>(Teachers);
  displayedColumns_3: string[] = ['position', 'FIO', 'email', 'username', 'options'];
  /*dataSource_3 = Administrators;*/
  dataSource_3 = new MatTableDataSource<Administrator>(Administrators);

  constructor(public dialog: MatDialog) {}

  openDialogStudents() {
    const dialogRef = this.dialog.open(WindowCreateUsersComponent);
    /*   this.dialog.open(WindowCreateUsersComponent);*/
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
    /* let dialogRef1 = this.dialog.open(WindowCreateUsersComponent, {
      data: { username: 'austin' },
    });*/
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

  changeStudent(item) {
    const dialogRef = this.dialog.open(WindowCreateUsersComponent, {
      data: { item },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  changeTeacher(item) {
    const dialogRef = this.dialog.open(WindowCreateTeachersComponent, {
      data: { item },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
  changeAdministrator(item) {
    const dialogRef = this.dialog.open(WindowCreateAdministratorsComponent, {
      data: { item },
    });
    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }

  removeStudents(element) {
    this.dataSource.data.splice(Students.indexOf(element), 1);
    this.dataSource = new MatTableDataSource<Student>(this.dataSource.data);
  }

  removeTeachers(element) {
    this.dataSource_2.data.splice(Teachers.indexOf(element), 1);
    this.dataSource_2 = new MatTableDataSource<Teacher>(this.dataSource_2.data);
  }

  removeAdministrators(element) {
    this.dataSource_3.data.splice(Administrators.indexOf(element), 1);
    this.dataSource_3 = new MatTableDataSource<Administrator>(
      this.dataSource_3.data
    );
  }

  ngOnInit(): void {}
}

import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface Student {
  FIO: string;
  classnumber: number;
  classletter: string;
  username: string;
  position: number;
}

const ELEMENT_DATA: Student[] = [
  {position: 1, FIO: 'Петров Александр Сергеевич', classnumber: 10, classletter: 'А', username: 'PetrovAS'},
  {position: 2, FIO: 'Иванова Виктория Викторовна', classnumber: 7, classletter: 'Б', username: 'IvanovaVV'},
  {position: 3, FIO: 'Сатырёв Игорь Сергеевич', classnumber: 7, classletter: 'Б', username: 'SaturevIS'},
  {position: 4, FIO: 'Гриб Валерия Андреевна', classnumber: 6, classletter: 'Г', username: 'GribVA'},
  {position: 5, FIO: 'Усач Анатолий Викторович', classnumber: 9, classletter: 'А', username: 'UsachAV'},
];
@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  displayedColumns: string[] = ['position', 'FIO', 'classnumber', 'classletter', 'username'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }
  
}

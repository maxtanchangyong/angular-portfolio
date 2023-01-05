import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { MatTableDataSource } from '@angular/material/table';

export interface SkillSet {
  name: String;
  position: Number;
  maturity: Number;
  category: String;
}

const SKILL_SET: SkillSet[] = [
  { position: 1, name: 'Python', maturity: 8, category: 'data_analyst' },
  { position: 2, name: 'MySQL', maturity: 7, category: 'data_analyst' },
  { position: 3, name: 'Pandas Numpy', maturity: 9, category: 'data_analyst' },
  { position: 4, name: 'Matplotlib Seaborn', maturity: 7, category: 'data_analyst' },
  { position: 5, name: 'HTML CSS JS', maturity: 8, category: 'web' },
  { position: 6, name: 'Angular', maturity: 9, category: 'web' },
]

@Component({
  selector: 'app-skill-set',
  templateUrl: './skill-set.component.html',
  styleUrls: ['./skill-set.component.css']
})
export class SkillSetComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'maturity'];
  dataSource = new MatTableDataSource(SKILL_SET);

  // table cell progress bar on maturity
  progressBarColor: ThemePalette = 'primary';
  progressBarMode: ProgressBarMode = 'determinate';

  constructor() { }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

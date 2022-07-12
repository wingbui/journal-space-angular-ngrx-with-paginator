import { Component, Input, OnInit } from '@angular/core'

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
})
export class PaginatorComponent implements OnInit {
  @Input('limit') limitProps: number = 20
  @Input('baseURL') baseURLProps: string = ''
  @Input('totalItems') totalItemsProps: number = 0
  @Input('currentPage') currentPageProps: number = 1

  pages: number[] = []

  constructor() {}

  ngOnInit(): void {
    this.pages = Array.from({ length: Math.ceil(3 / 1) }, (_, i) => i + 1)
    console.log(this.baseURLProps)
  }
}

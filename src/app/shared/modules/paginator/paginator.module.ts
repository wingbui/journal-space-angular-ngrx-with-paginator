import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { PaginatorComponent } from './components/paginator/paginator.component'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [PaginatorComponent],
  imports: [CommonModule, RouterModule],
  exports: [PaginatorComponent],
})
export class PaginatorModule {}

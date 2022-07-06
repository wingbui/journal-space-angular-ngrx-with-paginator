import { Component, Input, OnInit } from '@angular/core'
import { BackendErrors } from 'src/app/shared/types/backend-errors'

@Component({
  selector: 'app-backend-error-messages',
  templateUrl: './backend-error-messages.component.html',
  styleUrls: ['./backend-error-messages.component.css'],
})
export class BackendErrorMessagesComponent implements OnInit {
  @Input('backendErrors') backendErrorProps: BackendErrors | null = null
  errorMessages: string[] = []

  constructor() {}

  ngOnInit(): void {
    if (this.backendErrorProps) {
      const keys = Object.keys(this.backendErrorProps)

      keys.map((name) => {
        if (this.backendErrorProps) {
          const message = this.backendErrorProps[name].join(' ')
          this.errorMessages.push(`${name} ${message}`)
        }
      })
    }
  }
}

import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  set(key: string, data: any) {
    try {
      localStorage.setItem(key, JSON.stringify(data))
    } catch (error) {
      console.log(`Error setting data from localStorage`, error)
    }
  }

  get(key: string): any {
    try {
      let data = localStorage.getItem(key)
      data = data !== null ? JSON.parse(data) : null
      return data
    } catch (error) {
      console.log(`Error getting data from localStorage`, error)
      return null
    }
  }
}

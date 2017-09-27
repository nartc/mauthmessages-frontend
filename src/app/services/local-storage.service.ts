import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class LocalStorageService {
    public localStorageIsClear: EventEmitter<any> = new EventEmitter<any>()
  constructor() { }

  public saveValueWithKey(key: string, value: any): void {
    localStorage.setItem(key, value);
    this.localStorageIsClear.emit();
  }

  public fetchValueFromKey(key: string): any {
      return localStorage.getItem(key)
  }

  public deleteValueWithKey(key: string): void {
      localStorage.removeItem(key);
  }

  public clearAll(): void {
      localStorage.clear();
      this.localStorageIsClear.emit();
  }
}

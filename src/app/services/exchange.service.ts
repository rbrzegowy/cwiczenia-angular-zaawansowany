import { Injectable } from '@angular/core'
import { Currency } from '../models/currency'

@Injectable({
  providedIn: 'root'
})
export class ExchangeService {

  private rates: Record<Currency, number> = {
    EUR: 1,
    USD: 1.09,
    GBP: 0.83,
    PLN: 4.29,
    JPY: 163
  }

  convert(amount: number | null, from: Currency, to: Currency) {
    return amount !== null ? amount / this.rates[from] * this.rates[to] : null
  }

}

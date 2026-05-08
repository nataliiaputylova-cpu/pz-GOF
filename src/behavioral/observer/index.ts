// Observer
// Проблема: інвестори хочуть отримувати сповіщення про зміну ціни акцій
// Рішення: інвестори підписуються на акцію, акція сповіщає всіх при зміні ціни

interface IInvestor {
  update(stock: string, price: number): void;
}

class Stock {
  private investors: IInvestor[] = [];
  private price: number;

  constructor(private name: string, initialPrice: number) {
    this.price = initialPrice;
  }

  subscribe(investor: IInvestor): void {
    this.investors.push(investor);
  }

  unsubscribe(investor: IInvestor): void {
    this.investors = this.investors.filter(i => i !== investor);
  }

  setPrice(newPrice: number): void {
    this.price = newPrice;
    console.log(`[Stock] ${this.name} нова ціна: $${this.price}`);
    this.investors.forEach(i => i.update(this.name, this.price));
  }
}

class Investor implements IInvestor {
  constructor(private name: string) {}

  update(stock: string, price: number): void {
    console.log(`  [${this.name}] Отримав сповіщення: ${stock} = $${price}`);
  }
}

export { IInvestor, Stock, Investor };

// Strategy
// Проблема: різні алгоритми сортування, хочемо легко їх міняти
// Рішення: кожен алгоритм — окрема стратегія, контекст використовує потрібну

interface ISortStrategy {
  sort(data: number[]): number[];
  getName(): string;
}

class BubbleSort implements ISortStrategy {
  sort(data: number[]): number[] {
    const arr = [...data];
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        }
      }
    }
    return arr;
  }
  getName(): string { return 'Bubble Sort'; }
}

class QuickSort implements ISortStrategy {
  sort(data: number[]): number[] {
    const arr = [...data];
    if (arr.length <= 1) return arr;
    const pivot = arr[Math.floor(arr.length / 2)];
    const left = arr.filter(x => x < pivot);
    const middle = arr.filter(x => x === pivot);
    const right = arr.filter(x => x > pivot);
    return [...this.sort(left), ...middle, ...this.sort(right)];
  }
  getName(): string { return 'Quick Sort'; }
}

class Sorter {
  constructor(private strategy: ISortStrategy) {}

  setStrategy(strategy: ISortStrategy): void {
    this.strategy = strategy;
  }

  sort(data: number[]): number[] {
    console.log(`[Sorter] Використовую: ${this.strategy.getName()}`);
    const result = this.strategy.sort(data);
    console.log(`[Sorter] Результат: [${result.join(', ')}]`);
    return result;
  }
}

export { ISortStrategy, BubbleSort, QuickSort, Sorter };

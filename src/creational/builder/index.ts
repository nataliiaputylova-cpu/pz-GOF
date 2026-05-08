// Builder
// Проблема: будинок має багато параметрів, конструктор стає незручним
// Рішення: будуємо об'єкт крок за кроком через окремий Builder клас

class House {
  walls: number = 0;
  floors: number = 0;
  hasGarage: boolean = false;
  hasPool: boolean = false;
  roofType: string = '';

  describe(): void {
    console.log(`[House] ${this.floors} поверх(и), ${this.walls} стін, дах: ${this.roofType}, гараж: ${this.hasGarage}, басейн: ${this.hasPool}`);
  }
}

class HouseBuilder {
  private house = new House();

  setWalls(count: number): this {
    this.house.walls = count;
    return this;
  }

  setFloors(count: number): this {
    this.house.floors = count;
    return this;
  }

  setRoof(type: string): this {
    this.house.roofType = type;
    return this;
  }

  addGarage(): this {
    this.house.hasGarage = true;
    return this;
  }

  addPool(): this {
    this.house.hasPool = true;
    return this;
  }

  build(): House {
    const result = this.house;
    this.house = new House();
    return result;
  }
}

export { House, HouseBuilder };

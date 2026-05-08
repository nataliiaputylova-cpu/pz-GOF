// Adapter
// Проблема: датчик повертає температуру у Фаренгейтах, а система очікує Цельсій
// Рішення: адаптер перетворює інтерфейс датчика до потрібного формату

interface ITemperatureSensor {
  getCelsius(): number;
}

class FahrenheitSensor {
  getFahrenheit(): number {
    return 98.6;
  }
}

class TemperatureAdapter implements ITemperatureSensor {
  private sensor: FahrenheitSensor;

  constructor(sensor: FahrenheitSensor) {
    this.sensor = sensor;
  }

  getCelsius(): number {
    return Math.round((this.sensor.getFahrenheit() - 32) * 5 / 9);
  }
}

function displayTemperature(sensor: ITemperatureSensor): void {
  console.log(`[Sensor] Температура: ${sensor.getCelsius()}°C`);
}

export { ITemperatureSensor, FahrenheitSensor, TemperatureAdapter, displayTemperature };

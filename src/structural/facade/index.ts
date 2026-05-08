// Facade
// Проблема: розумний будинок має багато підсистем (світло, клімат, охорона)
// Рішення: один фасад з простими методами замість керування кожною системою окремо

class Lights {
  turnOn(): void { console.log('  [Lights] Увімкнено освітлення'); }
  turnOff(): void { console.log('  [Lights] Вимкнено освітлення'); }
}

class AirConditioner {
  setTemperature(temp: number): void { console.log(`  [AC] Встановлено температуру ${temp}°C`); }
  turnOff(): void { console.log('  [AC] Вимкнено кондиціонер'); }
}

class SecuritySystem {
  arm(): void { console.log('  [Security] Охорона активована'); }
  disarm(): void { console.log('  [Security] Охорона знята'); }
}

class SmartHomeFacade {
  private lights = new Lights();
  private ac = new AirConditioner();
  private security = new SecuritySystem();

  arriveHome(): void {
    console.log('[SmartHome] Господар прийшов додому:');
    this.security.disarm();
    this.lights.turnOn();
    this.ac.setTemperature(22);
  }

  leaveHome(): void {
    console.log('[SmartHome] Господар пішов з дому:');
    this.lights.turnOff();
    this.ac.turnOff();
    this.security.arm();
  }
}

export { SmartHomeFacade };

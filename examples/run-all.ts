import { WordCreator, SpreadsheetCreator, PresentationCreator } from '../src/creational/factory-method';
import { HouseBuilder } from '../src/creational/builder';
import { DatabaseConnection } from '../src/creational/singleton';
import { FahrenheitSensor, TemperatureAdapter, displayTemperature } from '../src/structural/adapter';
import { SmartHomeFacade } from '../src/structural/facade';
import { IText, PlainText, BoldDecorator, ItalicDecorator, UnderlineDecorator } from '../src/structural/decorator';
import { BubbleSort, QuickSort, Sorter } from '../src/behavioral/strategy';
import { Stock, Investor } from '../src/behavioral/observer';

console.log('===== Factory Method =====');
new WordCreator().openDocument();
new SpreadsheetCreator().openDocument();
new PresentationCreator().openDocument();

console.log('\n===== Builder =====');
const house = new HouseBuilder()
  .setWalls(4)
  .setFloors(2)
  .setRoof('Черепиця')
  .addGarage()
  .build();
house.describe();

console.log('\n===== Singleton =====');
const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();
db1.query('SELECT * FROM users');
db2.query('INSERT INTO orders VALUES (...)');
console.log(`db1 === db2: ${db1 === db2}`);
console.log(`Всього запитів: ${db1.getQueryCount()}`);

console.log('\n===== Adapter =====');
const sensor = new FahrenheitSensor();
const adapted = new TemperatureAdapter(sensor);
displayTemperature(adapted);

console.log('\n===== Facade =====');
const home = new SmartHomeFacade();
home.arriveHome();
console.log('');
home.leaveHome();

console.log('\n===== Decorator =====');
let text: IText = new PlainText('Важливе повідомлення');
text = new BoldDecorator(text);
text = new ItalicDecorator(text);
text = new UnderlineDecorator(text);
console.log(`[Text] ${text.render()}`);

console.log('\n===== Strategy =====');
const data = [5, 2, 8, 1, 9, 3];
console.log(`Вхідні дані: [${data.join(', ')}]`);
const sorter = new Sorter(new BubbleSort());
sorter.sort(data);
sorter.setStrategy(new QuickSort());
sorter.sort(data);

console.log('\n===== Observer =====');
const apple = new Stock('AAPL', 150);
const investor1 = new Investor('Олена');
const investor2 = new Investor('Михайло');
apple.subscribe(investor1);
apple.subscribe(investor2);
apple.setPrice(155);
apple.unsubscribe(investor1);
apple.setPrice(148);

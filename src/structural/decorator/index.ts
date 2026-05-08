// Decorator
// Проблема: потрібно форматувати текст по-різному (жирний, курсив, підкреслення)
// Рішення: декоратори додають форматування без зміни базового класу

interface IText {
  render(): string;
}

class PlainText implements IText {
  constructor(private content: string) {}
  render(): string { return this.content; }
}

abstract class TextDecorator implements IText {
  constructor(protected text: IText) {}
  abstract render(): string;
}

class BoldDecorator extends TextDecorator {
  render(): string { return `**${this.text.render()}**`; }
}

class ItalicDecorator extends TextDecorator {
  render(): string { return `_${this.text.render()}_`; }
}

class UnderlineDecorator extends TextDecorator {
  render(): string { return `__${this.text.render()}__`; }
}

export { IText, PlainText, BoldDecorator, ItalicDecorator, UnderlineDecorator };

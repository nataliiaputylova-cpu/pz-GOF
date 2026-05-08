// Factory Method
// Проблема: треба створювати різні типи документів але клієнт не повинен знати деталей
// Рішення: абстрактний клас з методом createDocument(), підкласи реалізують його по-своєму

interface IDocument {
  open(): void;
  getFormat(): string;
}

class WordDocument implements IDocument {
  open(): void { console.log('[Word] Відкриваю .docx файл'); }
  getFormat(): string { return 'docx'; }
}

class SpreadsheetDocument implements IDocument {
  open(): void { console.log('[Excel] Відкриваю .xlsx файл'); }
  getFormat(): string { return 'xlsx'; }
}

class PresentationDocument implements IDocument {
  open(): void { console.log('[PowerPoint] Відкриваю .pptx файл'); }
  getFormat(): string { return 'pptx'; }
}

abstract class DocumentCreator {
  abstract createDocument(): IDocument;

  openDocument(): void {
    const doc = this.createDocument();
    console.log(`Формат: ${doc.getFormat()}`);
    doc.open();
  }
}

class WordCreator extends DocumentCreator {
  createDocument(): IDocument { return new WordDocument(); }
}

class SpreadsheetCreator extends DocumentCreator {
  createDocument(): IDocument { return new SpreadsheetDocument(); }
}

class PresentationCreator extends DocumentCreator {
  createDocument(): IDocument { return new PresentationDocument(); }
}

export { DocumentCreator, WordCreator, SpreadsheetCreator, PresentationCreator };

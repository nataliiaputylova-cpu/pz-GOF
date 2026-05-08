// Singleton
// Проблема: підключення до БД — дорога операція, не можна створювати щоразу нове
// Рішення: один екземпляр на весь застосунок

class DatabaseConnection {
  private static instance: DatabaseConnection;
  private connectionCount = 0;

  private constructor() {
    console.log('[DB] Нове підключення до бази даних встановлено');
  }

  static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  query(sql: string): void {
    this.connectionCount++;
    console.log(`[DB] Запит #${this.connectionCount}: ${sql}`);
  }

  getQueryCount(): number {
    return this.connectionCount;
  }
}

export { DatabaseConnection };

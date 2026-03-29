class LoggerService { 
    private static instance: LoggerService; // создание приватного статического поля класса;

    private logs: { message: string; date: Date} [] = []; // приватный массив длоя логов;

    private constructor() {};

    public static getInstance(): LoggerService {

     if (!LoggerService.instance) {
        LoggerService.instance = new LoggerService();
        ;
    }
    return LoggerService.instance;
    }
    
    public log(message: string): void {
    this.logs.push({ message: message, date: new Date() });
  }

     public getLogs(): { message: string; date: Date }[] {
    return this.logs.slice(); // возврат копии массива
  }
}


const logger1 = LoggerService.getInstance();
const logger2 = LoggerService.getInstance();


logger2.log('222');
logger1.log('111');

console.log('Логи со 2logger`a', logger2.getLogs()); 
console.log('Логи с 1logger`a', logger2.getLogs());



// 2nd task 

import dotenv from 'dotenv';

class ConfigService {
    private static instance: ConfigService;

    private _config: dotenv.DotenvParseOutput;

    private constructor() {
        const cfg = dotenv.config();

        if (cfg.error) {
            throw new Error("Не найден файл .env");
        }

        if (!cfg.parsed) {
            throw new Error("Пустой файл .env");
        }

        this._config = cfg.parsed;
    }

    public static getImgUrl(): string {
        return "https://youtube.com/sdaaadsaasd"
    }

    public static getInstance(): ConfigService {
        if (!ConfigService.instance) {
            ConfigService.instance = new ConfigService();
        }

        return ConfigService.instance;
    }

    public get(key: string): string {
        const response = this._config[key];

        if (!response) {
            throw new Error(`Нет такого ключа: ${key}`);
        }

        return response;
    }
    public getNumber(key: string): number {
    const value = this.get(key); 
    const numberValue = Number(value); 

    if (isNaN(numberValue)) { 
      throw new Error("Это не число");
    }

    return numberValue; 
  }
}

class Bot {
    public constructor() {}

    public run() {
        const config = ConfigService.getInstance();

        const token = config.get("BOT_TOKEN");
        const port = config.get("PORT");

        console.log(`Запускаю бота на порту ${port} с токеном ${token}`);
    }
}

const app = new Bot();
app.run();
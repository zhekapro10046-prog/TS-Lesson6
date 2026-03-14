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
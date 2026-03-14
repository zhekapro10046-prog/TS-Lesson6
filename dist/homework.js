"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LoggerService {
    static instance; // создание приватного статического поля класса;
    logs = []; // приватный массив длоя логов;
    constructor() { }
    ;
    static getInstance() {
        if (!LoggerService.instance) {
            LoggerService.instance = new LoggerService();
            ;
        }
        return LoggerService.instance;
    }
    log(message) {
        this.logs.push({ message: message, date: new Date() });
    }
    getLogs() {
        return this.logs.slice(); // возврат копии массива
    }
}
const logger1 = LoggerService.getInstance();
const logger2 = LoggerService.getInstance();
logger2.log('222');
logger1.log('111');
console.log('Логи со 2logger`а', logger2.getLogs());
console.log('Логи с 1logger`а', logger2.getLogs());

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
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
console.log('Логи со 2logger`a', logger2.getLogs());
console.log('Логи с 1logger`a', logger2.getLogs());
// 2nd task 
const dotenv_1 = __importDefault(require("dotenv"));
class ConfigService {
    static instance;
    _config;
    constructor() {
        const cfg = dotenv_1.default.config();
        if (cfg.error) {
            throw new Error("Не найден файл .env");
        }
        if (!cfg.parsed) {
            throw new Error("Пустой файл .env");
        }
        this._config = cfg.parsed;
    }
    static getImgUrl() {
        return "https://youtube.com/sdaaadsaasd";
    }
    static getInstance() {
        if (!ConfigService.instance) {
            ConfigService.instance = new ConfigService();
        }
        return ConfigService.instance;
    }
    get(key) {
        const response = this._config[key];
        if (!response) {
            throw new Error(`Нет такого ключа: ${key}`);
        }
        return response;
    }
    getNumber(key) {
        const value = this.get(key);
        const numberValue = Number(value);
        if (isNaN(numberValue)) {
            throw new Error("Это не число");
        }
        return numberValue;
    }
}
class Bot {
    constructor() { }
    run() {
        const config = ConfigService.getInstance();
        const token = config.get("BOT_TOKEN");
        const port = config.get("PORT");
        console.log(`Запускаю бота на порту ${port} с токеном ${token}`);
    }
}
const app = new Bot();
app.run();

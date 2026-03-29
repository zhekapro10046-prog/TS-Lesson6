"use strict";
// class Database {
//     private static instance: Database;
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//     private constructor() {
//         console.log("Подключение к базе данных установлено!");
//     }
//     public static getInstance(): Database {
//         if (!Database.instance) {
//             Database.instance = new Database();
//             console.log("Подключение создано!");
//         } else {
//             console.log("Подключение уже есть!");
//         }
//         return Database.instance;
//     }
//     public query(sql: string) {
//         console.log(`Выполняю запрос: ${sql}`);
//     }
// }
// const errorDb = new Database();
// const db = Database.getInstance();
// const db2 = Database.getInstance();
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

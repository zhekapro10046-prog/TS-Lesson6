// class Database {
//     private static instance: Database;

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
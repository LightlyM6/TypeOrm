import "reflect-metadata"
import { DataSource } from "typeorm"
import { Courses} from "./entity/Courses"


export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "bs002X016",
    database: "postgres",
    synchronize: false,
    logging: false,
    entities: ["./src/entity/*.ts"], // add your Entity here
    migrations: ["./src/migration/**/*.ts"],
    subscribers: [],
})

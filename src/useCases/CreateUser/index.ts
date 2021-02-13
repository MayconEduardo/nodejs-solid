import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { DatabaseUsersRepository } from "../../repositories/implementations/DatabaseUsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const databaseUsersRepository = new DatabaseUsersRepository()
const mailtrapMailProvider = new MailtrapMailProvider()

const createUserUseCase = new CreateUserUseCase(
    databaseUsersRepository,
    mailtrapMailProvider
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController }
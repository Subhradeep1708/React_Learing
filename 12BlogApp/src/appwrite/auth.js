import conf from '../conf/conf.js'
import { Client, Account, ID } from 'appwrite';

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);

        this.account = new Account(this.client);
    }

    async
}

const authService = new AuthService(); // this is an object of AuthService class just add .func_name and use anywhere

export default authService;
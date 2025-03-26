/* eslint-disable no-useless-catch */
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

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                //call another method
                return this.login({ email, password });//if account created successfully then login directly
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    // to check if user is logged in or not
    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite Error:: getCurrentUser Error ", error);
        }
        return null; // if no user is logged in then return null
    }

    async logout() {
        try {
            return await this.account.deleteSessions(); // delete all sessions
        } catch (error) {
            console.log("Appwrite Error:: logout Error ", error);
        }
    }

}

const authService = new AuthService(); // this is an object of AuthService class just add .func_name and use anywhere

export default authService;
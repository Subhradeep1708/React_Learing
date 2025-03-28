import conf from '../conf/conf.js'
import { Client, Databases, ID, Storage, Query } from 'appwrite';

export class Service {
    client = new Client();
    databases;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)

        this.databases = new Databases(this.client)
    }
}


const service = new Service();

export default service;
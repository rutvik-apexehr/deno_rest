import configs from '../config/config.ts';

const { dbName} = configs;

/**
 * Reusable database connection
 */
class Database {

  /**
   * Constructor function for Database
   * @param dbName
   * @param url
   */
  constructor(public dbName: string, public url: string) {
    this.dbName = dbName;
    this.url = url;
  }

}

const db = new Database(dbName);

export default db;

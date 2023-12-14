import pymongo
from dotenv import load_dotenv
import os
dotenv_path = os.path.join(os.getcwd(), ".env")

class Connetction:

    def __self__(self):
        self.conn = None

    def connect(self):
        self.conn = pymongo.MongoClient(os.getenv('MONGO_URI')) 
        return self.conn
    
    def close(self):
        self.conn.close()
        return True
    
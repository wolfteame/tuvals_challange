import mysql.connector
import json

# Return data from config.json based to given param
def set_data(param):
    with open("config.json") as file:
        config = json.load(file)
        return config[param]

# Class to handle all function infront the DB
class sql_db():
    def __init__(self):
        self.host = set_data("host")
        self.port = set_data("port")
        self.username = set_data("username")
        self.password = set_data("password")
        self.db = self.set_db()
        self.create_table("items")

#a function that connects to the db
    def set_db(self):
        my_db = mysql.connector.connect(host=self.host,
                                        user=self.username,
                                        password=self.password,
                                        port=self.port,
                                        database="challange_1_sql")
        return my_db


#a function that creats a table if its not exist
    def create_table(self,table_name):
        cursor = self.db.cursor()
        try:  # Checking if table "items" is already exist
            cursor.execute(f"CREATE TABLE {table_name} (_id INTEGER PRIMARY KEY AUTO_INCREMENT, item_name VARCHAR(9), item_price FLOAT(7))")
            self.db.commit()
            cursor.close()
        except:
            pass

#sending data to the DB + connection
    def add_new_item(self,table_name,new_item_name,new_item_price):
        cursor = self.db.cursor()
        cursor.execute(f"ALTER TABLE {table_name} AUTO_INCREMENT = 1")
        cursor.execute(f"INSERT INTO {table_name} (item_name,item_price) VALUES ('{new_item_name}',{new_item_price})")
        self.db.commit()
        cursor.close()
    
    # showing table  + connection  
    def get_table(self,table_name):
        cursor = self.db.cursor(buffered=True)
        cursor.execute(f"select * from {table_name}")
        result = cursor.fetchall()
        cursor.close()
        return result
    

    
if __name__ == "__main__":
    db_connector = sql_db()
    db_connector.add_new_item(table_name="items",new_item_name="test2",new_item_price=11111)
from DB_Wrapper import sql_db

# Class to handle all function infront the DB
class sql_request():

#sending data to the DB 
    def add_new_item(self,table_name,new_item_name,new_item_price):
        Request_post_DB = sql_db()
        Request_post_DB.add_new_item(table_name, new_item_name, new_item_price)
    

#showing table request     
    def get_table(self,table_name):
        Request_get_DB = sql_db()
        result = Request_get_DB.get_table(table_name)
        return result

    
# if __name__ == "__main__":
#     db_connector = sql_db()
#     # print(db_connector.cursor)
#     # print(db_connector.add_new_item(table_name="items",new_item_name="test",new_item_price=123))
#     # print(db_connector.get_table())
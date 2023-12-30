# Tuvals_challange
Hello everybody

This code is for challange one, and this is the requirements for running the app.

1. You need to have phython with fastapi and mysql.connector installed on the machine.
2. You need to set a SQL database (MYSQL for accarcy).
   * When You set the database, you need to replace the file CONFIG.JSON in the folder DB_WRAPPER to youre Username and password.
3. Open your'e CLI and go where you save youre DB_WRAPPER and APP_PROXY.
   * For DB_WRAPPER run the command:
     "python -m uvicorn app:app --reload --port 8000"
   * For APP_PROXY run the command:
     "python -m uvicorn app:app --reload --port 5000"
4. connect to http://localhost:5000 and have fun :-)





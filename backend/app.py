from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from flask_jwt_extended import JWTManager


app=Flask(__name__)

CORS(app)
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///expenses.db'
app.config['JWT_SECRET_KEY']='your key'

db=SQLAlchemy(app)
jwt=JWTManager(app)

from routes import *

db.create_all()

if __name__=='__main__':
    app.run(debug=True)
from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from routes import auth_bp
import db.schema as schema
from config import Config
app=Flask(__name__)

CORS(app)

jwt=JWTManager(app)
app.config.from_object(Config)
schema.__init__db()



app.register_blueprint(auth_bp,url_prefix='/auth')
if __name__=='__main__':
    app.run(host='0.0.0.0',debug=True,port=5002)
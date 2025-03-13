from flask import Blueprint, request, jsonify
from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token, jwt_required,get_jwt_identity
from services.user_management import register_user, login_user

auth_bp=Blueprint('auth',__name__)
bcrypt=Bcrypt()

@auth_bp.route('/register',methods=['POST'])
def register():
    data=request.get_json()
    username=data.get('username')
    password=data.get('password')
    user_data= {
        "username":username,
        'password':password
    }
    return register_user(user_data)
   
@auth_bp.route('/login',methods=['POST'])
def login():
    data=request.get_json()
    username=data.get('username')
    password=data.get('password')
    user_data= {
        "username":username,
        'password':password
    }
    print(data)
    return login_user(user_data)
   
            
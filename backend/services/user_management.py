from flask_bcrypt import Bcrypt
from flask_jwt_extended import create_access_token
from db.database import create_user_in_db, get_user_from_db

bcrypt=Bcrypt()
def register_user(data):
    name=data.get('name')
    username = data.get("username")
    password = data.get("password")
    existing_user=get_user_from_db(username)
    
    if existing_user:
        return {'message':"User already exists"},400
    
    hashed_password=bcrypt.generate_password_hash(password).decode('utf-8')
    
    value=create_user_in_db(name,username,hashed_password)
    print(value)
    
    return {'message':'user registered successfully'},201

def login_user(data):
    username = data.get("username")
    password = data.get("password")

    # Check if user exists
    user = get_user_from_db(username)
    print(username,password)
    if not user:
        return {"message": "User does not exist"}, 404  # ❌ User not found

    # Fetch hashed password from database
    stored_hashed_password = user.password

    # Check password
    if not bcrypt.check_password_hash(stored_hashed_password, password):
        return {"message": "Invalid username or password"}, 401  # ❌ Incorrect password

    # Generate JWT Token if password is correct
    access_token = create_access_token(identity=user.id)

    return {"access_token": access_token, "message": "Login successful"}, 200

import os

# jwt token
class Config:
    SECRET_KEY=os.environ.get("SECRET_KEY", "my_secret_key")
    JWT_SECRET_KEY=os.environ.get("JWT_SECRET_KEY", "my_jwt_secret_key")

# db configuration
DB_NAME=os.environ.get('DB_NAME','expense_tracker')
DB_USER=os.environ.get('DB_USER','postgres')
DB_PASSWORD=os.environ.get('DB_PASSWORD','postgres')
DB_HOST=os.environ.get('DB_HOST','52.172.96.122')
DB_PORT=os.environ.get('DB_PORT','5432')
POSTGRES_URL=f'postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}'
from sqlalchemy import Column, Integer, String, Float, Boolean,ForeignKey, BigInteger, TIMESTAMP,DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.dialects.postgresql import JSON 
from sqlalchemy import inspect
from sqlalchemy.orm import relationship
from sqlalchemy import create_engine
import config

POSTGRES_URL=config.POSTGRES_URL

Base=declarative_base()

class User(Base):
    __tablename__='users'
    
    id=Column(Integer, primary_key=True, autoincrement=True)
    name=Column(String,nullable=False)
    username=Column(String,nullable=False, unique=True)
    password=Column(String, nullable=False)

class Expenses(Base):
    __tablename__='expenses'
    
    id = Column(Integer, primary_key=True, autoincrement=True) 
    amount = Column(Float, nullable=False)
    category = Column(String, nullable=False)
    date = Column(DateTime, nullable=False)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)  


def create_tables(enigne):
    Base.metadata.create_all(enigne)
    
    
def __init__db():
    try:
        print("🔄 Initializing Postgres database...")
        engine=get_engine( )
        inspector=inspect(engine)
        tables_to_create=[]
        for table_class in [User,Expenses]:
            if table_class.__tablename__ not in inspector.get_table_names():
                tables_to_create.append(table_class)
        
        if tables_to_create:
            Base.metadata.create_all(engine,tables=[table.__table__ for table in tables_to_create])
            print(f"✅ Created tables: {[table.__tablename__ for table in tables_to_create]}")
        else:
            print("✅ All required tables already exist. No new tables were created.")
    except Exception as e:
        print(f'Error Initializing database:{str(e)}',exc_info=True)

def get_engine():
    try:
        return create_engine(POSTGRES_URL)
    except Exception as e:
        print(f'Error creating database engine:{str(e)}')
        return None


        



from sqlalchemy.orm import sessionmaker
from sqlalchemy.exc import SQLAlchemyError
from db.schema import User,get_engine

engine=get_engine()
Session=sessionmaker(bind=engine)

def create_user_in_db(name,username,hashed_password):
    session=Session()
    try:
        new_user=User(name=name,username=username,password=hashed_password)
        session.add(new_user)
        session.commit()
        print("✅ User saved successfully:", new_user.username)
        return new_user
    except SQLAlchemyError as e:
        session.rollback()
        print('in here',e)
        return None
    finally:
        session.close()

def get_user_from_db(username):
    session=Session()
    try:
        user=session.query(User).filter(User.username==username).first()
        return user
    except SQLAlchemyError as e:
        return None
    finally:
        session.close()
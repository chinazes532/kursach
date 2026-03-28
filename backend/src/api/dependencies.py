from backend.src.services.users import UsersService
from backend.src.repositories.users import UserRepository
from backend.src.services.email import SMTPEmailService
from backend.config import config


def users_service():
    user_service = UserRepository()

    email_service = SMTPEmailService(
        smtp_host="smtp.gmail.com",
        smtp_port=465,
        login=config.email.gmail_sender,
        password=config.email.gmail_password
    )

    return UsersService(
        user_service,
        email_service,
        config.email.admin_mail
    )
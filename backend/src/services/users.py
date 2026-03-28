from backend.src.services.email import AbstractEmailService
from backend.src.utils.repository import AbstractRepository
from backend.src.schemas.users import UserAddSchemas


class UsersService:
    def __init__(self,
                 user_repo: AbstractRepository,
                 email_service: AbstractEmailService,
                 admin_email: str
                 ):
        self.user_repo: AbstractRepository = user_repo
        self.email_service: AbstractEmailService = email_service
        self.admin_email: str = admin_email

    async def create_new_user(self, creds: UserAddSchemas):
        user_dict = creds.model_dump()
        user_id = await self.user_repo.add_one(user_dict)
        await self.email_service.send_email(
            subject="Новая заявка на консультацию!",
            body=f"<b>ФИО:</b> {creds.full_name} <br>"
                 f"<b>Номер телефона:</b> {creds.phone[4:]} <br>",
            to=self.admin_email,
        )
        return user_id


from uuid import uuid4

from django.db import models
# from django.contrib.auth.models import AbstractUser

# Create your models here.

# class User(AbstractUser):
#     first_name = None
#     last_name = None
#     username = None
#     id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
#     meail = models.EmailField("email address", unique=True)
#     name = models.CharField(max_length=150)

#     USERNAME_FIELD = "email"
#     REQUIRED_FIELDS = ["name"]

class Network(models.Model):

    QLD = "QLD"
    NSW = "NSW"
    VIC = "VIC"
    ACT = "ACT"
    TAS = "TAS"
    SA = "SA"
    WA = "WA"
    NT = "NT"

    MAIN_STATE_CHOICES = [
        (QLD, "QLD"),
        (NSW, "NSW"),
        (VIC, "VIC"),
        (ACT, "ACT"),
        (TAS, "TAS"),
        (SA, "SA"),
        (WA, "WA"),
        (NT, "NT")
    ]

    DISTRIBUTION = "DISTRIBUTION"
    TRANSMISSION = "TRANSMISSION"

    SECTOR_CHOICES = [
        (DISTRIBUTION, "DISTRIBUTION"),
        (TRANSMISSION, "TRANSMISSION"),
    ]

    id = models.CharField(max_length=3, primary_key=True)
    name = models.CharField(max_length=50)
    main_state = models.CharField(max_length=3, choices=MAIN_STATE_CHOICES)
    sector = models.CharField(max_length=20, choices=SECTOR_CHOICES)

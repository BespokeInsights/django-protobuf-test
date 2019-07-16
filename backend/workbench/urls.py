from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter

from .views import NetworkViewset

router = DefaultRouter()

router.register(r"networks", NetworkViewset)

urlpatterns = [
    url(r"^", include(router.urls))
]


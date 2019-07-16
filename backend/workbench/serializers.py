from rest_framework import serializers

from .models import Network

# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ("id", "name", "email")

class NetworkSerializer(serializers.ModelSerializer):
    class Meta:
        model = Network
        fields = ("id", "name", "main_state", "sector")
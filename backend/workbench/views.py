
from base64 import b64encode

from django.shortcuts import render, get_object_or_404

# Create your views here.
from rest_framework import viewsets, status
from rest_framework.response import Response

from protos.workbench_pb2 import Network as NetworkPb

from .models import Network
from .serializers import NetworkSerializer

# class UserSerializer(viewsets.ModelViewSet):
#     queryset = User.objects.all()
#     serializer_class = UserSerializer

class NetworkViewset(viewsets.ModelViewSet):
    queryset = Network.objects.all()
    serializer_class = NetworkSerializer

    def retrieve(self, request, pk=None):
        network = get_object_or_404(self.get_queryset(), pk=pk)
        n = NetworkPb()
        n.name = network.name
        n.main_state = NetworkPb.StateCode.Value(network.main_state)
        n.sector = NetworkPb.Sector.Value(network.sector)
        n.id = network.id
        print(n.SerializeToString())
        return Response(data=b64encode(n.SerializeToString()), status=status.HTTP_200_OK)

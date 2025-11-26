# prediction_api/views.py (수정)

from rest_framework.views import APIView
from rest_framework.response import Response
from .models import DslD95, DslFlashPt, TarD5, NaphD95
# 🚨 모든 Serializer를 가져옵니다.
from .serializers import DslD95Serializer, DslFlashPtSerializer, TarD5Serializer, NaphD95Serializer 

# 모델과 Serializer를 함께 매핑합니다.
MODEL_MAPPING = {
    'dsld95': {'model': DslD95, 'serializer': DslD95Serializer},
    'dslflashpt': {'model': DslFlashPt, 'serializer': DslFlashPtSerializer},
    'tard5': {'model': TarD5, 'serializer': TarD5Serializer},
    'naphd95': {'model': NaphD95, 'serializer': NaphD95Serializer}
}

class SimulationDataAPIView(APIView):
    def get(self, request, *args, **kwargs):
        model_name = kwargs.get('model_name').lower()
        
        config = MODEL_MAPPING.get(model_name) # 매핑된 설정 가져오기
        
        if not config:
            return Response({"error": "Invalid model name provided."}, status=400)
        
        ModelClass = config['model']
        SerializerClass = config['serializer'] # 🚨 사용할 Serializer 클래스

        # 모든 데이터 (240일치)를 조회
        queryset = ModelClass.objects.all().order_by('date') 
        
        # 🚨 동적으로 선택된 Serializer를 사용합니다.
        serializer = SerializerClass(queryset, many=True) 
        return Response(serializer.data)
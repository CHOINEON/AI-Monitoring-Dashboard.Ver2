from rest_framework import serializers
from .models import DslD95, DslFlashPt, TarD5, NaphD95



# DslD95 전용 Serializer
class DslD95Serializer(serializers.ModelSerializer):
    # 이전처럼 필드 이름을 유지합니다.
    DATE = serializers.DateTimeField(source='date')
    TARGET = serializers.FloatField(source='target')
    PREDICT = serializers.FloatField(source='predict')

    class Meta:
        model = DslD95 # 🚨 이 부분이 필수입니다!
        fields = ('DATE', 'TARGET', 'PREDICT')

# DslFlashPt 전용 Serializer
class DslFlashPtSerializer(serializers.ModelSerializer):
    DATE = serializers.DateTimeField(source='date')
    TARGET = serializers.FloatField(source='target')
    PREDICT = serializers.FloatField(source='predict')

    class Meta:
        model = DslFlashPt # 🚨 이 부분이 필수입니다!
        fields = ('DATE', 'TARGET', 'PREDICT')
        
# ... TarD5Serializer, NaphD95Serializer도 동일하게 추가

class TarD5Serializer(serializers.ModelSerializer):
    DATE = serializers.DateTimeField(source='date')
    TARGET = serializers.FloatField(source='target')
    PREDICT = serializers.FloatField(source='predict')

    class Meta:
        model = TarD5 
        fields = ('DATE', 'TARGET', 'PREDICT')
        
class NaphD95Serializer(serializers.ModelSerializer):
    DATE = serializers.DateTimeField(source='date')
    TARGET = serializers.FloatField(source='target')
    PREDICT = serializers.FloatField(source='predict')

    class Meta:
        model = NaphD95
        fields = ('DATE', 'TARGET', 'PREDICT')
        

# (나머지 두 Serializer도 동일한 패턴으로 생성해 주세요.)
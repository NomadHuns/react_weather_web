# 간단한 날씨 웹앱 만들기

## 구성 화면
### 인트로 화면
<img alt="welcome_screen_shot.png" src="screenshot/welcome_screen_shot.png" width="400" />

### 메인 화면
<img alt="main_screen_shot.png" src="screenshot/main_screen_shot.png" width="400" />

### 상세 화면
<img alt="detail_screen_shot.png" src="screenshot/detail_screen_shot.png" width="400" />

## 이슈
### 위치 정보 불러올 수 없음
```text
GeolocationPositionError {code: 2, message: 'Position update is unavailable'}
```
- 위치 정보 접근 권한 부여시에도 위치 정보를 불러올 수 없음.
- localhost 환경이라 정상적으로 동작하지 않는 것으로 추측됨.

### open-meteo 날씨 코드
<img alt="detail_screen_shot.png" src="screenshot/weather_code_screen_shot.png" />

### 자외선 정보
<img alt="detail_screen_shot.png" src="screenshot/uv_index_screen_shot.png" />

### 공기질 정보
<img alt="detail_screen_shot.png" src="screenshot/air_quality_index_screen_shot.png" />


## 해당 프로젝트 평가
- 해당 프로젝트는 React 재학습 용도로 사용하였음.
- Flutter 프로젝트를 전부터 오랜기간 진행해 왔기 때문에 Flutter의 화면 구현 방식을 많이 차용하려고 했음.
- 컴포넌트를 만들고 진행을 하면서 좋았던 점은 후반부 갈수록 개발 속도가 굉장히 빨라짐.
- 만들면서 가장 아쉬웠던 컴포넌트는 Row 컴포넌트가 가장 아쉬움.
- 왜 아쉽냐면 width를 따로 지정해주어야 된다는 점이 불편했음. Flutter 방식이었다면 Row에 width는 없음.
- Row에 OnClick 이벤트를 추가한 부분도 아쉬움. 차라리 새로운 컴포넌트를 생성하는게 나을 것.
- Text 관련 컴포넌트들은 컴포넌트명 짓는게 어려웠음. 특히 폰트 두개가 혼재되어 이름 짓기가 더 어려웠음.
- Padding 컴포넌트를 생성 하려다 말았는데 Row와 Column 컴포넌트가 생각한대로 정상 작동 했다면 추가해볼만 할듯.
- open-meteo에서 제공하는 API의 질이 생각보다 괜찮아서 놀랬음.

## 참고
- 디자인: https://www.figma.com/community/file/1264522121969062318/weather-app
- Poppins 폰트: https://fonts.google.com/specimen/Poppins?query=POPPINS
- Open Sans 폰트: https://fonts.google.com/specimen/Open+Sans
- 이미지: https://www.flaticon.com
- 아이콘: https://react-icons.github.io/react-icons
- 날씨 데이터: https://open-meteo.com/en/docs
- 공기질 데이터: https://open-meteo.com/en/docs/air-quality-api
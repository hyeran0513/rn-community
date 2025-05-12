## React Native 공부용 프로젝트 👋

### 📍 expo app 설치 명령어
```
npx create-expo-app@latest (폴더명) --template
```

---

### 📁 설치 패키지

| 패키지명                       | 설치 명령어                                       | 설명                    |
| ------------------------------ | ------------------------------------------------- | ----------------------- |
| react-native-safe-area-context | `npx expo install react-native-safe-area-context` | 안드로이드 SafeAreaView |
| react-hook-form                | `npm install react-hook-form`                     |                         |
| tanstack/react-query           | `npm install @tanstack/react-query`               |                         |
| expo-secure-store              | `npx expo install expo-secure-store`              |                         |
| axios                          | `npm install axios`                               |                         |
| react-native-toast-message     | `npm i react-native-toast-message`                |                         |

---

### 📝 메모

1. React Native에서 많은 데이터를 가진 긴 목록을 표시할 때, <br />
ScrollView 대신 FlatList 사용하는 주된 장점은?

   화면에 보이는 항목만 렌더링한다.

<br />

3. 디바이스 안전 영역을 고려하여, 버튼을 화면 가장 아래에 항상 고정시키는 방법은?
  
   `position: 'absolute'`와 `bottom: 0`을 사용하고 `useSafeAreaInsets`로 하단 패딩을 조정한다.

<br />

5. 여러 입력 필드를 가진 폼의 상태를 효율적으로 관리하는 일반적인 방법은?

   객체 형태로 useState 사용

<br />

7. 복잡한 폼 상태 관리와 유효성 검증 과정을 간소화하기 위해 도입된 라이브러리는?

   React Hook Form

<br />

9. React Hook Form 사용 시, 부모 컴포넌트의 폼 상태와 분리된 자식 입력 컴포넌트를 연결하는 주요 Hook은?

   Controller

<br />

11. 사용자 로그인 성공 후 서버로부터 받은 민감한 정보인 엑세스 토큰을 모바일 앱에 안전하게 저장하기 위해 추천되는 방법은?

    SecureStore 사용 

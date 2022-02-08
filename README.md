# Wanted_Pre_Onboarding

# 과제 구현 목록

- Toggle
- Modal
- Tab
- Tag
- AutoComplete
- ClickToEdit

# Toggle

![Toggle](https://user-images.githubusercontent.com/60571418/152779074-083d05b8-53f4-414f-bea9-d7808c6fd214.gif)

### 💡구현 방법

- 알약 모양의 토글 버튼 생성
- ‘Toggle = Button’ 이라고 생각하여 버튼 태그로 만들어 상태에 따라 css에 변화를 주려고 했다
  하지만 버튼보다는 두가지 상태를 다루는 checkbox를 이용하는 것이 관리하기 더 용이하다 생각하여 check박스를 이용해 만들었다.
- 알약 안의 원이 토글 상태에 따라 좌우로 움직이는 애니메이션을 추가하였다.
  체크박스 상태에 따른 토글 버튼 배경 색상 변경
  초기값 설정과 상태관리가 용이한 useState를 통해 토글 스위치의 on, off 상태를 관리 하였고
  handleToggle을 통해 토글을 클릭할 때마다 반대 상태로 바꿔주는 함수를 만들었다.
  토글 앞에 보라색 배경을 가진 사각형을 가려놓고 토글 스위치가 눌렸을 때, scale을 조정하여 토글 배경을 채우는 애니메이션을 주었다. 원래는 토글 버튼 크기와 동일한 알약 모양을 배치하려 했지만예시에서 채워지는 모양이 둥근 모양이 아닌 평평한 모양으로 토글 배경이 채워져 사각형을 배치하였다.

### 🛠Error Handling Log

- div 태그만 사용하여 토글을 눌렀을 때, 아무런 반응이 일어나지 않았다.
  - Toggle을 감싸는 wrapper를 div가 아닌 label태그로 바꿔야 Toggle을 클릭했을 때, 변화가 잘 적용되었다.
- label 태그로 바꾸었더니 Toggle 영역이 가로 전체에 잡혀 Toggle 버튼이 아닌 옆 부분을 눌러도 반응이 일어났다.
  - label 태그의 width를 fit-content를 주었더니 Toggle 버튼 영역 이외에 클릭 이벤트가 발생해도 Toggle이 움직이지 않았다.
- Toggle 배경 색이 슬라이더처럼 바뀌지 않고 한번에 바뀌는 문제
  - 보라색 배경이 자연스럽게 슬라이더처럼 나오려면 두가지를 생각해보았다
  1. 첫번쨰는 보라색 영역이 회색 toggle부분의 알약 형태처럼 만든 후 translateX를 이용해 좌우로 움직이면 자연스럽게 배경색이 바뀔거라 생각했다.
  2. 두번째는 ::before를 이용해 회색 Toggle 앞에 보라색 영역을 생성하고 scale을 조정하고 회색 부분보다는 앞에있고 흰색 원보다는 뒤에 배치하면 될 것이라고 생각했다.
     애플리게이션 예시 이미지에서는 보라색이 채워지는 것이 둥근 모양이아니라 네모난 모양이 커지는 것처럼 보여 두번째 방법이 더 적합하다 생각하여 두번째 방안을 사용했다.
- scaleX와 transition-origin: 0 100%;을 이용했지만 보라색부분이 회색 Toggle 부분을 벗어나는 경우가 생겼다.
  - overflow: hidden을 이용하여 해결하였다.

### 💻 실행 방법

- 토글 스위치 버튼 클릭하기
  - 버튼 hover 시 마우스 pointer cursor로 변경
  - 클릭 시 Toggle 안 흰색 원 우측으로 이동
  - 클릭 시 Toggle Background 색 변경
- Toggle Switch ON, OFF
  - 클릭 시 Toggle Switch OFF → ON 으로 상태 변경
  - 다시 클릭 시 ON → OFF로 상태 변경

# Modal

![Modal](https://user-images.githubusercontent.com/60571418/152779184-027d276e-e023-471c-bdfc-383dc6f305bd.gif)

### 💡구현 방법

```jsx
/src
	App.js
	/component
		Modal.js
		ModalContents.js
```

- Modal 창을 여는 버튼 생성
- Modal 컴포넌트에서 useState를 이용해 modal 창이 열려있는지 닫혀있는지 상태를 관리한다.
- Open Modal 클릭 시 ModalContents 컴포넌트 호출
  - 코드의 길이가 너무 길어지며 Modal의 존재 여부를 판단하여 Modal 창을 보여줄지 null을 보낼지 삼항연산자로 구분하기 위해 ModalContents를 따로 생성
- ModalContents에서 Modal 창을 관리하며 X버튼을 클릭 시 closeModal 함수를 호출한다.
- closeModal이 호출 시 setOpenModal을 false로 상태를 변경하여 Modal 창 종료.

### 🛠Error Handling Log

- 모달창 배경의 height가 화면 전체를 가리지 못했다. (height 100%을 주어도)
  height는 부모 height의 속성에 영향을 받는다. - bottom: 0을 주니까 아래 영역까지 전체 화면을 가린다.

### 💻 실행 방법

- Open Modal 버튼 클릭하기
  - 버튼 hover 시 마우스 pointer cursor로 변경
  - 클릭 시 Modal 창 활성화
- Modal 창 종료하기
  - X 버튼 클릭시 Modal 창 닫힘
  - Modal 창 배경인 회색 부분을 클릭시 Modal 창 닫힘
  - Modal 창이 띄어진 상태에서 ESC 누를 시 Modal 창 닫힘

# Tab

![Tab](https://user-images.githubusercontent.com/60571418/152779192-1a288a02-760c-4447-ae54-7fb50fbc9366.gif)

### 💡구현 방법

- Tab의 제목과 내용을 객체에 담고 Tab1 객체, Tab2 객체, Tab3 객체를 TabArr에 담는다.
- TabArr을 map을 이용하여 하나하나 순회하면서 key값을 부였다.
- 특정 Tab 클릭 시 handleClickMenu 함수를 호출하고 해당 index 값을 넘겨 현재 선택된 index 값과 TabArr의 index 값이 일치한 Tab의 제목에 새로운 color를 부여하고 해당 Tab의 내용으로 변경한다.

### 🛠Error Handling Log

- Tab을 리스트 형태로 만들고 Tab 내용도 리스트 형태로 만들어 useState를 이용해 선택된 탭의 제목과 내용을 보여주도록 코드를 작성하려 했지만 둘 다 리스트 형태로 만들면 Tab의 제목과 내용이 분리되지 않는다.
  - Tab의 제목 영역과 Tab의 내용 영역을 분리
- 클릭된 tab과 클릭되지 않은 tab의 css 스타일 차이를 어떻게 보여줄지 어려움을 겪었다.
  - selectedStyle과 nonSelectedStyle을 생성해 SelectedTab의 값과 조회하고 있는 index 값이 같을 경우 selectedStyled을 inline-css로 만들어 차별점을 주었다.

### 💻 실행 방법

- Tab 클릭하기
  - Tab hover 시 마우스 pointer cursor로 변경
  - 원하는 Tab 클릭시
    - 해당 Tab의 제목 영역의 Background 변경
    - 해당 Tab의 내용 영역 변경

# Tag

![Tag](https://user-images.githubusercontent.com/60571418/152779199-b3217f53-d0e7-40cb-8942-636a8f9bf6b2.gif)

### 💡구현 방법

- 기존 Tag 값인 codestates와 jjang Tag를 tagItems 배열에 넣어 저장한다.
- addTag 함수를 이용하여 Tag를 추가한다.
  - input의 onKeyUp 이벤트를 사용하여 Enter가 입력되었을 때, addTag를 호출한다.
  - 입력 받은 값(e.target.value)가 빈 값이 아니면 입력받은 값을 TagItems 배열에 추가한다.
  - 추가 후 값을 “”로 초기화를 한다. 초기화를 하지 않으면 그 값이 그대로 남아있는다.
- deleteTag는 filter 함수를 이용해 구현했다.
  - 삭제하려는 Tag의 인덱스를 받아와 기존의 있는 Tag들 중 삭제하려는 index와 일치하지 않는 Tag들만 남긴다.

### 🛠Error Handling Log

- input으로 값을 받아 리스트 형태로 나열하면 된다 생각했다. input 안에 값을 넣고 enter를 누르면 새로운 값만 들어가고 기존의 값들은 사라지는 현상이 발생했다.
  - setTagItems()에서 새로 입력 받은 값과 기존에 있는 값들을 유지하기 위해 spread 연산자를 이용하였다. setTagItems(...tagItems, 입력받은 값)으로 코드를 짰다.
- Tag가 많아지면 Tag들이 Tag를 담고있는 container 영역을 벗어나게 되었다
  - Tag들을 display: flex;로 만들어 준 후, flex-wrap: wrap;을 통해 container 영역보다 많은 Tag가 생기면 아래로 넓혀지도록 하였다.

### 💻 실행 방법

- Tag input 영역 클릭하기
  - Tag Container의 outline의 색상 변경
  - 추가하고 싶은 Tag 입력 후 Enter 누르기
- Tag X 버튼 클릭하기
  - 삭제하고 싶은 Tag 옆의 X 버튼 클릭 시 삭제

# AutoComplete

![AutoComplete](https://user-images.githubusercontent.com/60571418/152779205-96b9aa47-7d65-43ae-ad8a-98e9178f2ab6.gif)

### 💡구현 방법

- AutoComplete를 할 단어 데이터를 담을 배열을 생성한다. (searchArr 생성)
- useState를 이용해 searchText와 setSearchText를 통해 찾고싶은 단어의 상태를 관리한다.
  - input에 입력되는 값들을 searchText로 관리한다
- complete와 setComplete를 이용해 입력된 문자와 입력된 문자를 포함한 모든 단어를 complete 배열에 넣어 관리한다.
- input 에서 onChange, 즉 입력이 발생했을 때, handleChange 함수를 호출한다.
  - handleChange 함수에서는 받아온 값을 inputWord에 넣어서 관리한다.
  - inputWord가 0보다 클 때, 입력이 있을 시 filter를 이용해 searchArr에 inputWord가 포함된 값들만 completion 배열에 넣고 setComplete을 통해 complete에 필터링된 단어들을 넣는다.
- 자동완성된 단어들은 리스트 형태로 input 아래에 나열된다
  - complete 배열 안에 데이터가 있을 시, 리스트를 보여주며 complete 배열을 map 함수로 순회한다.
  - 리스트 목록 중 찾고싶은 단어가 있을 시, 그 리스트 항목을 클릭하면 completionSelected()함수가 호출된다.
    - completionSelected()함수는 해당 리스트 항목의 값을 setSearchText()함수의 인자로 들어가 searchText에 값이 들어가며 자동완성이 완료된다.

### 🛠Error Handling Log

- sort 속성을 읽을 수 없다고 한다
  - 처음 렌더링되었을 때, tagItems가 정의되지 않은 상태로 가져왔기 때문에 undefined로 읽히기 때문에 sort를 할 수 없다
  - &&연산자 또는 if문을 이용하여 값이 true이면 뒤에있는 값들을 출력해주었다.
    (sort 할 값이 해당 컴포넌트가 아닌 부모컴포넌트에 있으면 발생하는 것 같다.)
- input box-shadow가 부모 컴포넌트를 침범하여 글자가 검색되었을 때, 리스트 위에 그림자가 표시됨
  - 부모 컴포넌트에 focus-within을 주어 자식 컴포넌트가 focus되었을 때, box-shadow를 주도록 설정함
- inputbox와 input을 감싸는 영역이 알맞게 있지 않는다
  - border-box 사용

### 💻 실행 방법

- input에 검색하고 싶은 단어 입력
  - 입력 시 입력한 문자가 들어간 단어들을 리스트 형태로 보여줌.
  - 찾고싶은 단어가 있다면 단어를 클릭
    - 해당 단어에 hover 시 회색 배경으로 변경
  - 단어 클릭 시 input에 입력된 문자가 완성된 문자로 바뀜.

# ClickToEdit

![ClickToEdit](https://user-images.githubusercontent.com/60571418/152779207-f791f25e-88ed-4b4d-916d-6b0eb30d6eaa.gif)

### 💡구현 방법

- useState로 상태관리를 하여 input에서 onChange 이벤트로 값을 e.target.value로 받아서 구현하였다.
- onBlur를 사용하여 input에서 focus가 해제되었을 때, 값이 변경되도록 구현했다.
- 해당 input에 focus가 되었는지 확인하기 위해 input outline에 테두리 색상을 추가하였다.
  - 원하는 input에 focus가 되었는지 쉽게 확인하기 위해
- input에 focus 시, 값 전체가 선택되도록 구현하였다
  - 하나하나 지우지 않고 클릭 한번으로 값을 수정하기 위해

### 🛠Error Handling Log

- onChange를 이용하여 입력 값을 가져와 보여주려했지만, 입력한 즉시 값이 바로 변경되었다.
  - jquery의 focusout 이벤트를 사용하려했지만 react에서는 focusout이 아닌 onblur를 사용한다는 것을 찾았다. (합성 이벤트 [https://ko.reactjs.org/docs/events.html](https://ko.reactjs.org/docs/events.html))
- input에 focus가 되었을 때, 입력된 단어를 하나씩 지워야하는 번거로움이 있었다. input에 마우스를 클릭해 focus가 되었을 때, 입력되어 있는 값을 모두 선택되도록 만들고 싶었다.
  - 처음 시도한 js의 onfocus=”this.select()”가 동작하지 않았다.
  - focusAll 이라는 함수를 따로 만들어 e.target.select()를 이용해 input이 focus가 되었을 때, 전체 선택 되도록 구현했다.
  ```jsx
  onFocus = { focusAll };
  ```

### 💻 실행 방법

- 이름 변경
  - 이름 input에 마우스 클릭 시
    - input ouline 색상 변경
    - input에 있는 기존 값 전체 선택
  - 원하는 값으로 이름 변경
  - 변경 후 input 이외의 영역을 클릭
    - 클릭 시 이름 데이터가 변경됨
- 나이 변경
  - 나이 input에 마우스 클릭시
    - input outline 색상 변경
    - input에 있는 기존 값 전체 선택
  - 원하는 값으로 나이 변경
  - 변경 후 input 이외의 영역을 클릭
    - 클릭 시 나이데이터가 변경됨

# Folder Structure

```jsx
/src
	App.js
	/component
		AutoComplete.js
		ClickToEdit.js
		Modal.js
		ModalContents.js
		Tab.js
		Tag.js
		Toggle.js
```

# Getting Started

### Prerequisites

```jsx
npm install --global yarn
```

### Installation

1. Clone the Repo

   ```jsx
   git clone https:github.com/guno517/wanted_pre_onboarding.git
   ```

2. Install Project Packages

   ```jsx
   yarn;
   ```

3. Run the Project

   ```jsx
   yarn start
   ```

# `Content Main` 컴포넌트 구성하기

`Content Main` 은 받아온 `API` 데이터들을 가지고 `Card` 컴포넌트들을 렌더링 하는 부분이다.

`Card` 컴포넌트들을 적절히 보내기 위해서 각 `Card` 컴포넌트들을 감쌀 적절한 `CardWrapper` 컴포넌트가 필요하다.

## `CardWrapper` 컴포넌트

![alt text](image.png)

이전 랩퍼 컴포넌트를 구상 할 때 카드들을 단순한 구조로 나열하기 보다

다양한 구조로 나열하고 싶다고 했었다 .

위와 같은 구조로 나열하기 위해 필요한 컴포넌트들을 생각해보자

우선 `CardWrapper` 는 `section` 컴포넌트로 구성되어 있고

`Vertical , Horizontal` 의 프로퍼티들을 갖고 있어야 할 것이다.

이는 `css` 속성인 `flex-direction : ..` 에 따라 구분될 것이다.

강 `CardWrapper` 는 `props` 로 `ratio` 를 받도록 하자.

그를 통해 `CardWrapper` 내부의 `Card` 컴포넌트들의 크기를 동적으로 조절 해주도록 하자.

`ratio` 는 `flex-grow` 와 관련있다.

- 이를 통해 얻을 수 있는 이점
  `Wrapper` 에서 내부 아이템들의 크기를 지정해줌으로서 내부 아이템들을 생성 할 때 내부 아이템의 크기 별 컴포넌트 등을 신경 쓰지 않아도 될 것이다.

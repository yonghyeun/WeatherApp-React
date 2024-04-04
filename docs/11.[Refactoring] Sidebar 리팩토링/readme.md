## Start Date : 2024-04-03

## End Date : YYYY-MM-DD

### 문제 정의

```jsx
import React from 'react';

import SidebarWrapper from '../../@components/UI/SidebarWrapper/SidebarWrapper';
import SidebarTitle from '../../@components/UI/SidebarTitle/SidebarTitle';
import SidebarList from '../../@components/UI/SidebarList/SidebarList';

// TODO 합성 컴포넌트 패턴으로 리팩토링 하기
const SideBar = () => {
  return (
    <SidebarWrapper title={<SidebarTitle />}>
      <SidebarList to='./menu1' content='menu1' />
      <SidebarList to='./menu2' content='menu2' />
      <SidebarList to='./menu3' content='menu3' />
    </SidebarWrapper>
  );
};

export default SideBar;
```

예전 합성 컴포넌트 패턴으로 사용하기로 하고 만들었던 사이드바 컴포넌트를

의미가 명확해질 수 있도록 , 또 디자인 패턴을 통일하기 위해 합성 컴포넌트 패턴으로 리팩토링 해보자

### 문제 진단

### 해결 전략

### 해결 결과

### 배운점

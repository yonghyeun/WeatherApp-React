import React from 'react';

/**
 * 만일 ratio 에 적힌 원소의 수와 children 의 수가 맞지 않는다면 오류를 발생시키고
 * ratio 를 적지 않은 경우엔 children 의 flex-grow 를 모두 1로 설정해주도록 함
 * @param {Array<number>} ratio - ReactElement 들의 flexGrow 를 담은 배열
 * @param {Array<React.ReactNode>} children - flexGrow 가 설정될 children elements
 * @returns {Array<React.ReactElement>} - flexGrow 가 설정된 ReactElement를 담은 배열
 */
const makeFlexchildren = (ratio, children) => {
  if (ratio && ratio.length !== children.length)
    throw new Error('ratio의 개수와 children 의 개수는 동일해야 합니다');

  if (ratio && ratio.reduce((pre, cur) => pre + cur) !== 1)
    throw new Error('ratio 의 합은 1이여야 합니다');

  const flexChildren = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      ...child.props,
      style: {
        ...child.props.style,
        flexGrow: ratio ? ratio[index] : 1,
      },
    });
  });

  return flexChildren;
};

export { makeFlexchildren };

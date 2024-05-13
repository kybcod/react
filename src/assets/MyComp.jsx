// react component를 이름 있는 함수 만들거나 이름 없는 함수 만들어 변수에 넣거나 arrow 함수 사용
export function MyComp() {
  return <div>mycomp</div>;
}

export const YourComp = function () {
  return <div>yourcomp</div>;
};

export const ArrowComp = () => <div>arrow function component</div>;

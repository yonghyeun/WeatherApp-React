const Theme = {
  // TODO DarkMode 스타일 나중에 채우기
  Dark: {
    Default: {
      backgroundColor: '#1E1E1E',
      border: '1px solid #555',
      color: 'white',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
    Title1: {
      color: '#E8E6E3', // 밝은 그레이, 기본 텍스트보다 조금 더 밝게
    },
    Title2: {
      color: '#CAC4B0', // 더 밝은 베이지 색상, 중간 수준의 제목에 적합
    },
    Title3: {
      color: '#A9A9A9', // 다크 그레이, 보조 텍스트에 적합
    },
    Paragraph: {
      color: '#CCCCCC', // 라이트 그레이, 일반 텍스트 색상
    },
    Card: {
      backgroundColor: '#2A2A2A',
      border: '1px solid #444',
      color: 'white',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    },
  },

  Light: {
    Default: {
      backgroundColor: '#FAFAFA',
      border: '1px solid #aaa',
      color: 'black',
      // TODO 추후에 지우기
      boxShadow: '5px 5px 5px gray',
    },
    Title1: {
      color: '#010E26',
    },
    Title2: {
      color: '#263973',
    },
    Title3: {
      color: '#6B7FF2',
    },
    Paragraph: {},
    Card: {},
  },
};

export default Theme;

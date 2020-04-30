import styled from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
  selectedPage?: 'lists';
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      display: flex;
      height: 34px;
      align-items: flex-start;
      justify-content: center;

      a {
        color: #fff;
        display: flex;
        text-decoration: none;
        font-size: 16px;
        transition: opacity 0.2s;

        & + a {
          margin-left: 32px;
        }

        &:hover {
          opacity: 0.6;
        }

        &.selected {
          border-bottom-color: #ff872c;
          border-bottom-style: solid;
          padding-bottom: 10px;
        }
      }
    }
  }
`;

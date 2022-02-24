import styled from "styled-components";

export const StyledPost = styled.li`
  box-shadow: 2px 2px 12px rgb(0 0 0 / 30%);
  border-radius: 10px;
  overflow: hidden;

  a {
    display: flex;
    flex-direction: column;
    height: 100%;

    .image-wrapper {
      display: block;
    }

    .content-wrapper {
      padding: 20px 12px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-grow: 2;

      h3,
      p {
        margin-bottom: 20px;
      }

      p {
        color: #8c8c8c;
      }
    }
  }
`;

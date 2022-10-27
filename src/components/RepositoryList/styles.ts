import styled from "styled-components";

export const SectionContainer = styled.section`
  margin: 40px;

  h1 {
    margin-bottom: 16px;
  }

  ul {
    list-style: none;

    li {
      margin-bottom: 20px;

      &:last-child {
        margin-bottom: 0;
      }

      p {
        font-size: 14px;
        color: ${(props) => props.theme.colors["dark-gray"]};
        margin-top: 8px;
      }

      a {
        display: inline-block;
        margin-top: 16px;
        text-decoration: none;
        color: ${(props) => props.theme.colors["dark-purple"]};
      }
    }
  }
`;

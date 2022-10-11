import styled from 'styled-components';
import { COLORS, WEIGHTS } from '../constants/themes';

const TagList = ({ tags }) => {
  return (
    <TagsWrapper>
      {tags.map((tag) => <TagItem key={tag}>{tag}</TagItem>)}
    </TagsWrapper>
  )
};

const TagsWrapper = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 0.3rem;
`;

const TagItem = styled.li`
  color: ${COLORS.urgent};
  font-weight: ${WEIGHTS.medium};
  font-size: 0.75rem;

  &:not(:last-of-type) {
    margin-right: 0.6rem;
  }
`

export default TagList;
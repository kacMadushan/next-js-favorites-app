import TagList from './TagList';
import styled from 'styled-components';
import { COLORS, WEIGHTS, TYPE_SCALE } from '../constants/themes';
import { FavoriteFilled } from './Icons';

const ProductBottom = ({ description, comments, tags, likes }) => {
  return (
    <BottomWrapper>
      <Likes>
        <FavoriteFilled modifiers="sm" primary="primary" />
        <LikeCount>{likes} likes</LikeCount>
      </Likes>
      <Description>{description}</Description>
      <TagList tags={tags} />
      <Comments>View {comments} comments </Comments>
    </BottomWrapper>
  )
};

const BottomWrapper = styled.div`
  padding: 0.75rem 1rem;
`;

const Description = styled.p`
  color: ${COLORS.gray[500]};
  font-weight: ${WEIGHTS.normal};
  font-size: ${TYPE_SCALE.helperText};
  margin-bottom: 0.5rem;
`;

const Comments = styled.p`
  color: ${COLORS.gray[500]};
  font-weight: ${WEIGHTS.normal};
  font-size: ${TYPE_SCALE.helperText};
  margin-bottom: 0;
`;

const Likes = styled.div`
  display: flex;
  align-items: center;
  color: ${COLORS.urgent};
  margin-bottom: 0.3rem;
`;

const LikeCount = styled.span`
  font-weight: ${WEIGHTS.medium};
  font-size: ${TYPE_SCALE.helperText};
  margin-left: 0.3rem;
`;

export default ProductBottom;
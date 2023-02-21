import { FC } from "react";
import { useNavigate } from "react-router-dom";
import {
  BackgroundImage,
  DirectoryItemBody,
  DirectoryItemContainer,
} from "./directory-item.styles";

type DirectoryItemProps = {
  category: { id: number; title: string; imageUrl: string; route: string };
};

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <DirectoryItemBody>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </DirectoryItemBody>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;

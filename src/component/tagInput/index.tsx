import { FormEvent, useState } from "react";
import { useInput } from "../../hooks/useInput";
import { PALETTE } from "../../styles/palette";
import Tag from "../tag";
import * as S from "./styles";

interface Props {
  tags: string[];
  tagColor: string;
}

export default function TagInput({ tags, tagColor }: Props) {
  const [tagList, setTagList] = useState<string[]>(tags);
  const { value, setValue, onChange } = useInput();

  const onAddTag = (e: FormEvent) => {
    e.preventDefault();

    if (tagList.some((tag) => tag === value)) {
      alert("이미 존재하는 태그 입니다.");
      return;
    }

    setTagList((tagList) => [...tagList, value]);
    setValue("");
  };

  const onDeleteTag = (tag: string) => {
    setTagList((tagList) => tagList.filter((tagName) => tagName !== tag));
  };

  return (
    <S.Container>
      {tagList.map((tag) => (
        <Tag key={tag} canDelete onDelete={onDeleteTag} bgColor={tagColor}>
          {tag}
        </Tag>
      ))}
      <form onSubmit={onAddTag}>
        <S.Input placeholder="# 태그 입력" value={value} onChange={onChange} />
      </form>
    </S.Container>
  );
}

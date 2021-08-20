import { useState } from "react";
import { Profile } from "../../constant";
import { DummyProfiles } from "../../dummy";

export function useMain() {
  const [profiles, setProfiles] = useState(DummyProfiles);
  const [filteredProfiles, setFilteredProfiles] = useState(DummyProfiles);
  const [tags, setTags] = useState([] as string[]);
  const [profileModal, setProfileModal] = useState(null as unknown as string);

  const removeTag = (index: number) => {
    const newTags = [...tags];
    newTags.splice(index, 1);
    setTags(newTags);
  };

  const addTag = async (e: any) => {
    const val = e.target.value;
    if (tags.length > 9) {
      alert("태그 검색 추가는 10개까지만 가능해요.");
      return;
    }
    if ((e.key === "Enter" || e.key === " ") && val) {
      if (
        tags.find((tag) => tag.replace(/\s/g, "") === val.replace(/\s/g, ""))
      ) {
        return;
      }
      e.target.value = "";
      setTags([...tags, val.replace(/\s/g, "")]);
    } else if (e.key === "Backspace" && !val) {
      removeTag(tags.length - 1);
    }
  };

  const applyFilter = () => {
    setFilteredProfiles(
      profiles.filter((profile) =>
        tags.every((tag) =>
          [
            ...profile.hobby,
            ...profile.interest,
            ...profile.stack,
            ...profile.etc,
          ].includes(tag)
        )
      )
    );
  };

  return {
    profiles,
    filteredProfiles,
    tags,
    removeTag,
    addTag,
    applyFilter,
    profileModal,
    setProfileModal,
  };
}

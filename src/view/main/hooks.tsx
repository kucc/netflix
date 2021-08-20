import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Profile } from "../../constant";
import { DummyProfiles } from "../../dummy";

export function useMain() {
  const [profiles, setProfiles] = useState(DummyProfiles);
  const [filteredProfiles, setFilteredProfiles] = useState(DummyProfiles);
  const [tags, setTags] = useState([] as string[]);
  const [profileModal, setProfileModal] = useState(null as unknown as number);

  useEffect(() => {
    (async () => {
      const result = await axios.get("http://49.50.162.195:8080/api/profile", {
        headers: {},
      });
      setProfiles(result.data);
      setFilteredProfiles(result.data);
    })();
  }, []);

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
    if (e.key === "Enter" && val) {
      if (tags.find((tag) => tag === val)) {
        return;
      }
      e.target.value = "";
      setTags([...tags, val]);
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

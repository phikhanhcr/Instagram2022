import { useEffect, useState } from "react";
import { controlStory, initStory } from "../../../services/initialSotry";
import ItemStoryPage from "./ItemStoryPage/ItemStoryPage";

const data = [
  {
    avatar:
      "https://images.unsplash.com/photo-1638571433255-7a2805210c5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
    src: "https://images.unsplash.com/photo-1638571433255-7a2805210c5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=627&q=80",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1638622140321-9e22fe968ac2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
    src: "https://images.unsplash.com/photo-1638622140321-9e22fe968ac2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1638602842177-2677a5596a93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
    src: "https://images.unsplash.com/photo-1638602842177-2677a5596a93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1638548001337-1f07020a5bd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    src: "https://images.unsplash.com/photo-1638548001337-1f07020a5bd4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1556034319-3a2b6e7e2257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    src: "https://images.unsplash.com/photo-1556034319-3a2b6e7e2257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1556034319-3a2b6e7e2257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    src: "https://images.unsplash.com/photo-1556034319-3a2b6e7e2257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1556034319-3a2b6e7e2257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    src: "https://images.unsplash.com/photo-1556034319-3a2b6e7e2257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },
];

function ListStoryPage() {
  const [indexStory, setIndexStory] = useState(0);

  useEffect(() => {
    const allStoryItem = document.querySelectorAll(".wrapper-story__item");
    const positionActiveItem = 446.644;
    const positionActiveItemIpad = 176.64;
    const newWidth = window.innerWidth;
    if (newWidth >= 740 && newWidth <= 1023) {
      initStory(allStoryItem, positionActiveItemIpad, 250, 4);
    } else if (newWidth > 1023) {
      initStory(allStoryItem, positionActiveItem, 200);
    } else {
      initStory(allStoryItem, newWidth, newWidth, 1);
    }
  }, []);

  const handleClickItemStory = (index) => {
    if (index !== indexStory && index >= 0 && index < data.length) {
      const allStoryItem = document.querySelectorAll(".wrapper-story__item");
      const positionActiveItem = 446.644;
      const positionActiveItemIpad = 176.64;
      const newWidth = window.innerWidth;
      setIndexStory(index);
      if (newWidth >= 740 && newWidth <= 1023) {
        controlStory(allStoryItem, index, positionActiveItemIpad, 250, 4);
      } else if (newWidth > 1023) {
        controlStory(allStoryItem, index, positionActiveItem, 200, 2);
      } else {
        controlStory(allStoryItem, index, newWidth, newWidth, 1);
      }
    }
  };

  return (
    <div className="relative w-full flex items-center">
      {data.map((ele, index) => (
        <ItemStoryPage
          key={index}
          index={index}
          info={ele}
          onClickHandle={handleClickItemStory}
          active={index === indexStory}
        />
      ))}
    </div>
  );
}

export default ListStoryPage;


const positionActiveItem = 446.644;
const positionActiveItemIpad = 176.64;
export const initStory = (
  listStory,
  sizeActive,
  distanceBtwStories,
  loopDistance = 2
) => {
  for (let i = 1; i < listStory.length; i++) {
    listStory[i].style.transform = `translate(${sizeActive * loopDistance + distanceBtwStories * (i - 1)
      }px) scale(0.4)`;
  }
}


export const controlStory = (
  allStoryItem,
  index,
  sizeActive,
  distanceBtwStories,
  loopDistance = 2
) => {
  allStoryItem.forEach(ele => {
    return ele.classList.remove("story-active")
  })
  // pre
  for (let j = index - 1; j >= 0; j--) {
    allStoryItem[j].style.transform = `translate(${sizeActive - distanceBtwStories * (index - j)
      }px) scale(0.4)`;
  }

  // next
  for (let j = index + 1; j < allStoryItem.length; j++) {
    allStoryItem[j].style.transform = `translate(${sizeActive * loopDistance + distanceBtwStories * (j - index - 1)
      }px) scale(0.4)`;
  }
  if (loopDistance === 2) {
    allStoryItem[
      index
    ].style.transform = `translate(${positionActiveItem}px) scale(1)`;
  } else if (loopDistance === 4) {
    allStoryItem[
      index
    ].style.transform = `translate(${positionActiveItemIpad}px) scale(1)`;
  } else {
    allStoryItem[index].style.transform = `translate(${0}px) scale(1)`;
  }
  allStoryItem[index].classList.add("story-active");
}
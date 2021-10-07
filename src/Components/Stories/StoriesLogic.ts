import { Story } from "../../Shared/interfaces";

/**
 *
 */
export const getTopStories = async () => {
  const allTopStories = await fetchTopStories();
  const topStories = getRandomTopStories(10, allTopStories);

  return topStories;
};

const fetchTopStories = async () => {
  const other = await fetch(`${getHNAPI()}/topstories.json`, {
    mode: "cors",
  });

  return await other.json();
};

const getRandomTopStories = async (
  xSelectedStories: number,
  topStories: number[]
) => {
  let selectedStories: Story[] = [];
  let lengthOfTopStories: number = topStories.length;

  for (let i = 0; i < xSelectedStories; i++) {
    const randomIndex = Math.round(Math.random() * lengthOfTopStories + 1);
    const story = await fetchStoryData(topStories[randomIndex]);

    console.log(story);
    

    selectedStories.push(story);
  }

  return selectedStories;
};

const fetchStoryData = async (id: number) => {
  const story = await fetch(`${getHNAPI()}/item/${id}.json`);
  return await story.json();
};

const getHNAPI = (): string => {
  if (
    process.env.REACT_APP_HACKER_NEWS_API &&
    process.env.REACT_APP_HACKER_NEWS_API.length > 0
  ) {
    return process.env.REACT_APP_HACKER_NEWS_API;
  } else {
    console.error("REACT_APP_HACKER_NEWS_API not provided");
    return "";
  }
};

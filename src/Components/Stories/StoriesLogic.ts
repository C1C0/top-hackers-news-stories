import { Story, User } from "../../Shared/interfaces";

/**
 * @return sorted stories
 */
export const getTopStories = async (): Promise<Story[]> => {
  const allTopStories = await fetchTopStories();
  const topStories = await getRandomTopStories(10, allTopStories);

  return orderStoriesByScore(topStories);
};

/**
 * Fetch raw data (ids of top stories) from API
 * @returns raw ids of top stories
 */
const fetchTopStories = async (): Promise<number[]> => {
  const other = await fetch(`${getHNAPI()}/topstories.json`, {
    mode: "cors",
  });

  return await other.json();
};

/**
 * From provided stories choses random x stories id, fetches their objects from API
 *
 * @param {number} xSelectedStories number of selected stories
 * @param {number[]} topStories ids of topStories
 * @returns fetched stories array from API
 */
const getRandomTopStories = async (
  xSelectedStories: number,
  topStories: number[]
): Promise<Story[]> => {
  let selectedStories: Story[] = [];
  let lengthOfTopStories: number = topStories.length;
  let alreadySelectedStories: number[] = [];

  for (let i = 0; i < xSelectedStories;) {
    const randomIndex = Math.round(Math.random() * lengthOfTopStories + 1);
    const selectedStoryId = topStories[randomIndex];

    // Check if this story wasn't selected before
    if(alreadySelectedStories.includes(selectedStoryId)){
      continue;
    }

    // add selected story to array of already selected stories
    alreadySelectedStories.push(selectedStoryId);
    

    // fetch all the data
    const story = await fetchStoryData(selectedStoryId);
    const author = await fetchStoryAuthor(story.by);
    story.authorKarma = author.karma;    

    selectedStories.push(story);

    i++;
  }

  return selectedStories;
};

/**
 *
 * @param id ID of story
 * @returns Story object
 */
const fetchStoryData = async (id: number): Promise<Story> => {
  const story = await fetch(`${getHNAPI()}/item/${id}.json`);
  return await story.json();
};

/**
 * Checks if REACT_APP_HACKER_NEWS_API provided and returns it's value
 * @returns REACT_APP_HACKER_NEWS_API link
 */
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

/**
 * Orders stories by it's score
 * @param stories
 * @returns
 */
const orderStoriesByScore = (stories: Story[]): Story[] => {
  return stories.sort((a: Story, b: Story): number => {
    return a.score - b.score;
  });
};

/**
 * Fetches data about author
 *
 * @param authorName
 * @returns
 */
const fetchStoryAuthor = async (authorName: string): Promise<User> => {
  const story = await fetch(`${getHNAPI()}/user/${authorName}.json`);
  return await story.json();
};

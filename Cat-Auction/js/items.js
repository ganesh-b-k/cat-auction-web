// For a real auction, set this to false
export const isDemo = true;

// Specify item details
let items = [
  {
    primaryImage: "",
    title: "",
    subtitle: "",
    detail: "",
    secondaryImage: "",
    currency: "RS",
    amount: 55,
    endTime: "2023-04-25T00:00:00+00:00",
  },
  {
    primaryImage: "",
    title: "",
    subtitle: "",
    detail: "",
    secondaryImage: "",
    currency: "Rs.",
    amount: 60,
    endTime: "2023-04-25T00:05:00+00:00",
  },
  {
    primaryImage: "",
    title: "",
    subtitle: "",
    detail: "",
    secondaryImage: "",
    currency: "Rs.",
    amount: 20,
    endTime: "2023-04-25T00:10:00+00:00",
  },
  {
    primaryImage: "",
    title: "",
    subtitle: "",
    detail: "",
    secondaryImage: "",
    currency: "Rs.",
    amount: 0,
    endTime: "2023-04-25T00:15:00+00:00",
  },
  {
    primaryImage: "",
    title: "",
    subtitle: "",
    detail: "",
    secondaryImage: "",
    currency: "Rs.",
    amount: 4,
    endTime: "2023-04-25T00:20:00+00:00",
  },
  {
    primaryImage: "",
    title: "",
    subtitle: "",
    detail: "",
    secondaryImage: "",
    currency: "Rs.",
    amount: 0,
    endTime: "2023-04-25T00:25:00+00:00",
  },
  {
    primaryImage: "",
    title: "",
    subtitle: "",
    detail: "",
    secondaryImage: "",
    currency: "Rs.",
    amount: 99,
    endTime: "2023-04-25T00:30:00+00:00",
  },
  {
    primaryImage: "",
    title: "",
    subtitle: "",
    detail: "",
    secondaryImage: "",
    currency: "Rs.",
    amount: 0,
    endTime: "2023-04-25T00:35:00+00:00",
  },
  {
    primaryImage: "",
    title: "",
    subtitle: "",
    detail: "",
    secondaryImage: "",
    currency: "Rs.",
    amount: 12,
    endTime: "2023-04-25T00:40:00+00:00",
  },
  {
    primaryImage: "",
    title: "",
    subtitle: "",
    detail: "",
    secondaryImage: "",
    currency: "Rs.",
    amount: 6,
    endTime: "2023-04-25T00:45:00+00:00",
  },
  {
    primaryImage: "",
    title: "",
    subtitle: "",
    detail: "",
    secondaryImage: "",
    currency: "Rs.",
    amount: 3,
    endTime: "2023-04-25T00:50:00+00:00",
  },
  {
    primaryImage: "",
    title: "",
    subtitle: "",
    detail: "",
    secondaryImage: "",
    currency: "Rs.",
    amount: 7,
    endTime: "2023-04-25T00:55:00+00:00",
  },
];

// Fill missing fields with random information
async function generateRandomItemData(items) {
  // Random cat names
  await $.getJSON(
    "https://random-data-api.com/api/name/random_name",
    { size: items.length },
    (data) => {
      data.forEach((elem, i) => {
        items[i].title ||= elem.name;
      });
    }
  );
  
  // Random cat images
  for (let i = 0; i < items.length; i++) {
    items[i].primaryImage ||= "https://cataas.com/cat/cute?random=" + i;
    items[i].secondaryImage ||= "https://cataas.com/cat/cute?random=" + i;
  }
  return items;
}

export async function getItems() {
  items = isDemo ? await generateRandomItemData(items) : items;
  // Insert the index from the unsorted array as the item ID
  items.forEach((item, idx) => (item.id = idx));
  // Parse endTime from ISO 8601 string
  items.forEach((item) => (item.endTime = new Date(item.endTime)));
  // Sort items in ascending end time
  items.sort((a, b) => a["endTime"] - b["endTime"]);
  return items;
}

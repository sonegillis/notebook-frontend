export const notes = [
  {
    id: 1,
    title: 'Meeting Agenda',
    data: {
      time: new Date().getTime(),
      blocks: [
        {
          type: 'header',
          data: {
            text: 'Meeting Agenda',
            level: 1,
          },
        },
        {
          type: 'paragraph',
          data: {
            text: 'Discuss project timelines, review budget allocations, and assign action items',
            level: 1,
          },
        },
      ],
    },
  },
  {
    id: 2,
    title: 'Grocery List',
    data: {
      time: new Date().getTime(),
      blocks: [
        {
          type: 'header',
          data: {
            text: 'Grocery List',
            level: 1,
          },
        },
        {
          type: 'paragraph',
          data: {
            text: 'Buy eggs, milk, bread, apples, and chicken.',
            level: 1,
          },
        },
      ],
    },
  },
  {
    id: 3,
    title: 'Book Recommendations',
    data: {
      time: new Date().getTime(),
      blocks: [
        {
          type: 'header',
          data: {
            text: 'Book Recommendations',
            level: 1,
          },
        },
        {
          type: 'paragraph',
          data: {
            text: 'Consider reading "The Power of Habit" by Charles Duhigg, "Sapiens: A Brief History of Humankind" by Yuval Noah Harari, and "Atomic Habits" by James Clear.',
            level: 1,
          },
        },
      ],
    },
    body: '',
  },
  {
    id: 4,
    title: 'Travel Itinerary',
    data: {
      time: new Date().getTime(),
      blocks: [
        {
          type: 'header',
          data: {
            text: 'Travel Itinerary',
            level: 1,
          },
        },
        {
          type: 'paragraph',
          data: {
            text: 'Departure at 9:00 AM, Arrival at 12:00 PM. Hotel reservation: Check-in on May 15th, Check-out on May 20th. Sightseeing plans include visiting museums, parks, and trying local cuisine',
            level: 1,
          },
        },
      ],
    },
  },
  {
    id: 5,
    title: 'Fitness Goals',
    data: {
      time: new Date().getTime(),
      blocks: [
        {
          type: 'header',
          data: {
            text: 'Fitness Goals',
            level: 1,
          },
        },
        {
          type: 'paragraph',
          data: {
            text: 'Aim to run 5 kilometers three times a week. Incorporate strength training on Mondays and Thursdays, along with yoga and stretching every morning.',
            level: 1,
          },
        },
      ],
    },
  },
];

export type Event = {
  date: Date;
  time: string;
  location: string;
  address: string;
};

export type ScheduleDay = {
  date: Date;
  events: Event[];
};

export const SCHEDULE_2026 = [
  {
    date: new Date("Sunday, February 1, 2026"),
    events: [
      {
        date: new Date("Sunday, February 1, 2026"),
        time: "2:00 PM",
        location: "Ching Kwok Temple",
        address: "300 Bathurst St, Toronto",
      },
    ],
  },
  {
    date: new Date("Saturday, February 7, 2026"),
    events: [
      {
        date: new Date("Saturday, February 7, 2026"),
        time: "12:00 PM",
        location: "Upper Canada Mall",
        address: "17600 Yonge St, Newmarket",
      },
      {
        date: new Date("Saturday, February 7, 2026"),
        time: "2:00 PM",
        location: "Raptors 905",
        address: "Paramount Fine Foods Center 5500 Rose Cherry Pl, Mississauga",
      },
      {
        date: new Date("Saturday, February 7, 2026"),
        time: "2:45 PM",
        location: "Hillcrest Mall",
        address: "Hillcrest Mall, 9350 Yonge St, Richmond Hill",
      },
    ],
  },
  {
    date: new Date("Tuesday, February 10, 2026"),
    events: [
      {
        date: new Date("Tuesday, February 10, 2026"),
        time: "12:15 PM",
        location: "Waterpark Place",
        address: "Waterpark Place, 20 Bay St, Toronto",
      },
      {
        date: new Date("Tuesday, February 10, 2026"),
        time: "7:15 PM",
        location: "Quintessentially Canada",
        address: "Private Corporate Dinner",
      },
    ],
  },
  {
    date: new Date("Wednesday, February 11, 2026"),
    events: [
      {
        date: new Date("Wednesday, February 11, 2026"),
        time: "6:00 PM",
        location: "Lion Dance Workshop at The Well",
        address: "The Well, 486 Front St W, Toronto",
      },
    ],
  },
  {
    date: new Date("Thursday, February 12, 2026"),
    events: [
      {
        date: new Date("Thursday, February 12, 2026"),
        time: "10:00 AM",
        location: "Private College",
        address: "Private Performance",
      },
      {
        date: new Date("Thursday, February 12, 2026"),
        time: "4:00 PM",
        location: "Google",
        address: "Private Performance",
      },
      {
        date: new Date("Thursday, February 12, 2026"),
        time: "6:00 PM",
        location: "Kung Fu Workshop at The Well",
        address: "The Well, 486 Front St W, Toronto",
      },
    ],
  },
  {
    date: new Date("Friday, February 13, 2026"),
    events: [
      {
        date: new Date("Friday, February 13, 2026"),
        time: "7:30 PM",
        location: "Sugar Cafe & Lounge",
        address:
          "Sugar Cafe & Lounge, 550 York Regional Rd 7, Building E, Floor 2, Unit 281, Richmond Hill",
      },
      {
        date: new Date("Friday, February 13, 2026"),
        time: "8:00 PM",
        location: "ROM After Dark",
        address: "ROM, 100 Queens Park, Toronto",
      },
    ],
  },
  {
    date: new Date("Saturday, February 14, 2026"),
    events: [
      {
        date: new Date("Saturday, February 14, 2026"),
        time: "11:00 AM",
        location: "Hashim No Frills",
        address: "681 Silver Star Blvd, Scarborough",
      },
      {
        date: new Date("Saturday, February 14, 2026"),
        time: "2:30 PM",
        location: "Royal Ontario Museum",
        address: "ROM, 100 Queens Park, Toronto",
      },
      {
        date: new Date("Saturday, February 14, 2026"),
        time: "3:30 PM",
        location: "Royal Ontario Museum",
        address: "ROM, 100 Queens Park, Toronto",
      },
    ],
  },
  {
    date: new Date("Sunday, February 15, 2026"),
    events: [
      {
        date: new Date("Sunday, February 15, 2026"),
        time: "12:30 PM",
        location: "Chinese Cultural Center",
        address: "5183 Sheppard Ave E, Scarborough",
      },
      {
        date: new Date("Sunday, February 15, 2026"),
        time: "12:30 PM",
        location: "The Well",
        address: "The Well, 486 Front St W, Toronto",
      },
      {
        date: new Date("Sunday, February 15, 2026"),
        time: "2:30 PM",
        location: "Royal Ontario Museum",
        address: "ROM, 100 Queens Park, Toronto",
      },
      {
        date: new Date("Sunday, February 15, 2026"),
        time: "3:00 PM",
        location: "Upper Canada Mall",
        address: "Upper Canada Mall, 17600 Yonge St, Newmarket",
      },
      {
        date: new Date("Sunday, February 15, 2026"),
        time: "3:30 PM",
        location: "Royal Ontario Museum",
        address: "ROM, 100 Queens Park, Toronto",
      },
      {
        date: new Date("Sunday, February 15, 2026"),
        time: "11:30 PM",
        location: "AMPM",
        address: "AMPM, 1566 Queen St W, Toronto",
      },
    ],
  },
  {
    date: new Date("Monday, February 16, 2026"),
    events: [
      {
        date: new Date("Monday, February 16, 2026"),
        time: "2:30 PM",
        location: "Royal Ontario Museum",
        address: "ROM, 100 Queens Park, Toronto",
      },
      {
        date: new Date("Monday, February 16, 2026"),
        time: "3:30 PM",
        location: "Royal Ontario Museum",
        address: "ROM, 100 Queens Park, Toronto",
      },
      {
        date: new Date("Monday, February 16, 2026"),
        time: "11:00 PM",
        location: "Ching Kwok Temple",
        address: "300 Bathurst St, Toronto",
      },
    ],
  },
  {
    date: new Date("Tuesday, February 17, 2026"),
    events: [
      {
        date: new Date("Tuesday, February 17, 2026"),
        time: "11:00 AM",
        location: "Joyous Chinese Cuisine",
        address: "5505 Leslie St, North York",
      },
      {
        date: new Date("Tuesday, February 17, 2026"),
        time: "11:30 AM",
        location: "The Moon Restaurant",
        address: "165 York Blvd, Richmond Hill",
      },
      {
        date: new Date("Tuesday, February 17, 2026"),
        time: "12:30 PM",
        location: "Purple Orchid",
        address: "280 West Beaver Creek Rd, Richmond Hill",
      },
      {
        date: new Date("Tuesday, February 17, 2026"),
        time: "2:00 PM",
        location: "Times Square Parade",
        address: "550 HWY 7, Richmond Hill",
      },
      {
        date: new Date("Tuesday, February 17, 2026"),
        time: "2:00 PM",
        location: "Ching Kwok Temple",
        address: "300 Bathurst St, Toronto",
      },
    ],
  },
  {
    date: new Date("Wednesday, February 18, 2026"),
    events: [
      {
        date: new Date("Wednesday, February 18, 2026"),
        time: "9:00 AM",
        location: "Private Institution",
        address: "Private Performance",
      },
      {
        date: new Date("Wednesday, February 18, 2026"),
        time: "11:00 AM",
        location: "Orient Bistro",
        address: "8601 Warden Ave, Unit 4-6, Unionville",
      },
      {
        date: new Date("Wednesday, February 18, 2026"),
        time: "12:00 PM",
        location: "Asian Dragon Buffet",
        address: "2900 Warden Ave, Unit 202A, Scarborough",
      },
      {
        date: new Date("Wednesday, February 18, 2026"),
        time: "12:30 PM",
        location: "Orient Bistro",
        address: "8601 Warden Ave, Unit 4-6, Unionville",
      },
      {
        date: new Date("Wednesday, February 18, 2026"),
        time: "1:30 PM",
        location: "Golden Plaza Mall",
        address: "330 York Regional Rd 7 #328, Richmond Hill",
      },
      {
        date: new Date("Wednesday, February 18, 2026"),
        time: "2:00 PM",
        location: "Gerrard Square",
        address: "1000 Gerrard St E, Toronto",
      },
      {
        date: new Date("Wednesday, February 18, 2026"),
        time: "6:00 PM",
        location: "The Dunfield",
        address: "Private Performance",
      },
      {
        date: new Date("Wednesday, February 18, 2026"),
        time: "7:00 PM",
        location: "TDSB Public School",
        address: "Private Performance",
      },
    ],
  },
  {
    date: new Date("Thursday, February 19, 2026"),
    events: [
      {
        date: new Date("Thursday, February 19, 2026"),
        time: "9:00 AM",
        location: "UofT OISE - Private School",
        address: "Private Performance",
      },
      {
        date: new Date("Thursday, February 19, 2026"),
        time: "12:15 PM",
        location: "Oxford Richmond Adelaide",
        address: "100 Adelaide St W, Toronto",
      },
      {
        date: new Date("Thursday, February 19, 2026"),
        time: "5:00 PM",
        location: "DDSB School",
        address: "Private Performance",
      },
    ],
  },
  {
    date: new Date("Friday, February 20, 2026"),
    events: [
      {
        date: new Date("Friday, February 20, 2026"),
        time: "6:30 AM",
        location: "CP24",
        address: "Live on TV",
      },
      {
        date: new Date("Friday, February 20, 2026"),
        time: "12:00 PM",
        location: "Cafe Hollywood",
        address: "7240 Kennedy Rd, Markham",
      },
      {
        date: new Date("Friday, February 20, 2026"),
        time: "2:30 PM",
        location: "Shoppes of the Parkway",
        address: "670 HWY 7, Richmond Hill",
      },
      {
        date: new Date("Friday, February 20, 2026"),
        time: "7:00 PM",
        location: "Casa Deluz",
        address: "1571 Sandhurst Cir, Scarborough",
      },
    ],
  },
  {
    date: new Date("Saturday, February 21, 2026"),
    events: [
      {
        date: new Date("Saturday, February 21, 2026"),
        time: "10:30 AM",
        location: "Vi's No Frills",
        address: "360 McLevin Ave, Toronto",
      },
      {
        date: new Date("Saturday, February 21, 2026"),
        time: "12:00 PM",
        location: "Chinatown Center",
        address: "222 Spadina Ave, Toronto",
      },
      {
        date: new Date("Saturday, February 21, 2026"),
        time: "12:30 PM",
        location: "Purple Orchid",
        address: "280 West Beaver Creek Rd, Richmond Hill",
      },
      {
        date: new Date("Saturday, February 21, 2026"),
        time: "1:00 PM",
        location: "Dragon City Mall",
        address: "280 Spadina Ave, Toronto",
      },
      {
        date: new Date("Saturday, February 21, 2026"),
        time: "1:45 PM",
        location: "Asian Dragon Buffet",
        address: "2900 Warden Ave, Unit 202A, Scarborough",
      },
      {
        date: new Date("Saturday, February 21, 2026"),
        time: "2:30 PM",
        location: "Times Square",
        address: "550 HWY 7, Richmond Hill",
      },
      {
        date: new Date("Saturday, February 21, 2026"),
        time: "3:00 PM",
        location: "Chinatown Center",
        address: "222 Spadina Ave, Toronto",
      },
      {
        date: new Date("Saturday, February 21, 2026"),
        time: "7:00 PM",
        location: "Casino Rama Gaming House - Mississauga",
        address: "2295 Battleford Rd, Mississauga",
      },
      {
        date: new Date("Saturday, February 21, 2026"),
        time: "11:59 PM",
        location: "JSTDRMN",
        address: "25 Commercial Rd Unit 9, East York",
      },
    ],
  },
  {
    date: new Date("Sunday, February 22, 2026"),
    events: [
      {
        date: new Date("Sunday, February 22, 2026"),
        time: "12:00 PM",
        location: "Mississauga Chinatown",
        address: "888 Dundas St E, Mississauga",
      },
      {
        date: new Date("Sunday, February 22, 2026"),
        time: "12:30 PM",
        location: "Purple Orchid",
        address: "280 West Beaver Creek Rd, Richmond Hill",
      },
      {
        date: new Date("Sunday, February 22, 2026"),
        time: "4:00 PM",
        location: "Casino Rama Gaming House - Scarborough",
        address: "991 Kennedy Rd, Scarborough",
      },
      {
        date: new Date("Sunday, February 22, 2026"),
        time: "5:00 PM",
        location: "Yorkdale Shopping Center",
        address: "3401 Dufferin St, North York",
      },
      {
        date: new Date("Sunday, February 22, 2026"),
        time: "7:30 PM",
        location: "Asian Dragon Buffet",
        address: "222 Spadina Ave, Toronto",
      },
    ],
  },
  {
    date: new Date("Wednesday, February 25, 2026"),
    events: [
      {
        date: new Date("Wednesday, February 25, 2026"),
        time: "6:15 PM",
        location: "Ascend Canada",
        address: "Private Performance",
      },
    ],
  },
  {
    date: new Date("Thursday, February 26, 2026"),
    events: [
      {
        date: new Date("Thursday, February 26, 2026"),
        time: "12:00 PM",
        location: "Salesforce",
        address: "Private Performance",
      },
      {
        date: new Date("Thursday, February 26, 2026"),
        time: "2:00 PM",
        location: "Retirement Home",
        address: "Private Performance",
      },
    ],
  },
  {
    date: new Date("Saturday, February 28, 2026"),
    events: [
      {
        date: new Date("Saturday, February 28, 2026"),
        time: "12:00 PM",
        location: "King Square Shopping Center",
        address: "9390 Woodbine Ave, Markham",
      },
    ],
  },
];
